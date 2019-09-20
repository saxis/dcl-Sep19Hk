export function CreateFloor1(scene, DoorState): void {
    
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

  const button = new Entity();
  engine.addEntity(button)
  button.addComponent(new GLTFShape("models/Square_Button.glb"));
  button.addComponent(new Transform({
      position: new Vector3(12, 0, 5.5)
  }))

  button.addComponent(new Animator());
  button.getComponent(Animator).addClip(new AnimationState("Button_Action", {looping: false}))
  button.addComponent(new AudioSource(new AudioClip("sounds/button.mp3")));

  button.addComponent(

    new OnClick(():void => {
        button.getComponent(Animator).getClip("Button_Action").play()
        button.getComponent(AudioSource).playOnce()

        bottomFloorDoor.getComponent(AudioSource).playing = false;
        let state = bottomFloorDoor.getParent().getComponent(DoorState);
        state.closed = !state.closed
    } )
  )

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
}
