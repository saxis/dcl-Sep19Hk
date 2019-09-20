// Skeleton Tower by Saxis
// (c) 2019 Saxis
//

import utils from "../node_modules/decentraland-ecs-utils/index";
import { BuilderHUD } from './modules/BuilderHUD';
import { CreateFloor1 } from "./scenes/floor1";
import { CreateFloor2 } from './scenes/floor2';
import { createOutside } from "./scenes/outside";
import { CreateFloor3 } from "./scenes/floor3";

const scene = new Entity()
// const transform = new Transform({
//   position: new Vector3(0, 0, 0),
//   rotation: new Quaternion(0, 0, 0, 1),
//   scale: new Vector3(1, 1, 1)
// })
// scene.addComponentOrReplace(transform)
engine.addEntity(scene)


const towerscene = new Entity()
towerscene.setParent(scene)
const gltfShape = new GLTFShape('models/skeletontower15.glb')
towerscene.addComponentOrReplace(gltfShape)
const transform_2 = new Transform({
  position: new Vector3(24, 0, 12),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
towerscene.addComponentOrReplace(transform_2)
engine.addEntity(towerscene)

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

  CreateFloor1(scene, DoorState);
  CreateFloor2(scene, DoorState);
  CreateFloor3(scene, DoorState);
  createOutside();

//const hud:BuilderHUD =  new BuilderHUD();
// hud.attachToEntity(chest_Base_Gold_01);
// hud.attachToEntity(chest_Top_Gold_01);
//hud.attachToEntity(bottomFloorDoor);
//hud.attachToEntity(towerscene);
//hud.attachToEntity(blueTree);
//hud.setDefaultParent(scene);