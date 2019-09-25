// import { BuilderHUD } from "./modules/BuilderHUD";

// //model stuff
// const point1 = new Vector3(24, 0, 5.5);
// const point2 = new Vector3(12, 0, 5.5);
// const point3 = new Vector3(12, 0, 17.5);
// const point4 = new Vector3(24, 0, 17.5);

// const path: Vector3[] = [point1, point2, point3, point4];
// const TURN_TIME = 0.9;
// const HIT_TIME = 1.0;

// @Component("timeOut")
// export class TimeOut {
//   timeLeft: number;
//   constructor(time: number) {
//     this.timeLeft = time;
//   }
// }

// export const paused = engine.getComponentGroup(TimeOut);


// // LerpData component
// @Component("lerpData")
// export class LerpData {
//   array: Vector3[] = path;
//   origin: number = 0;
//   target: number = 1;
//   fraction: number = 0;
// }

// let gnark = new Entity();
// gnark.addComponent(
//   new Transform({
//     position: new Vector3(5, 0, 5)
//   })
// );

// //let gnarkShape = new GLTFShape("models/ghoulBossWalking.glb");
// let gnarkShape = new GLTFShape('models/goblinAnimated2.glb')
// //let gnarkShape = new GLTFShape('models/zombie_murderer/zombie_murderer/resized.gltf')

// gnark.addComponent(gnarkShape);

// let gnarkAnimator = new Animator();
// gnark.addComponent(gnarkAnimator);

// //Add walk animation
// //const walkClip = new AnimationState('walk')
// const walkClip = new AnimationState("walkingInPlace");
// gnarkAnimator.addClip(walkClip);
// const turnRClip = new AnimationState("turnRight");
// turnRClip.looping = false;
// gnarkAnimator.addClip(turnRClip);
// const swipeAttack = new AnimationState("swipeAttack");
// gnarkAnimator.addClip(swipeAttack);
// const hitInFace = new AnimationState("hitInFace")
// gnarkAnimator.addClip(hitInFace);

// gnark.addComponent(new LerpData());

// gnark.addComponent(
//   new OnClick((): void => {
//     gnark.addComponent(new TimeOut(HIT_TIME));
//     walkClip.playing = false;
//     swipeAttack.playing = false;
//     turnRClip.playing = false;
//     //hitInFace.play()
//     //hitInFace.looping = false
//     if (hitInFace.playing == false) {
//       hitInFace.reset();
//       hitInFace.playing = true;
      
//     }
//   })
// );

// const book1 = new Entity();
//   engine.addEntity(book1);
//   book1.addComponent(new GLTFShape('models/Book_06/Book_06.glb'))
//   book1.addComponent(new Transform({
//     position: new Vector3(13.8, 1, 8.2),
//     rotation: Quaternion.Euler(0, 90, 0)
//   }))
//   book1.addComponent(
//     new OnClick(():void => {
//      log('book clicked')
//     })
//   )



//   engine.addEntity(gnark); 
//   walkClip.play();





// // Walk System
// export class GnarkWalk {
//   update(dt: number) {
//     if (!gnark.hasComponent(TimeOut) && !swipeAttack.playing) {
//       let transform = gnark.getComponent(Transform);
//       let path = gnark.getComponent(LerpData);
//       walkClip.playing = true;
//       turnRClip.playing = false;
//       if (path.fraction < 1) {
//         path.fraction += dt / 12;
//         transform.position = Vector3.Lerp(
//           path.array[path.origin],
//           path.array[path.target],
//           path.fraction
//         );
//       } else {
//         path.origin = path.target;
//         path.target += 1;
//         if (path.target >= path.array.length) {
//           path.target = 0;
//         }
//         path.fraction = 0;
//         transform.lookAt(path.array[path.target]);
//         walkClip.pause();
//         turnRClip.play();
//         turnRClip.looping = false;
//         gnark.addComponent(new TimeOut(TURN_TIME));
//       }
//     }
//   }
// }

// engine.addSystem(new GnarkWalk());


// export class WaitSystem {
//   update(dt: number) {
//     for (let ent of paused.entities) {
//       let time = ent.getComponentOrNull(TimeOut);
//       if (time) {
//         if (time.timeLeft > 0) {
//           time.timeLeft -= dt;
//         } else {
//           ent.removeComponent(TimeOut);
//         }
//       }
//     }
//   }
// }

// engine.addSystem(new WaitSystem());

// export class BattleCry {
//   update() {
//     let transform = gnark.getComponent(Transform);
//     let path = gnark.getComponent(LerpData);
//     let dist = distance(transform.position, camera.position);
//     if (dist < 16) {
//       if (swipeAttack.playing == false) {
//         swipeAttack.reset();
//         swipeAttack.playing = true;
//         walkClip.playing = false;
//         turnRClip.playing = false;
//       }
//       let playerPos = new Vector3(camera.position.x, 0, camera.position.z);
//       transform.lookAt(playerPos);
//     } else if (swipeAttack.playing) {
//       swipeAttack.stop();
//       transform.lookAt(path.array[path.target]);
//     }
//   }
// }

// engine.addSystem(new BattleCry());

// const camera = Camera.instance;

// function distance(pos1: Vector3, pos2: Vector3): number {
//   const a = pos1.x - pos2.x;
//   const b = pos1.z - pos2.z;
//   return a * a + b * b;
// }

// const hud: BuilderHUD = new BuilderHUD();
// hud.attachToEntity(book1)
