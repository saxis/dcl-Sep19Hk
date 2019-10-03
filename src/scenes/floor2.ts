//import { BuilderHUD } from "../modules/BuilderHUD";
import { DoorState } from '../gameObjects/doorState';
import resources from '../resources';

export function CreateFloor2(scene): void {


  const Wall_Stone_Small = new Entity();
  Wall_Stone_Small.addComponentOrReplace(resources.models.wallStoneSmall);
  const transform_36 = new Transform({
    position: new Vector3(21.1, 9.6, 19.6),
    rotation: Quaternion.Euler(90, 0, 0),
    scale: new Vector3(1.8, 2.1, 1)
  });
  Wall_Stone_Small.addComponentOrReplace(transform_36);
  //engine.addEntity(Wall_Stone_Small)
  

  const button = new Entity();
  engine.addEntity(button);
  button.addComponent(resources.models.squareButton);
  button.addComponent(
    new Transform({
      position: new Vector3(16, 8.18, 4.65),
      rotation: Quaternion.Euler(180, 0, 0)
    })
  );

  button.addComponent(new Animator());
  button
    .getComponent(Animator)
    .addClip(new AnimationState("Button_Action", { looping: false }));
  button.addComponent(new AudioSource(resources.sounds.button));

  const stairsToFloor3 = new Entity();
  stairsToFloor3.addComponentOrReplace(resources.models.stairs);
  const transform_25 = new Transform({
    position: new Vector3(14.5, 5.6, 19.65),
    rotation: Quaternion.Euler(0, 180, 1),
    scale: new Vector3(1, 1, 1)
  });
  stairsToFloor3.addComponentOrReplace(transform_25);
  stairsToFloor3.addComponent(new AudioSource(resources.sounds.moveObject1));
  //engine.addEntity(stairsToFloor3); 

  

  button.addComponent(
    new OnClick((): void => {
      button
        .getComponent(Animator)
        .getClip("Button_Action")
        .play();
      button.getComponent(AudioSource).playOnce();
     
      engine.addEntity(stairsToFloor3);
      engine.addEntity(Wall_Stone_Small);
    })
  );

  const secondFloorDoor = new Entity();
  secondFloorDoor.setParent(scene);
  secondFloorDoor.addComponent(resources.models.woodenDoor);
  const secondFloorDoorLoc = new Transform({
    position: new Vector3(0.5, 2, 0),
    rotation: new Quaternion(0, 0, 0, 1)
  });
  secondFloorDoor.addComponentOrReplace(secondFloorDoorLoc);
  secondFloorDoor.addComponent(
    new AudioSource(resources.sounds.fear)
  );
  engine.addEntity(secondFloorDoor);

  const secondFloorDoorPivot = new Entity();
  secondFloorDoorPivot.addComponent(
    new Transform({
      //position: new Vector3(19.7, 3.6, 19.42)
      position: new Vector3(19.7, 3.62, 19.42)
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

const tableWood_01 = new Entity()
tableWood_01.addComponentOrReplace(resources.models.tablewood)
const transform_11 = new Transform({
  position: new Vector3(15, 5.6, 9.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tableWood_01.addComponentOrReplace(transform_11)
engine.addEntity(tableWood_01)

const chairwood_02 = new Entity()
chairwood_02.addComponentOrReplace(resources.models.chairwood)
const transform_12 = new Transform({
  position: new Vector3(14.5, 5.6, 8.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
chairwood_02.addComponentOrReplace(transform_12)
engine.addEntity(chairwood_02)

const chairwood_02_2 = new Entity()
chairwood_02_2.addComponentOrReplace(resources.models.chairwood)
const transform_13 = new Transform({
  position: new Vector3(15.5, 5.6, 8.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
chairwood_02_2.addComponentOrReplace(transform_13)
engine.addEntity(chairwood_02_2)

const chairwood_02_3 = new Entity()
chairwood_02_3.addComponentOrReplace(resources.models.chairwood)
const transform_14 = new Transform({
  position: new Vector3(15.5, 5.6, 10.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
chairwood_02_3.addComponentOrReplace(transform_14)
engine.addEntity(chairwood_02_3)

const chairwood_02_4 = new Entity()
chairwood_02_4.addComponentOrReplace(resources.models.chairwood)
const transform_15 = new Transform({
  position: new Vector3(14.5, 5.6, 10.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
chairwood_02_4.addComponentOrReplace(transform_15)
engine.addEntity(chairwood_02_4)

const barrel_01_3 = new Entity()
barrel_01_3.addComponentOrReplace(resources.models.barrel)
const transform_17 = new Transform({
  position: new Vector3(25, 5.6, 6),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
barrel_01_3.addComponentOrReplace(transform_17)
engine.addEntity(barrel_01_3)

const barrel_01 = new Entity()
barrel_01.addComponentOrReplace(resources.models.barrel)
const transform_10 = new Transform({
  position: new Vector3(25, 6.6, 6),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
barrel_01.addComponentOrReplace(transform_10)
engine.addEntity(barrel_01)

const barrel_01_5 = new Entity()
barrel_01_5.addComponentOrReplace(resources.models.barrel)
const transform_19 = new Transform({
  position: new Vector3(25, 5.6, 7),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
barrel_01_5.addComponentOrReplace(transform_19)
engine.addEntity(barrel_01_5)

const barrel_01_4 = new Entity()
barrel_01_4.addComponentOrReplace(resources.models.barrel)
const transform_18 = new Transform({
  position: new Vector3(25, 6.6, 7),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
barrel_01_4.addComponentOrReplace(transform_18)
engine.addEntity(barrel_01_4)

const barrel_01_6 = new Entity()
barrel_01_6.addComponentOrReplace(resources.models.barrel)
const transform_30 = new Transform({
  position: new Vector3(25, 5.6, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
barrel_01_6.addComponentOrReplace(transform_30)
engine.addEntity(barrel_01_6)

const barrel_01_2 = new Entity()
barrel_01_2.addComponentOrReplace(resources.models.barrel)
const transform_16 = new Transform({
  position: new Vector3(25, 6.6, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
barrel_01_2.addComponentOrReplace(transform_16)
engine.addEntity(barrel_01_2)

const barrel_02 = new Entity()
barrel_02.addComponentOrReplace(resources.models.barrel2)
const transform_25 = new Transform({
  position: new Vector3(24, 5.6, 6),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
barrel_02.addComponentOrReplace(transform_25)
engine.addEntity(barrel_02)



const tableWood_01_2 = new Entity()
tableWood_01_2.addComponentOrReplace(resources.models.tablewood)
const transform_20 = new Transform({
  position: new Vector3(15, 5.6, 6.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tableWood_01_2.addComponentOrReplace(transform_20)
engine.addEntity(tableWood_01_2)

const chairwood_02_5 = new Entity()
chairwood_02_5.addComponentOrReplace(resources.models.chairwood)
const transform_21 = new Transform({
  position: new Vector3(14.5, 5.6, 5.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
chairwood_02_5.addComponentOrReplace(transform_21)
engine.addEntity(chairwood_02_5)

const chairwood_02_6 = new Entity()
chairwood_02_6.addComponentOrReplace(resources.models.chairwood)
const transform_22 = new Transform({
  position: new Vector3(15.5, 5.6, 5.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
chairwood_02_6.addComponentOrReplace(transform_22)
engine.addEntity(chairwood_02_6)

const chairwood_02_7 = new Entity()
chairwood_02_7.addComponentOrReplace(resources.models.chairwood)
const transform_23 = new Transform({
  position: new Vector3(14.5, 5.6, 7.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
chairwood_02_7.addComponentOrReplace(transform_23)
engine.addEntity(chairwood_02_7)

const chairwood_02_8 = new Entity()
chairwood_02_8.addComponentOrReplace(resources.models.chairwood)
const transform_24 = new Transform({
  position: new Vector3(15.5, 5.6, 7.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
chairwood_02_8.addComponentOrReplace(transform_24)
engine.addEntity(chairwood_02_8)

const plate_01 = new Entity()
plate_01.addComponentOrReplace(resources.models.plate)
const transform_26 = new Transform({
  position: new Vector3(15.5, 6.6, 9.8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
plate_01.addComponentOrReplace(transform_26)
engine.addEntity(plate_01)

const fishie = new Entity()
fishie.addComponent(resources.models.fishskeleton)
const fishieLoc = new Transform({
  position: new Vector3(11, 7.6, 14),
  rotation: Quaternion.Euler(90, 0, 90),
  scale: new Vector3(10, 1, 10)
})
fishie.addComponent(fishieLoc)
engine.addEntity(fishie)

const bluebanner1 = new Entity()
bluebanner1.addComponent(resources.models.bannerblue)
const bluebannerLoc = new Transform({
  position: new Vector3(22, 6.6, 4.9),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bluebanner1.addComponent(bluebannerLoc)
engine.addEntity(bluebanner1)

const bluebanner2 = new Entity()
bluebanner2.addComponent(resources.models.bannerblue)
const bluebanner2Loc = new Transform({
  position: new Vector3(18, 6.6, 4.9),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bluebanner2.addComponent(bluebanner2Loc)
engine.addEntity(bluebanner2)

const bluebanner3 = new Entity()
bluebanner3.addComponent(resources.models.bannerblue)
const bluebanner3Loc = new Transform({
  position: new Vector3(14, 6.6, 4.9),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bluebanner3.addComponent(bluebanner3Loc)
engine.addEntity(bluebanner3)

const tableWood_01_21 = new Entity()
tableWood_01_21.addComponentOrReplace(resources.models.tablewood)
const transform_201 = new Transform({
  position: new Vector3(20, 5.6, 6.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tableWood_01_21.addComponentOrReplace(transform_201)
engine.addEntity(tableWood_01_21)

const chairwood_02_51 = new Entity()
chairwood_02_51.addComponentOrReplace(resources.models.chairwood)
const transform_211 = new Transform({
  position: new Vector3(19.5, 5.6, 5.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
chairwood_02_51.addComponentOrReplace(transform_211)
engine.addEntity(chairwood_02_51)

const chairwood_02_61 = new Entity()
chairwood_02_61.addComponentOrReplace(resources.models.chairwood)
const transform_221 = new Transform({
  position: new Vector3(20.5, 5.6, 5.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
chairwood_02_61.addComponentOrReplace(transform_221)
engine.addEntity(chairwood_02_61)

const chairwood_02_71 = new Entity()
chairwood_02_71.addComponentOrReplace(resources.models.chairwood)
const transform_231 = new Transform({
  position: new Vector3(19.5, 5.6, 7.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
chairwood_02_71.addComponentOrReplace(transform_231)
engine.addEntity(chairwood_02_71)

const chairwood_02_81 = new Entity()
chairwood_02_81.addComponentOrReplace(resources.models.chairwood)
const transform_241 = new Transform({
  position: new Vector3(20.5, 5.6, 7.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
chairwood_02_81.addComponentOrReplace(transform_241)
engine.addEntity(chairwood_02_81)


//const hud: BuilderHUD = new BuilderHUD();
//hud.attachToEntity(fishie);
//hud.attachToEntity(bluebanner1)
//hud.attachToEntity(barrel_01_3)
//hud.attachToEntity(barrel_01_5)
//hud.attachToEntity(plate_01)
//hud.attachToEntity(tableWood_01_2)
