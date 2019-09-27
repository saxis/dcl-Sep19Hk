//import { BuilderHUD } from "./modules/BuilderHUD";
import utils from "../node_modules/decentraland-ecs-utils/index";
import { MovableEntity } from "./gameObjects/movableEntity";
import resources from "./resources";

//model stuff
const point1 = new Vector3(24, 1.6, 5.5);
const point2 = new Vector3(12, 1.6, 5.5);
const point3 = new Vector3(12, 1.6, 17.5);
const point4 = new Vector3(24, 1.6, 17.5);

const path: Vector3[] = [point1, point2, point3, point4];
const TURN_TIME = 0.9;
const HIT_TIME = 1.0;
let HIT_POINTS = 5;
let PLAYER_HP = 10;
let dead = false;

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

let goblin = new Entity();
goblin.addComponent(
  new Transform({
    position: new Vector3(5, 0, 5)
  })
);

goblin.addComponent(
  new AudioSource(resources.sounds.goblinHit)
);

//let goblinShape = new GLTFShape("models/ghoulBossWalking.glb");
//let goblinShape = new GLTFShape("models/goblinAnimated3.glb");
//let goblinShape = new GLTFShape('models/zombie_murderer/zombie_murderer/resized.gltf')

goblin.addComponent(resources.models.goblinShape);

let goblinAnimator = new Animator();
goblin.addComponent(goblinAnimator);

//Add walk animation
//const walkClip = new AnimationState('walk')
const walkClip = new AnimationState("walkingInPlace");
goblinAnimator.addClip(walkClip);
const turnRClip = new AnimationState("turnRight");
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
      goblin.addComponent(new TimeOut(HIT_TIME));
      walkClip.playing = false;
      swipeAttack.playing = false;
      turnRClip.playing = false;
      deathFromFront.playing = false;
      //hitInFace.play()
      //hitInFace.looping = false

      goblin.getComponent(AudioSource).playOnce();

      HIT_POINTS = HIT_POINTS - 1;
      log("hit points is now: ", HIT_POINTS);

      if (HIT_POINTS == 0) {
        log("play death animation");
        dead = true;
        deathFromFront.playing = true;
        deathFromFront.looping = false;
        lantern_lit3.getComponent(utils.ToggleComponent).toggle();
      }

      if (dead == false && hitInFace.playing == false) {
        log("play hit in face looping false");
        hitInFace.reset();
        //hitInFace.playing = true;
        hitInFace.play();
        hitInFace.looping = false;
      }
    } else {
      log("grab the key from the corpse");
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
book1.addComponent(
  new OnClick((): void => {
    log("book clicked");

    
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
    let path = goblin.getComponent(LerpData);
    let dist = distance(transform.position, camera.position);
    if (dist < 16) {
      if (!dead) {
        if (swipeAttack.playing == false) {
          swipeAttack.reset();
          swipeAttack.playing = true;
          walkClip.playing = false;
          turnRClip.playing = false;
          hitInFace.playing = false;
          PLAYER_HP--;
          log('PLAYER HP is now: ', PLAYER_HP)
          if(PLAYER_HP == 0) {
            log('play dead music.. Kick player out of the scene')
          }
        }
      }
      let playerPos = new Vector3(camera.position.x, 0, camera.position.z);
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

//const hud: BuilderHUD = new BuilderHUD();
//hud.attachToEntity(bu)
