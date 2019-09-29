//import { BuilderHUD } from "./modules/BuilderHUD";
import utils from "../node_modules/decentraland-ecs-utils/index";
import { MovableEntity } from "./gameObjects/movableEntity";
import resources from "./resources";

//model stuff
const point1 = new Vector3(24, 5.6, 5.5);
const point2 = new Vector3(12, 5.6, 5.5);
const point3 = new Vector3(12, 5.6, 17.5);
const point4 = new Vector3(24, 5.6, 17.5);

const path: Vector3[] = [point1, point2, point3, point4];
const TURN_TIME = 0.9;
const HIT_TIME = 1.0;
let HIT_POINTS = 5;
let PLAYER_HP = 10;
let dead = false;
let clicked = false;

function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}

async function asyncCall() {
  log("calling");
  var result = await resolveAfter2Seconds();
  clicked = false;
  log("clicked is false");
  log(result);
  // expected output: 'resolved'
}

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
  { position: new Vector3(16, 5.6, 4.3) },
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

let fighter = new Entity();
fighter.addComponent(
  new Transform({
    position: new Vector3(24, 5.6, 5.5)
  })
);

fighter.addComponent(new AudioSource(resources.sounds.fighterhit));

fighter.addComponent(resources.models.brute);

let fighterAnimator = new Animator();
fighter.addComponent(fighterAnimator);

//Add walk animation
const walkClip = new AnimationState("walk");
fighterAnimator.addClip(walkClip);
const turnRClip = new AnimationState("turnRight");
turnRClip.looping = false;
fighterAnimator.addClip(turnRClip);
const spinAttack = new AnimationState("swipeAttack");
fighterAnimator.addClip(spinAttack);
const hitInFace = new AnimationState("hitInHead");
fighterAnimator.addClip(hitInFace);
const deathFromFront = new AnimationState("deathFromFront");
fighterAnimator.addClip(deathFromFront);
const taunt = new AnimationState("taunt");
fighterAnimator.addClip(taunt);

fighter.addComponent(new LerpData());

fighter.addComponent(
  new OnClick((): void => {
    if (!dead) {
      log("fighter was clicked");
      clicked = true;

      asyncCall();
      //fighter.addComponent(new TimeOut(HIT_TIME));
      spinAttack.stop();
      hitInFace.play();
      walkClip.playing = false;
      spinAttack.playing = false;
      turnRClip.playing = false;
      deathFromFront.playing = false;
      hitInFace.looping = false;
      fighter.getComponent(AudioSource).playOnce();

      HIT_POINTS = HIT_POINTS - 1;
      log("hit points is now: ", HIT_POINTS);

      if (HIT_POINTS == 0) {
        log("play death animation");
        spinAttack.stop();
        hitInFace.stop();
        walkClip.stop();
        dead = true;
        deathFromFront.play();
        //deathFromFront.playing = true;
        deathFromFront.looping = false;
        lantern_lit3.getComponent(utils.ToggleComponent).toggle();
      }

      //   if (dead == false && hitInFace.playing == false) {
      //     log("play hit in face looping false");
      //     hitInFace.reset();
      //     //hitInFace.playing = true;
      //     hitInFace.play();
      //     hitInFace.looping = false;
      //   }
    } else {
      log("grab the key from the corpse");
    }
  })
);

engine.addEntity(fighter);
walkClip.play();

// Walk System
export class GnarkWalk {
  update(dt: number) {
    if (!fighter.hasComponent(TimeOut) && !spinAttack.playing && !dead) {
      let transform = fighter.getComponent(Transform);
      let path = fighter.getComponent(LerpData);
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
        fighter.addComponent(new TimeOut(TURN_TIME));
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
    let transform = fighter.getComponent(Transform);
    let path = fighter.getComponent(LerpData);
    let dist = distance(transform.position, camera.position);
    if (dist < 16) {
      if (!dead && !clicked) {
        if (spinAttack.playing == false) {
          spinAttack.reset();
          spinAttack.play();
          spinAttack.playing = true;
          walkClip.playing = false;
          turnRClip.playing = false;
          hitInFace.playing = false;
          PLAYER_HP--;
          log("PLAYER HP is now: ", PLAYER_HP);
          if (PLAYER_HP == 0) {
            log("play dead music.. Kick player out of the scene");
          }
        }
      }
      let playerPos = new Vector3(camera.position.x, 5.6, camera.position.z);
      transform.lookAt(playerPos);
    } else if (spinAttack.playing) {
      spinAttack.stop();
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

//const hud: BuilderHUD = new BuilderHUD();
//hud.attachToEntity(bu)
