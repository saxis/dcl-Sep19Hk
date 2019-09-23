import { DoorState } from '../game'

export class Door extends Entity {
    constructor(
        model: GLTFShape,
        transform: TranformConstructorArgs,
        sound: AudioClip
    ) {
        super();
        
        //const secondFloorDoor = new Entity();
        const secondFloorDoor = this;
        secondFloorDoor.addComponent(model);
        const secondFloorDoorLoc = new Transform({
          position: new Vector3(0.5, 2, 0),
          rotation: new Quaternion(0, 0, 0, 1)
        });
        secondFloorDoor.addComponentOrReplace(secondFloorDoorLoc);
        secondFloorDoor.addComponent(
          sound
        );
        engine.addEntity(secondFloorDoor);
      
        const secondFloorDoorPivot = new Entity();
        secondFloorDoorPivot.addComponent(
         transform 
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
    
}
