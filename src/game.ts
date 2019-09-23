// Skeleton Tower by Saxis
// (c) 2019 Saxis
//

//import utils from "../node_modules/decentraland-ecs-utils/index";
import { BuilderHUD } from "./modules/BuilderHUD";
import { CreateFloor1 } from "./scenes/floor1";
// import { CreateFloor2 } from './scenes/floor2';
// import { CreateFloor3 } from "./scenes/floor3";
import { CreateOutside } from "./scenes/outside";
import { BaseScene } from "./gameObjects/baseScene";

let baseScene = new BaseScene();

@Component("doorState")
export class DoorState {
  closed: boolean = true;
  fraction: number = 0;
  openPos: Quaternion = Quaternion.Euler(0, 90, 0);
  closedPos: Quaternion = Quaternion.Euler(0, 0, 0);
}

// // a group to keep track of all entities with a DoorState component
const doors = engine.getComponentGroup(DoorState);

// // a system to carry out the rotation
export class RotatorSystem implements ISystem {
  update(dt: number) {
    // iterate over the doors in the component group
    for (let door of doors.entities) {
      // get some handy shortcuts
      let state = door.getComponent(DoorState);
      let transform = door.getComponent(Transform);

      // check if the rotation needs to be adjusted
      if (state.closed == false && state.fraction < 1) {
        state.fraction += dt;
        let rot = Quaternion.Slerp(
          state.closedPos,
          state.openPos,
          state.fraction
        );
        transform.rotation = rot;
      } else if (state.closed == true && state.fraction > 0) {
        state.fraction -= dt;
        let rot = Quaternion.Slerp(
          state.closedPos,
          state.openPos,
          state.fraction
        );
        transform.rotation = rot;
      }
    }
  }
}

// // // Add system to engine
engine.addSystem(new RotatorSystem());

CreateFloor1(baseScene, DoorState);
//CreateFloor2(baseScene);
//CreateFloor3(baseScene);
CreateOutside();

const bagofpotatoes = new Entity();
const bagofpotatoesShape = new GLTFShape("models/sackofpotatoes.glb");
const sackofpotatoesLoc = new Transform({
  position: new Vector3(12, 0, 14),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
});
bagofpotatoes.addComponent(bagofpotatoesShape);
bagofpotatoes.addComponent(sackofpotatoesLoc);
engine.addEntity(bagofpotatoes);

const table_Wood_01 = new Entity()
//const gltfShape_9 = new GLTFShape('models/Table_Wood_01/Table_Wood_01.glb')
const gltfShape_9 = new GLTFShape('models/orc_table.glb')
table_Wood_01.addComponentOrReplace(gltfShape_9)
const transform_13 = new Transform({
  position: new Vector3(14, 0, 8.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
table_Wood_01.addComponentOrReplace(transform_13)
engine.addEntity(table_Wood_01)

const bench_Circular_01 = new Entity();
const gltfShape_8 = new GLTFShape(
  "models/Bench_Circular_01/Bench_Circular_01.glb"
);
bench_Circular_01.addComponentOrReplace(gltfShape_8);
const transform_12 = new Transform({
  position: new Vector3(15.5, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
});
bench_Circular_01.addComponentOrReplace(transform_12);
engine.addEntity(bench_Circular_01);

const chest_Base_Iron_01 = new Entity()
const gltfShape_11 = new GLTFShape('models/Chest_Base_Iron_01/Chest_Base_Iron_01.glb')
chest_Base_Iron_01.addComponentOrReplace(gltfShape_11)
const transform_15 = new Transform({
  position: new Vector3(14.5, 0, 14),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
chest_Base_Iron_01.addComponentOrReplace(transform_15)
engine.addEntity(chest_Base_Iron_01)

const orc_chandellier = new Entity()
const chandellier_model = new GLTFShape('models/candelabra1.glb')
const orc_chandellierLoc =  new Transform({
  position: new Vector3(24, 0, 5.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
orc_chandellier.addComponent(chandellier_model)
orc_chandellier.addComponent(orc_chandellierLoc)
engine.addEntity(orc_chandellier)

const archWay_02 = new Entity()
const gltfShape_26 = new GLTFShape('models/ArchWay_02/ArchWay_02.glb')
archWay_02.addComponentOrReplace(gltfShape_26)
const transform_30 = new Transform({
  position: new Vector3(20, 0, 23),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
archWay_02.addComponentOrReplace(transform_30)
engine.addEntity(archWay_02)

// const stone_Module_4M = new Entity()
// const gltfShape_32 = new GLTFShape('models/Stone_Module_4M/Stone_Module_4M.glb')
// stone_Module_4M.addComponentOrReplace(gltfShape_32)
// const transform_36 = new Transform({
//   position: new Vector3(4, 0, 4),
//   rotation: new Quaternion(0, 0, 0, 1),
//   scale: new Vector3(1, 1, 1)
// })
// stone_Module_4M.addComponentOrReplace(transform_36)
// engine.addEntity(stone_Module_4M)


const hud: BuilderHUD = new BuilderHUD();
// hud.attachToEntity(chest_Base_Gold_01);
// hud.attachToEntity(chest_Top_Gold_01);
//hud.attachToEntity(bottomFloorDoor);
//hud.attachToEntity(stone_Module_4M);
//hud.attachToEntity(blueTree);
//hud.setDefaultParent(baseScene);
