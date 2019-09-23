import { Door } from "../gameObjects/door";
import { DoorState } from '../game';

export function CreateFloor2(scene): void {
//   const door = new Door(
//     new GLTFShape("models/Door_Wood_01/Door_Wood_01.glb"),
//     new Transform({
//         position: new Vector3(19.7, 2, 19.42)
//     }),
//     new AudioClip("sounds/FEARPLAN.mp3")
//   )
  const woodenDoorModel = new GLTFShape("models/Door_Wood_01/Door_Wood_01.glb");
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
}
