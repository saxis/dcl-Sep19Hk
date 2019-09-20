// Skeleton Tower by Saxis
// (c) 2019 Saxis
//

import utils from "../node_modules/decentraland-ecs-utils/index";
import { BuilderHUD } from './modules/BuilderHUD';
import { CreateObjects } from "./scenes/floor1";

const scene = new Entity()
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
scene.addComponentOrReplace(transform)
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

  const tree_Leafs_02 = new Entity();
  tree_Leafs_02.setParent(scene);
  const gltfShape_4 = new GLTFShape("models/Tree_Leafs_02/Tree_Leafs_02.glb");
  tree_Leafs_02.addComponentOrReplace(gltfShape_4);
  const transform_8 = new Transform({
    position: new Vector3(6, 0, 4),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  });
  tree_Leafs_02.addComponentOrReplace(transform_8);
  engine.addEntity(tree_Leafs_02);

  const redPlant = new Entity();
  redPlant.setParent(scene);
  const gltfShape_5 = new GLTFShape("models/Vegetation_08/Vegetation_08.glb");
  redPlant.addComponentOrReplace(gltfShape_5);
  const transform_9 = new Transform({
    position: new Vector3(23, 0, 12.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  });
  redPlant.addComponentOrReplace(transform_9);
  engine.addEntity(redPlant);

  const blueTree = new Entity();
  blueTree.setParent(scene);
  const gltfShape_28 = new GLTFShape(
    "models/Tree_Forest_Blue_02/Tree_Forest_Blue_02.glb"
  );
  blueTree.addComponentOrReplace(gltfShape_28);
  const transform_32 = new Transform({
    position: new Vector3(32.5, 0, 21.51),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  });
  blueTree.addComponentOrReplace(transform_32);
  engine.addEntity(blueTree);

  const tree_Leafs_01 = new Entity();
  tree_Leafs_01.setParent(scene);
  const gltfShape_29 = new GLTFShape("models/Tree_Leafs_01/Tree_Leafs_01.glb");
  tree_Leafs_01.addComponentOrReplace(gltfShape_29);
  const transform_33 = new Transform({
    position: new Vector3(11.5, 0, 23.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  });
  tree_Leafs_01.addComponentOrReplace(transform_33);
  engine.addEntity(tree_Leafs_01);

  const tree_Forest_Green_01 = new Entity();
  tree_Forest_Green_01.setParent(scene);
  const gltfShape_30 = new GLTFShape(
    "models/Tree_Forest_Green_01/Tree_Forest_Green_01.glb"
  );
  tree_Forest_Green_01.addComponentOrReplace(gltfShape_30);
  const transform_34 = new Transform({
    position: new Vector3(12, 0, 11.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  });
  tree_Forest_Green_01.addComponentOrReplace(transform_34);
  engine.addEntity(tree_Forest_Green_01);

  const pinkTree = new Entity();
  pinkTree.setParent(scene);
  const gltfShape_31 = new GLTFShape(
    "models/Tree_Forest_Pink_04/Tree_Forest_Pink_04.glb"
  );
  pinkTree.addComponentOrReplace(gltfShape_31);
  const transform_35 = new Transform({
    position: new Vector3(34.5, 0, 27),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  });
  pinkTree.addComponentOrReplace(transform_35);
  engine.addEntity(pinkTree);

  const bottomFloorDoor = new Entity();
  bottomFloorDoor.setParent(scene);
  const woodenDoorModel = new GLTFShape("models/Door_Wood_01/Door_Wood_01.glb");
  bottomFloorDoor.addComponentOrReplace(woodenDoorModel);
  const firstFloorDoorLoc = new Transform({
    position: new Vector3(0.5, 0, 0),
    rotation: new Quaternion(0, 0, 0, 1)
  });
  bottomFloorDoor.addComponentOrReplace(firstFloorDoorLoc);
  bottomFloorDoor.addComponent(
    new AudioSource(new AudioClip("sounds/GROBB.mp3"))
  );
  engine.addEntity(bottomFloorDoor);

  const secondFloorDoor = new Entity();
  secondFloorDoor.setParent(scene);
  secondFloorDoor.addComponent(woodenDoorModel);
  const secondFloorDoorLoc = new Transform({
    position: new Vector3(0.5, 2, 0),
    rotation: new Quaternion(0, 0, 0, 1)
  });
  secondFloorDoor.addComponentOrReplace(secondFloorDoorLoc);
  secondFloorDoor.addComponent(
    new AudioSource(new AudioClip("sounds/FEARPLAN.mp3"))
  );
  engine.addEntity(secondFloorDoor);

  const thirdFloorDoor = new Entity();
  thirdFloorDoor.setParent(scene);
  thirdFloorDoor.addComponentOrReplace(woodenDoorModel);
  const thirdFloorDoorLoc = new Transform({
    position: new Vector3(0.5, 4, 0),
    rotation: new Quaternion(0, 0, 0, 1)
  });
  thirdFloorDoor.addComponentOrReplace(thirdFloorDoorLoc);
  thirdFloorDoor.addComponent(
    new AudioSource(new AudioClip("sounds/LAVASTOR.mp3"))
  );
  engine.addEntity(thirdFloorDoor);

  // // Define wrapper entity to rotate door. This is the entity that actually rotates.
  const bottomDoorPivot = new Entity();
  bottomDoorPivot.addComponent(
    new Transform({
      position: new Vector3(19.7, 0, 19.42)
    })
  );
  bottomDoorPivot.addComponent(new DoorState());
  engine.addEntity(bottomDoorPivot);
  bottomFloorDoor.setParent(bottomDoorPivot);
  bottomFloorDoor.addComponent(
    new OnClick(e => {
      let state = bottomFloorDoor.getParent().getComponent(DoorState);
      state.closed = !state.closed;
      bottomFloorDoor.getComponent(AudioSource).playOnce();
    })
  );

  const secondFloorDoorPivot = new Entity();
  secondFloorDoorPivot.addComponent(
    new Transform({
      position: new Vector3(19.7, 2, 19.42)
    })
  );
  secondFloorDoorPivot.addComponent(new DoorState());
  engine.addEntity(secondFloorDoorPivot);
  secondFloorDoor.setParent(secondFloorDoorPivot);
  secondFloorDoor.addComponentOrReplace(
    new OnClick(e => {
      let state = secondFloorDoor.getParent().getComponent(DoorState);
      state.closed = !state.closed;
      secondFloorDoor.getComponent(AudioSource).playOnce();
    })
  );

  const thirdFloorDoorPivot = new Entity();
  thirdFloorDoorPivot.addComponent(
    new Transform({
      position: new Vector3(19.7, 4, 19.42)
    })
  );
  thirdFloorDoorPivot.addComponent(new DoorState());
  engine.addEntity(thirdFloorDoorPivot);
  thirdFloorDoor.setParent(thirdFloorDoorPivot);
  thirdFloorDoor.addComponentOrReplace(
    new OnClick(e => {
      let state = secondFloorDoor.getParent().getComponent(DoorState);
      state.closed = !state.closed;
    })
  );
  //CreateObjects(scene);



const hud:BuilderHUD =  new BuilderHUD();
// hud.attachToEntity(chest_Base_Gold_01);
// hud.attachToEntity(chest_Top_Gold_01);
//hud.attachToEntity(bottomFloorDoor);
//hud.attachToEntity(towerscene);
//hud.attachToEntity(blueTree);
hud.setDefaultParent(scene);