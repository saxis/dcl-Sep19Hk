import { DoorState } from "../gameObjects/doorState";
import resources from "../resources";
import { spawnEntity } from "../modules/SpawnerFunctions";

export function CreateFloor3(scene): void {

  

  const thirdFloorDoor = new Entity();
  thirdFloorDoor.setParent(scene);
  thirdFloorDoor.addComponentOrReplace(resources.models.woodenDoor);
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

  const thirdFloorDoorPivot = new Entity();
  thirdFloorDoorPivot.addComponent(
    new Transform({
      position: new Vector3(19.7, 5.6, 19.42)
    })
  );
  thirdFloorDoorPivot.addComponent(new DoorState());
  engine.addEntity(thirdFloorDoorPivot);
  thirdFloorDoor.setParent(thirdFloorDoorPivot);
  thirdFloorDoor.addComponentOrReplace(
    new OnClick(e => {
      let state = thirdFloorDoor.getParent().getComponent(DoorState);
      state.closed = !state.closed;
      thirdFloorDoor.getComponent(AudioSource).playOnce()
    })
  );

  const row9col12 = spawnEntity(14, 9.7, 8, 0, 0, 0, 1, 1, 1)
  row9col12.addComponentOrReplace(resources.models.blackStone) 

  const row9col11 = spawnEntity(14, 9.7, 12, 0, 0, 0, 1, 1, 1)
  row9col11.addComponentOrReplace(resources.models.blackStone)

  const row9col10 = spawnEntity(14, 9.7, 16, 0, 0, 0, 1, 1, 1)
  row9col10.addComponentOrReplace(resources.models.blackStone)
  

  const row10col12 = spawnEntity(18, 9.7, 8, 0, 0, 0, 1, 1, 1)
  row10col12.addComponentOrReplace(resources.models.blackStone) 

  const row10col11 = spawnEntity(18, 9.7, 12, 0, 0, 0, 1, 1, 1)
  row10col11.addComponentOrReplace(resources.models.blackStone)

  const row10col10 = spawnEntity(18, 9.7, 16, 0, 0, 0, 1, 1, 1)
  row10col10.addComponentOrReplace(resources.models.blackStone)

  const row10col9 = spawnEntity(18, 9.7, 19, 0, 0, 0, 1, 1, 1)
  row10col9.addComponentOrReplace(resources.models.blackStone)


  const row11col12 = spawnEntity(22, 9.7, 8, 0, 0, 0, 1, 1, 1)
  row11col12.addComponentOrReplace(resources.models.blackStone) 

  const row11col11 = spawnEntity(22, 9.7, 12, 0, 0, 0, 1, 1, 1)
  row11col11.addComponentOrReplace(resources.models.blackStone) 

  const row11col10 = spawnEntity(22, 9.7, 16, 0, 0, 0, 1, 1, 1)
  row11col10.addComponentOrReplace(resources.models.blackStone)

  const row11col9 = spawnEntity(22, 9.7, 19, 0, 0, 0, 1, 1, 1)
  row11col9.addComponentOrReplace(resources.models.blackStone)


  const row12col12 = spawnEntity(26, 9.7, 8, 0, 0, 0, 1, 1, 1)
  row12col12.addComponentOrReplace(resources.models.blackStone) 

  const row12col11 = spawnEntity(26, 9.7, 12, 0, 0, 0, 1, 1, 1)
  row12col11.addComponentOrReplace(resources.models.blackStone) 

  const row12col10 = spawnEntity(26, 9.7, 16, 0, 0, 0, 1, 1, 1)
  row12col10.addComponentOrReplace(resources.models.blackStone) 

  const row12col9 = spawnEntity(26, 9.7, 19, 0, 0, 0, 1, 1, 1)
  row12col9.addComponentOrReplace(resources.models.blackStone) 

  const circleBase_01 = new Entity();
  const gltfShape_2 = new GLTFShape("models/floor3/CircleBase_01/CircleBase_01.glb");
  circleBase_01.addComponentOrReplace(gltfShape_2);
  const transform_3 = new Transform({
    position: new Vector3(23.5, 9.6, 7),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  });
  circleBase_01.addComponentOrReplace(transform_3);
  engine.addEntity(circleBase_01);

  

  const circleBase_01_2 = new Entity();
  circleBase_01_2.addComponentOrReplace(gltfShape_2);
  const transform_5 = new Transform({
    position: new Vector3(23.5, 9.6, 17),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  });
  circleBase_01_2.addComponentOrReplace(transform_5);
  engine.addEntity(circleBase_01_2);

  const circleBase_01_3 = new Entity();
  circleBase_01_3.addComponentOrReplace(gltfShape_2);
  const transform_6 = new Transform({
    position: new Vector3(13, 9.6, 7),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  });
  circleBase_01_3.addComponentOrReplace(transform_6);
  engine.addEntity(circleBase_01_3);

  const circleBase_01_4 = new Entity();
  circleBase_01_4.addComponentOrReplace(gltfShape_2);
  const transform_7 = new Transform({
    position: new Vector3(13, 9.6, 17),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  });
  circleBase_01_4.addComponentOrReplace(transform_7);
  engine.addEntity(circleBase_01_4);

  
}





