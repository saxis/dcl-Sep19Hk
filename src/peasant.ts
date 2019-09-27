//import { BuilderHUD } from "./modules/BuilderHUD";
//import utils from "../node_modules/decentraland-ecs-utils/index";
//import { MovableEntity } from "./gameObjects/movableEntity";
import resources from "./resources";
import { PeasantDialog } from './ui/index';

// export function CreatePeasant(gameCanvas: UICanvas):void {


// }

const gameCanvas = new UICanvas();

//model stuff
const point1 = new Vector3(46, 0, 45);
const point2 = new Vector3(46, 0, 3);
const point3 = new Vector3(40, 0, 1);
const point4 = new Vector3(3, 0, 1);
const point5 = new Vector3(3, 0, 45);

const path: Vector3[] = [point1, point2, point3, point4, point5];
const TURN_TIME = 0.9;
const HIT_TIME = 1.0;
let HIT_POINTS = 5;
let dead = false;

@Component("timeOut")
export class TimeOut {
  timeLeft: number;
  constructor(time: number) {
    this.timeLeft = time;
  }
}

export const paused = engine.getComponentGroup(TimeOut);

// LerpData component
@Component("lerpData")
export class LerpData {
  array: Vector3[] = path;
  origin: number = 0;
  target: number = 1;
  fraction: number = 0;
}

let peasantGirl = new Entity();
peasantGirl.addComponent(
  new Transform({
    position: new Vector3(30, 0, 30)
  })
);

peasantGirl.addComponent(resources.models.peasantGirl);

let peasantGirlAnimator = new Animator();
peasantGirl.addComponent(peasantGirlAnimator);

//Add walk animation
const walkClip = new AnimationState('walk')
//const walkClip = new AnimationState("slowWalking");
//const walkClip = new AnimationState("walkingInPlace");
peasantGirlAnimator.addClip(walkClip);
const turnRClip = new AnimationState("turnLeft");
turnRClip.looping = false;
peasantGirlAnimator.addClip(turnRClip);
const raiseDeadClip = new AnimationState("talking");
peasantGirlAnimator.addClip(raiseDeadClip);

peasantGirl.addComponent(new LerpData());

const dialog = new PeasantDialog(gameCanvas)

peasantGirl.addComponent(
  new OnClick((): void => {
    log("peasantGirl was clicked");
    dialog.run();
  })
);

engine.addEntity(peasantGirl);
walkClip.play();

// Walk System
export class GnarkWalk {
  update(dt: number) {
    if (!peasantGirl.hasComponent(TimeOut) && !raiseDeadClip.playing) {
      let transform = peasantGirl.getComponent(Transform);
      let path = peasantGirl.getComponent(LerpData);
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
        peasantGirl.addComponent(new TimeOut(TURN_TIME));
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
    let transform = peasantGirl.getComponent(Transform);
    let path = peasantGirl.getComponent(LerpData);
    let dist = distance(transform.position, camera.position);
    if (dist < 16) {
      if (raiseDeadClip.playing == false) {
        raiseDeadClip.reset();
        raiseDeadClip.playing = true;
        walkClip.playing = false;
        turnRClip.playing = false;
      }
      let playerPos = new Vector3(camera.position.x, 0, camera.position.z);
      transform.lookAt(playerPos);
    } else if (raiseDeadClip.playing) {
      raiseDeadClip.stop();
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
