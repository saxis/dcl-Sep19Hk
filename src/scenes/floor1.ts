import { DoorState } from "../gameObjects/doorState";
import resources from "../resources";
import { RotatableEntity } from "../gameObjects/rotatableEntity";
import utils from "../../node_modules/decentraland-ecs-utils/index";

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
    position: new Vector3(19.5, 1.7, 22),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1.25, 2.35, 1)
  });
  floor2Pillar.addComponentOrReplace(floor2PillarLoc);

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

  const button = new Entity();
  engine.addEntity(button);
  button.addComponent(new GLTFShape("models/Square_Button.glb"));
  button.addComponent(
    new Transform({
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

      engine.addEntity(stairsToFloor2);
      stairsToFloor2.getComponent(AudioSource).playOnce();
      engine.addEntity(floor2Pillar);
      engine.addEntity(Wall_Stone_Small);
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

  const lantern_lit = new RotatableEntity(
    resources.models.lanternLit,
    new Transform({
      position: new Vector3(24, 1.6, 4.3),
      rotation: new Quaternion(0, 0, 0, 1)
    }),
    resources.sounds.moveObject1,
    Quaternion.Euler(0, 45, 0)
  );
  lantern_lit.addComponent(
    new OnClick((): void => {
      lantern_lit.getComponent(utils.ToggleComponent).toggle();
    })
  );

  const lantern_lit2 = new RotatableEntity(
    resources.models.lanternLit,
    new Transform({
      position: new Vector3(20, 1.6, 4.3),
      rotation: new Quaternion(0, 0, 0, 1)
    }),
    resources.sounds.moveObject1,
    Quaternion.Euler(0, 45, 0)
  );
  lantern_lit2.addComponent(
    new OnClick((): void => {
      lantern_lit2.getComponent(utils.ToggleComponent).toggle();
    })
  );

  const lantern_lit4 = new RotatableEntity(
    resources.models.lanternLit,
    new Transform({
      position: new Vector3(12, 1.6, 4.3),
      rotation: new Quaternion(0, 0, 0, 1)
    }),
    resources.sounds.moveObject1,
    Quaternion.Euler(0, 45, 0)
  );
  lantern_lit4.addComponent(
    new OnClick((): void => {
      lantern_lit4.getComponent(utils.ToggleComponent).toggle();
    })
  );


  const table_Wood_01 = new Entity();
  //table_Wood_01.addComponent(resources.models.woodTable);
  table_Wood_01.addComponent(resources.models.tablewood);
  const transform_13 = new Transform({
    position: new Vector3(14, 1.6, 8.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  });
  table_Wood_01.addComponentOrReplace(transform_13);
  engine.addEntity(table_Wood_01);

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

  const ironChestTop = new RotatableEntity(
    resources.models.ironChestTop,
    new Transform({
      position: new Vector3(14.5, 1.6, 14),
      rotation: new Quaternion(0, 0, 0, 1)
    }),
    resources.sounds.moveObject1,
    Quaternion.Euler(-80, 127, 0)
  );
  ironChestTop.addComponent(
    new OnClick((): void => {
      ironChestTop.getComponent(utils.ToggleComponent).toggle();
    })
  );

  const module_Stone_Straight_01 = new Entity();
  const gltfShape_15 = new GLTFShape(
    "models/Module_Stone_Straight_01/Module_Stone_Straight_01.glb"
  );
  module_Stone_Straight_01.addComponentOrReplace(gltfShape_15);
  const transform_19 = new Transform({
    position: new Vector3(14.5, 1.6, 12.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 0.9, 1)
  });
  module_Stone_Straight_01.addComponentOrReplace(transform_19);
  engine.addEntity(module_Stone_Straight_01);

  const module_Stone_Straight_02 = new Entity();
  module_Stone_Straight_02.addComponentOrReplace(gltfShape_15);
  const transform_20 = new Transform({
    position: new Vector3(18.5, 1.6, 12.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 0.9, 1)
  });
  module_Stone_Straight_02.addComponentOrReplace(transform_20);
  engine.addEntity(module_Stone_Straight_02);

  const barrel_01_a = new Entity();
  barrel_01_a.addComponentOrReplace(resources.models.barrel);
  const barrel_01aLoc = new Transform({
    position: new Vector3(25, 1.6, 6),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  });
  barrel_01_a.addComponentOrReplace(barrel_01aLoc);
  engine.addEntity(barrel_01_a);

  const barrel_01_b = new Entity();
  barrel_01_b.addComponentOrReplace(resources.models.barrel);
  const barrel_01bLoc = new Transform({
    position: new Vector3(25, 2.6, 6),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  });
  barrel_01_b.addComponentOrReplace(barrel_01bLoc);
  engine.addEntity(barrel_01_b);

  const barrel_02_a = new Entity();
  barrel_02_a.addComponentOrReplace(resources.models.barrel);
  const barrel_02aLoc = new Transform({
    position: new Vector3(25, 1.6, 7),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  });
  barrel_02_a.addComponentOrReplace(barrel_02aLoc);
  engine.addEntity(barrel_02_a);

  const barrel_02_b = new Entity();
  barrel_02_b.addComponentOrReplace(resources.models.barrel);
  const barrel_02bLoc = new Transform({
    position: new Vector3(25, 2.6, 7),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  });
  barrel_02_b.addComponentOrReplace(barrel_02bLoc);
  engine.addEntity(barrel_02_b);

  const barrel_03_a = new Entity();
  barrel_03_a.addComponentOrReplace(resources.models.barrel);
  const barrel_03aLoc = new Transform({
    position: new Vector3(25, 1.6, 8),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  });
  barrel_03_a.addComponentOrReplace(barrel_03aLoc);
  engine.addEntity(barrel_03_a);

  const barrel_03_b = new Entity();
  barrel_03_b.addComponentOrReplace(resources.models.barrel);
  const barrel_03bLoc = new Transform({
    position: new Vector3(25, 2.6, 8),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  });
  barrel_03_b.addComponentOrReplace(barrel_03bLoc);
  engine.addEntity(barrel_03_b);

  const barrel_05_a = new Entity();
  barrel_05_a.addComponentOrReplace(resources.models.barrel);
  const barrel_05aLoc = new Transform({
    position: new Vector3(25, 1.6, 9),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  });
  barrel_05_a.addComponentOrReplace(barrel_05aLoc);
  engine.addEntity(barrel_05_a);

  const barrel_05_b = new Entity();
  barrel_05_b.addComponentOrReplace(resources.models.barrel);
  const barrel_05bLoc = new Transform({
    position: new Vector3(25, 2.6, 9),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  });
  barrel_05_b.addComponentOrReplace(barrel_05bLoc);
  engine.addEntity(barrel_05_b);

  const barrel_06_a = new Entity();
  barrel_06_a.addComponentOrReplace(resources.models.barrel);
  const barrel_06aLoc = new Transform({
    position: new Vector3(25, 1.6, 10),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  });
  barrel_06_a.addComponentOrReplace(barrel_06aLoc);
  engine.addEntity(barrel_06_a);

  const barrel_06_b = new Entity();
  barrel_06_b.addComponentOrReplace(resources.models.barrel);
  const barrel_06bLoc = new Transform({
    position: new Vector3(25, 2.6, 10),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  });
  barrel_06_b.addComponentOrReplace(barrel_06bLoc);
  engine.addEntity(barrel_06_b);

  const barrel_06_c = new Entity();
  barrel_06_c.addComponentOrReplace(resources.models.barrel);
  const barrel_06cLoc = new Transform({
    position: new Vector3(25, 3.6, 10),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  });
  barrel_06_c.addComponentOrReplace(barrel_06cLoc);
  engine.addEntity(barrel_06_c);

  const barrel_04_a = new Entity();
  barrel_04_a.addComponentOrReplace(resources.models.barrel2);
  const barrel_04aLoc = new Transform({
    position: new Vector3(25, 1.6, 11),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  });
  barrel_04_a.addComponentOrReplace(barrel_04aLoc);
  engine.addEntity(barrel_04_a);

  const barrel_04_b = new Entity();
  barrel_04_b.addComponent(resources.models.barrel2);
  const barrel_04bLoc = new Transform({
    position: new Vector3(25, 2.6, 11),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  });
  barrel_04_b.addComponent(barrel_04bLoc);
  engine.addEntity(barrel_04_b);

  const barrel_04_c = new Entity();
  barrel_04_c.addComponent(resources.models.barrel2);
  const barrel_04cLoc = new Transform({
    position: new Vector3(25, 3.6, 11),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  });
  barrel_04_c.addComponent(barrel_04cLoc);
  engine.addEntity(barrel_04_c);

  const spicebag1 = new Entity();
  spicebag1.addComponent(resources.models.spicebag1);
  const spicebag1Loc = new Transform({
    position: new Vector3(25, 1.6, 12),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  });
  spicebag1.addComponent(spicebag1Loc);
  engine.addEntity(spicebag1);

  const spicebag2 = new Entity();
  spicebag2.addComponent(resources.models.spicebag2);
  const spicebag2Loc = new Transform({
    position: new Vector3(25, 1.6, 13),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  });
  spicebag2.addComponent(spicebag2Loc);
  engine.addEntity(spicebag2);

  const fishie = new Entity();
  fishie.addComponent(resources.models.dagger);
  const fishieLoc = new Transform({
    position: new Vector3(11, 3.6, 14),
    rotation: Quaternion.Euler(180, 0, 180),
    scale: new Vector3(5, 1, 5)
  });
  fishie.addComponent(fishieLoc);
  engine.addEntity(fishie);

  // engine.addEntity(stairsToFloor2);
  // engine.addEntity(floor2Pillar);
  // engine.addEntity(Wall_Stone_Small);
}
