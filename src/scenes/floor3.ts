import { DoorState } from '../gameObjects/doorState';

export function CreateFloor3(scene): void {

  const woodenDoorModel = new GLTFShape("models/Door_Wood_01/Door_Wood_01.glb");
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
      let state = thirdFloorDoor.getParent().getComponent(DoorState);
      state.closed = !state.closed;
    })
  );
}
