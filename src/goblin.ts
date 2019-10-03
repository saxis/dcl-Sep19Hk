import utils from "../node_modules/decentraland-ecs-utils/index";
import { MovableEntity } from "./gameObjects/movableEntity";
import resources from "./resources";

//model stuff
// const point1 = new Vector3(24, 1.6, 5.5);
// const point2 = new Vector3(12, 1.6, 5.5);
// const point3 = new Vector3(12, 1.6, 17.5);
// const point4 = new Vector3(24, 1.6, 17.5);

// const path: Vector3[] = [point1, point2, point3, point4];
const point1 = new Vector3(23.8, 1.6, 6.2);
const point2 = new Vector3(16.8, 1.6, 6.2);
const point3 = new Vector3(16.8, 1.6, 6.2);
const point4 = new Vector3(12.8, 1.6, 10.2);
const point5 = new Vector3(12.8, 1.6, 12.2);
const point6 = new Vector3(19.8, 1.6, 12.2);
const point7 = new Vector3(19.8, 1.6, 15.2);
const point8 = new Vector3(12.8, 1.6, 15.2);
const point9 = new Vector3(12.8, 1.6, 17.2);
const point10 = new Vector3(23.8, 1.6, 17.2);

const path: Vector3[] = [
  point1,
  point2,
  point3,
  point4,
  point5,
  point6,
  point7,
  point8,
  point9,
  point10
];

const TURN_TIME = 0.9;
const HIT_TIME = 1.0;
let HIT_POINTS = 5;
let PLAYER_HP = 10;
let dead = false;
let clicked = false;

// function resolveAfter2Seconds() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve("resolved");
//     }, 2000);
//   });
// }

// async function asyncCall() {
//   log("calling");
//   var result = await resolveAfter2Seconds();
//   clicked = false;
//   log("clicked is false");
//   log(result);
//   // expected output: 'resolved'
// }

@Component("timeOut")
export class TimeOut {
  timeLeft: number;
  constructor(time: number) {
    this.timeLeft = time;
  }
}

export const paused = engine.getComponentGroup(TimeOut);

const lantern_lit3 = new MovableEntity(
  resources.models.lanternLit,
  { position: new Vector3(16, 1.6, 4.3) },
  resources.sounds.moveObject1,
  new Vector3(0.5, 0, 0)
);

// LerpData component
@Component("lerpData")
export class LerpData {
  array: Vector3[] = path;
  origin: number = 0;
  target: number = 1;
  fraction: number = 0;
}

let player = new Entity();
player.addComponent(new AudioSource(resources.sounds.playerHit));
player.addComponent(
  new Transform({
    position: new Vector3(0, 0, 0)
  })
)
engine.addEntity(player)

let goblin = new Entity();
goblin.addComponent(
  new Transform({
    position: new Vector3(24, 1.6, 5.5)
  })
);
goblin.addComponent(new AudioSource(resources.sounds.goblinHit));
goblin.addComponent(resources.models.goblin);

let goblinAnimator = new Animator();
goblin.addComponent(goblinAnimator);

//Add walk animation
const walkClip = new AnimationState("walkingInPlace");
goblinAnimator.addClip(walkClip);
const turnRClip = new AnimationState("turnRIght");
turnRClip.looping = false;
goblinAnimator.addClip(turnRClip);
const swipeAttack = new AnimationState("swipeAttack");
goblinAnimator.addClip(swipeAttack);
const hitInFace = new AnimationState("hitInFace");
goblinAnimator.addClip(hitInFace);
const deathFromFront = new AnimationState("deathFromFront");
goblinAnimator.addClip(deathFromFront);

goblin.addComponent(new LerpData());

goblin.addComponent(
  new OnClick((): void => {
    if (!dead) {
      log("goblin was clicked");
      clicked = true;

      swipeAttack.stop();
      walkClip.stop();
      turnRClip.stop();
      hitInFace.play();
      hitInFace.looping = false;

      goblin.getComponent(AudioSource).playOnce();

      HIT_POINTS = HIT_POINTS - 1;
      log("hit points is now: ", HIT_POINTS);

      if (HIT_POINTS == 0) {
        log("play death animation");
        swipeAttack.stop();
        hitInFace.stop();
        walkClip.stop();
        dead = true;
        deathFromFront.play();
        //deathFromFront.playing = true;
        deathFromFront.looping = false;
        lantern_lit3.getComponent(utils.ToggleComponent).toggle();
      }

    }
  })
);

const book1 = new Entity();
engine.addEntity(book1);
book1.addComponent(resources.models.openBook);
book1.addComponent(
  new Transform({
    position: new Vector3(13.8, 2.6, 8.2),
    rotation: Quaternion.Euler(0, 90, 0)
  })
);
book1.addComponent(new AudioSource(resources.sounds.executioner));
book1.addComponent(
  new OnClick((): void => {
    log("book clicked");
    if (book1.getComponent(AudioSource).playing) {
      book1.getComponent(AudioSource).volume = 0;
    } else {
      book1.getComponent(AudioSource).playOnce();
    }
  })
);

engine.addEntity(goblin);
walkClip.play();

// Walk System
export class GnarkWalk {
  update(dt: number) {
    if (!goblin.hasComponent(TimeOut) && !swipeAttack.playing && !dead) {
      let transform = goblin.getComponent(Transform);
      let path = goblin.getComponent(LerpData);
      walkClip.playing = true;
      turnRClip.playing = false;
      if (path.fraction < 1) {
        path.fraction += dt / 12;
        transform.position = Vector3.Lerp(
          path.array[path.origin],
          path.array[path.target],
          path.fraction
        );
      } else {
        path.origin = path.target;
        path.target += 1;
        if (path.target >= path.array.length) {
          path.target = 0;
        }
        path.fraction = 0;
        transform.lookAt(path.array[path.target]);
        walkClip.pause();
        turnRClip.play();
        turnRClip.looping = false;
        goblin.addComponent(new TimeOut(TURN_TIME));
      }
    }
  }
}

engine.addSystem(new GnarkWalk());

export class WaitSystem {
  update(dt: number) {
    for (let ent of paused.entities) {
      let time = ent.getComponentOrNull(TimeOut);
      if (time) {
        if (time.timeLeft > 0) {
          time.timeLeft -= dt;
        } else {
          ent.removeComponent(TimeOut);
        }
      }
    }
  }
}

engine.addSystem(new WaitSystem());

export class BattleCry {
  update() {
    let transform = goblin.getComponent(Transform);
    let playertransform = player.getComponent(Transform)
    let path = goblin.getComponent(LerpData);
    let dist = distance(transform.position, camera.position);
    // playertransform.position = Vector3.Lerp(
    //   Number(camera.position.x), 1.6, camera.position.z 
    // );
    if (dist < 16) {
      if (!dead) {
        if (swipeAttack.playing == false) {
          swipeAttack.reset();
          swipeAttack.playing = true;
          walkClip.playing = false;
          turnRClip.playing = false;
          hitInFace.playing = false;
          PLAYER_HP--;
          log('play player hit sound')
          player.getComponent(AudioSource).playOnce();
          log("PLAYER HP is now: ", PLAYER_HP);
          if (PLAYER_HP == 0) {
            log("play dead music.. Kick player out of the scene");
          }
        }

      }
      let playerPos = new Vector3(camera.position.x, 1.6, camera.position.z);
      transform.lookAt(playerPos);
      
    } else if (swipeAttack.playing) {
      swipeAttack.stop();
      transform.lookAt(path.array[path.target]);
    }
  }
}

engine.addSystem(new BattleCry());

const camera = Camera.instance;

function distance(pos1: Vector3, pos2: Vector3): number {
  const a = pos1.x - pos2.x;
  const b = pos1.z - pos2.z;
  return a * a + b * b;
}

const spicebag1 = new Entity();
spicebag1.addComponent(resources.models.spicebag1);
const spicebag1Loc = new Transform({
  position: new Vector3(25, 1.6, 12),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
});
spicebag1.addComponent(spicebag1Loc);
engine.addEntity(spicebag1);

const spicebag2 = new Entity();
spicebag2.addComponent(resources.models.spicebag2);
const spicebag2Loc = new Transform({
  position: new Vector3(25, 1.6, 13),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
});
spicebag2.addComponent(spicebag2Loc);
engine.addEntity(spicebag2);

const spicebag3 = new Entity();
spicebag3.addComponent(resources.models.spicebag3);
const spicebag3Loc = new Transform({
  position: new Vector3(25, 1.6, 14),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
});
spicebag3.addComponent(spicebag3Loc);
engine.addEntity(spicebag3);
