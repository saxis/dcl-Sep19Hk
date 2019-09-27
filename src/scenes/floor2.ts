//import { Door } from "../gameObjects/door";
import { BuilderHUD } from "../modules/BuilderHUD";

import { DoorState } from '../gameObjects/doorState';
import resources from '../resources';

export function CreateFloor2(scene): void {


  const Wall_Stone_Small = new Entity();
  const gltfShape_32 = new GLTFShape(
    "models/Wall_Stone_Small/Wall_Stone_Small.glb"
  );
  Wall_Stone_Small.addComponentOrReplace(gltfShape_32);
  const transform_36 = new Transform({
    position: new Vector3(21.1, 9.6, 19.6),
    rotation: Quaternion.Euler(90, 0, 0),
    scale: new Vector3(1.8, 2.1, 1)
  });
  Wall_Stone_Small.addComponentOrReplace(transform_36);
  //engine.addEntity(Wall_Stone_Small)
  

  const button = new Entity();
  engine.addEntity(button);
  button.addComponent(new GLTFShape("models/Square_Button.glb"));
  button.addComponent(
    new Transform({
      //position: new Vector3(12, 0, 5.5)
      position: new Vector3(16, 8.18, 4.65),
      rotation: Quaternion.Euler(180, 0, 0)
    })
  );

  button.addComponent(new Animator());
  button
    .getComponent(Animator)
    .addClip(new AnimationState("Button_Action", { looping: false }));
  button.addComponent(new AudioSource(new AudioClip("sounds/button.mp3")));

  const stairsToFloor3 = new Entity();
  const gltfShape_21 = new GLTFShape("models/Stairs_L_01/Stairs_L_01.glb");
  stairsToFloor3.addComponentOrReplace(gltfShape_21);
  const transform_25 = new Transform({
    position: new Vector3(14.5, 5.6, 19.65),
    rotation: Quaternion.Euler(0, 180, 1),
    scale: new Vector3(1, 1, 1)
  });
  stairsToFloor3.addComponentOrReplace(transform_25);
  stairsToFloor3.addComponent(new AudioSource(resources.sounds.moveObject1));
  

  

  button.addComponent(
    new OnClick((): void => {
      button
        .getComponent(Animator)
        .getClip("Button_Action")
        .play();
      button.getComponent(AudioSource).playOnce();

      // bottomFloorDoor.getComponent(AudioSource).playing = false;
      // let state = bottomFloorDoor.getParent().getComponent(DoorState);
      // state.closed = !state.closed;
      // log("engine.entities ", engine.entities);
      
      engine.addEntity(stairsToFloor3);
      engine.addEntity(Wall_Stone_Small);
    })
  );
//   const door = new Door(
//     new GLTFShape("models/Door_Wood_01/Door_Wood_01.glb"),
//     new Transform({
//         position: new Vector3(19.7, 2, 19.42)
//     }),
//     new AudioClip("sounds/FEARPLAN.mp3")
//   )
  //const woodenDoorModel = new GLTFShape("models/Door_Wood_01/Door_Wood_01.glb");
  const secondFloorDoor = new Entity();
  secondFloorDoor.setParent(scene);
  secondFloorDoor.addComponent(resources.models.woodenDoor);
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
      position: new Vector3(19.7, 3.6, 19.42)
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

const hud: BuilderHUD = new BuilderHUD();
