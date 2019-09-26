import { DoorState } from "../gameObjects/doorState";
//import { BuilderHUD } from "../modules/BuilderHUD";
import resources from "../resources";

export function CreateFloor1(scene): void {
  const stairsToFloor2 = new Entity();
  const gltfShape_21 = new GLTFShape("models/Stairs_L_01/Stairs_L_01.glb");
  stairsToFloor2.addComponentOrReplace(gltfShape_21);
  const transform_25 = new Transform({
    position: new Vector3(26, 1.6, 21.65),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  });
  stairsToFloor2.addComponentOrReplace(transform_25);
  stairsToFloor2.addComponent(new AudioSource(resources.sounds.moveObject1));

  const floor2Pillar = new Entity();
  const floor2PillarShape = new GLTFShape(
    "models/Pillar_Top_Stones_Big_01/Pillar_Top_Stones_Big_01.glb"
  );
  floor2Pillar.addComponentOrReplace(floor2PillarShape);
  const floor2PillarLoc = new Transform({
    position: new Vector3(19.4, 1.6, 21),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 2.5, 1)
  });
  floor2Pillar.addComponentOrReplace(floor2PillarLoc);

  const button = new Entity();
  engine.addEntity(button);
  button.addComponent(new GLTFShape("models/Square_Button.glb"));
  button.addComponent(
    new Transform({
      //position: new Vector3(12, 0, 5.5)
      position: new Vector3(16, 4.18, 4.65),
      rotation: Quaternion.Euler(90, 0, 0)
    })
  );

  button.addComponent(new Animator());
  button
    .getComponent(Animator)
    .addClip(new AnimationState("Button_Action", { looping: false }));
  button.addComponent(new AudioSource(new AudioClip("sounds/button.mp3")));

  button.addComponent(
    new OnClick((): void => {
      button
        .getComponent(Animator)
        .getClip("Button_Action")
        .play();
      button.getComponent(AudioSource).playOnce();

      bottomFloorDoor.getComponent(AudioSource).playing = false;
      let state = bottomFloorDoor.getParent().getComponent(DoorState);
      state.closed = !state.closed;
      log("engine.entities ", engine.entities);
      engine.addEntity(stairsToFloor2);
      stairsToFloor2.getComponent(AudioSource).playOnce();
      engine.addEntity(floor2Pillar);
      engine.addEntity(Wall_Stone_Small);
    })
  );

  const bottomFloorDoor = new Entity();
  bottomFloorDoor.setParent(scene);
  //const woodenDoorModel = new GLTFShape("models/Door_Wood_01/Door_Wood_01.glb");
  bottomFloorDoor.addComponentOrReplace(resources.models.woodenDoor);
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
      position: new Vector3(19.7, 1.6, 19.42)
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

  const bagofpotatoes = new Entity();
  const sackofpotatoesLoc = new Transform({
    position: new Vector3(12, 1.6, 14),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  });
  bagofpotatoes.addComponent(resources.models.sackOfPotatoes);
  bagofpotatoes.addComponent(sackofpotatoesLoc);
  engine.addEntity(bagofpotatoes);

  const lantern_lit = new Entity();
  const loc_lantern_lit = new Transform({
    position: new Vector3(24, 1.6, 4.3),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  });
  lantern_lit.addComponent(resources.models.lanternLit);
  lantern_lit.addComponent(loc_lantern_lit);
  engine.addEntity(lantern_lit);

  const lantern_lit2 = new Entity();
  const loc_lantern_lit2 = new Transform({
    position: new Vector3(20, 1.6, 4.3),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  });
  lantern_lit2.addComponent(resources.models.lanternLit);
  lantern_lit2.addComponent(loc_lantern_lit2);
  engine.addEntity(lantern_lit2);

  const lantern_lit4 = new Entity();
  const loc_lantern_lit4 = new Transform({
    position: new Vector3(12, 1.6, 4.3),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  });
  lantern_lit4.addComponent(resources.models.lanternLit);
  lantern_lit4.addComponent(loc_lantern_lit4);
  engine.addEntity(lantern_lit4);

  const table_Wood_01 = new Entity();
  table_Wood_01.addComponent(resources.models.woodTable);
  const transform_13 = new Transform({
    position: new Vector3(14, 1.6, 8.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  });
  table_Wood_01.addComponentOrReplace(transform_13);
  engine.addEntity(table_Wood_01);

  // const bench_Circular_01 = new Entity();
  // const gltfShape_8 = new GLTFShape("models/orc_chair.glb");
  // bench_Circular_01.addComponentOrReplace(gltfShape_8);
  // const transform_12 = new Transform({
  //   position: new Vector3(15.5, 0, 7.5),
  //   rotation: Quaternion.Euler(0, -90, 0),
  //   scale: new Vector3(1, 1, 1)
  // });
  // bench_Circular_01.addComponentOrReplace(transform_12);
  // engine.addEntity(bench_Circular_01);

  const chest_Top_Iron_01 = new Entity();
  const gltfShape_12 = new GLTFShape(
    "models/Chest_Top_Iron_01/Chest_Top_Iron_01.glb"
  );
  chest_Top_Iron_01.addComponentOrReplace(gltfShape_12);
  const transform_16 = new Transform({
    position: new Vector3(14.5, 1.6, 14),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  });
  chest_Top_Iron_01.addComponentOrReplace(transform_16);
  engine.addEntity(chest_Top_Iron_01);

  const module_Stone_Straight_01 = new Entity();
  const gltfShape_15 = new GLTFShape(
    "models/Module_Stone_Straight_01/Module_Stone_Straight_01.glb"
  );
  module_Stone_Straight_01.addComponentOrReplace(gltfShape_15);
  const transform_19 = new Transform({
    position: new Vector3(14.5, 1.6, 12.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  });
  module_Stone_Straight_01.addComponentOrReplace(transform_19);
  engine.addEntity(module_Stone_Straight_01);

  const module_Stone_Straight_02 = new Entity();
  module_Stone_Straight_02.addComponentOrReplace(gltfShape_15);
  const transform_20 = new Transform({
    position: new Vector3(18.5, 1.6, 12.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  });
  module_Stone_Straight_02.addComponentOrReplace(transform_20);
  engine.addEntity(module_Stone_Straight_02);

  const chest_Base_Iron_01 = new Entity();
  const gltfShape_11 = new GLTFShape(
    "models/Chest_Base_Iron_01/Chest_Base_Iron_01.glb"
  );
  chest_Base_Iron_01.addComponentOrReplace(gltfShape_11);
  const transform_15 = new Transform({
    position: new Vector3(14.5, 1.6, 14),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  });
  chest_Base_Iron_01.addComponentOrReplace(transform_15);
  engine.addEntity(chest_Base_Iron_01);

  const orc_chandellier = new Entity();
  const chandellier_model = new GLTFShape("models/candelabra1.glb");
  const orc_chandellierLoc = new Transform({
    position: new Vector3(24, 1.6, 5.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  });
  orc_chandellier.addComponent(chandellier_model);
  orc_chandellier.addComponent(orc_chandellierLoc);
  engine.addEntity(orc_chandellier);

  const Wall_Stone_Small = new Entity();
  const gltfShape_32 = new GLTFShape(
    "models/Wall_Stone_Small/Wall_Stone_Small.glb"
  );
  Wall_Stone_Small.addComponentOrReplace(gltfShape_32);
  const transform_36 = new Transform({
    position: new Vector3(21.1, 5.6, 19.6),
    rotation: Quaternion.Euler(90, 0, 0),
    scale: new Vector3(1.8, 1, 1)
  });
  Wall_Stone_Small.addComponentOrReplace(transform_36);

  // const hud: BuilderHUD = new BuilderHUD();
  // hud.attachToEntity(button);
}
