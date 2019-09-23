//import { BuilderHUD } from "../modules/BuilderHUD";
import { spawnEntity } from '../modules/SpawnerFunctions'

export function CreateOutside(): void {
  const dead_grass = new GLTFShape('models/dead_grass_floor.small.glb')
  const dirt_floor1 = new GLTFShape('models/dirt_floor1.small.glb')
  const dirt_floor2 = new GLTFShape('models/dirt_floor2.small.glb')
  const dirt_grass_floor = new GLTFShape('models/dirt_grass_floor.small.glb')
  const grass_dirt_floor = new GLTFShape('models/grass_dirt_floor.glb')
  const grass_floor = new GLTFShape('models/grass_floor.small.glb')

  // COL 1

  // const dead_grass_small1 = new Entity()
  // dead_grass_small1.addComponentOrReplace(dead_grass)
  // const dead_grass_loc1 = new Transform({
  //   position: new Vector3(1, 0, 1),
  //   rotation: new Quaternion(0, 0, 0, 1),
  //   scale: new Vector3(1, 1, 1)
  // })
  // dead_grass_small1.addComponentOrReplace(dead_grass_loc1)
  // engine.addEntity(dead_grass_small1)

  // const dead_grass_small2 = new Entity()
  // dead_grass_small2.addComponentOrReplace(dirt_floor1)
  // const dead_grass_loc2 = new Transform({
  //   position: new Vector3(1, 0, 3),
  //   rotation: new Quaternion(0, 0, 0, 1),
  //   scale: new Vector3(1, 1, 1)
  // })
  // dead_grass_small2.addComponentOrReplace(dead_grass_loc2)
  // engine.addEntity(dead_grass_small2)

  // const dead_grass_small3 = new Entity()
  // dead_grass_small3.addComponentOrReplace(dirt_floor2)
  // const dead_grass_loc3 = new Transform({
  //   position: new Vector3(1, 0, 5),
  //   rotation: new Quaternion(0, 0, 0, 1),
  //   scale: new Vector3(1, 1, 1)
  // })
  // dead_grass_small3.addComponentOrReplace(dead_grass_loc3)
  // engine.addEntity(dead_grass_small3)

  // const dead_grass_small4 = new Entity()
  // dead_grass_small4.addComponentOrReplace(dirt_grass_floor)
  // const dead_grass_loc4 = new Transform({
  //   position: new Vector3(1, 0, 7),
  //   rotation: new Quaternion(0, 0, 0, 1),
  //   scale: new Vector3(1, 1, 1)
  // })
  // dead_grass_small4.addComponentOrReplace(dead_grass_loc4)
  // engine.addEntity(dead_grass_small4)

  // // COL 2 //

  // const dead_grass_smallcol2row1 = new Entity()
  // dead_grass_smallcol2row1.addComponentOrReplace(grass_dirt_floor)
  // const dead_grass_loccol2row1 = new Transform({
  //   position: new Vector3(3, 0, 1),
  //   rotation: new Quaternion(0, 0, 0, 1),
  //   scale: new Vector3(1, 1, 1)
  // })
  // dead_grass_smallcol2row1.addComponentOrReplace(dead_grass_loccol2row1)
  // engine.addEntity(dead_grass_smallcol2row1)

  // const dead_grass_smallcol2row2 = new Entity()
  // dead_grass_smallcol2row2.addComponentOrReplace(grass_floor)
  // const dead_grass_loccol2row2 = new Transform({
  //   position: new Vector3(3, 0, 3),
  //   rotation: new Quaternion(0, 0, 0, 1),
  //   scale: new Vector3(1, 1, 1)
  // })
  // dead_grass_smallcol2row2.addComponentOrReplace(dead_grass_loccol2row2)
  // engine.addEntity(dead_grass_smallcol2row2)

  // const dead_grass_smallcol2row3 = new Entity()
  // dead_grass_smallcol2row3.addComponentOrReplace(dead_grass)
  // const dead_grass_loccol2row3 = new Transform({
  //   position: new Vector3(3, 0, 5),
  //   rotation: new Quaternion(0, 0, 0, 1),
  //   scale: new Vector3(1, 1, 1)
  // })
  // dead_grass_smallcol2row3.addComponentOrReplace(dead_grass_loccol2row3)
  // engine.addEntity(dead_grass_smallcol2row3)

  // const dead_grass_smallcol2row4 = new Entity()
  // dead_grass_smallcol2row4.addComponentOrReplace(dead_grass)
  // const dead_grass_loccol2row4 = new Transform({
  //   position: new Vector3(3, 0, 7),
  //   rotation: new Quaternion(0, 0, 0, 1),
  //   scale: new Vector3(1, 1, 1)
  // })
  // dead_grass_smallcol2row4.addComponentOrReplace(dead_grass_loccol2row4)
  // engine.addEntity(dead_grass_smallcol2row4)

  // const dead_grass_smallcol2row5 = new Entity()
  // dead_grass_smallcol2row5.addComponentOrReplace(dead_grass)
  // const dead_grass_loccol2row5 = new Transform({
  //   position: new Vector3(3, 0, 9),
  //   rotation: new Quaternion(0, 0, 0, 1),
  //   scale: new Vector3(1, 1, 1)
  // })
  // dead_grass_smallcol2row5.addComponentOrReplace(dead_grass_loccol2row5)
  // engine.addEntity(dead_grass_smallcol2row5)

  // const dead_grass_smallcol2row6 = new Entity()
  // dead_grass_smallcol2row6.addComponentOrReplace(dead_grass)
  // const dead_grass_loccol2row6 = new Transform({
  //   position: new Vector3(3, 0, 11),
  //   rotation: new Quaternion(0, 0, 0, 1),
  //   scale: new Vector3(1, 1, 1)
  // })
  // dead_grass_smallcol2row6.addComponentOrReplace(dead_grass_loccol2row6)
  // engine.addEntity(dead_grass_smallcol2row6)

  // const dead_grass_smallcol2row7 = new Entity()
  // dead_grass_smallcol2row7.addComponentOrReplace(dead_grass)
  // const dead_grass_loccol2row7 = new Transform({
  //   position: new Vector3(3, 0, 13),
  //   rotation: new Quaternion(0, 0, 0, 1),
  //   scale: new Vector3(1, 1, 1)
  // })
  // dead_grass_smallcol2row7.addComponentOrReplace(dead_grass_loccol2row7)
  // engine.addEntity(dead_grass_smallcol2row7)

  // const dead_grass_smallcol2row8 = new Entity()
  // dead_grass_smallcol2row8.addComponentOrReplace(dead_grass)
  // const dead_grass_loccol2row8 = new Transform({
  //   position: new Vector3(3, 0, 15),
  //   rotation: new Quaternion(0, 0, 0, 1),
  //   scale: new Vector3(1, 1, 1)
  // })
  // dead_grass_smallcol2row8.addComponentOrReplace(dead_grass_loccol2row8)
  // engine.addEntity(dead_grass_smallcol2row8)

  // const dead_grass_smallcol2row9 = new Entity()
  // dead_grass_smallcol2row9.addComponentOrReplace(dead_grass)
  // const dead_grass_loccol2row9 = new Transform({
  //   position: new Vector3(3, 0, 17),
  //   rotation: new Quaternion(0, 0, 0, 1),
  //   scale: new Vector3(1, 1, 1)
  // })
  // dead_grass_smallcol2row9.addComponentOrReplace(dead_grass_loccol2row9)
  // engine.addEntity(dead_grass_smallcol2row9)

  // const dead_grass_smallcol2row10 = new Entity()
  // dead_grass_smallcol2row10.addComponentOrReplace(dead_grass)
  // const dead_grass_loccol2row10 = new Transform({
  //   position: new Vector3(3, 0, 19),
  //   rotation: new Quaternion(0, 0, 0, 1),
  //   scale: new Vector3(1, 1, 1)
  // })
  // dead_grass_smallcol2row10.addComponentOrReplace(dead_grass_loccol2row10)
  // engine.addEntity(dead_grass_smallcol2row10)

  // COL 3 //
  
  const tree_Dead_01 = new Entity();
  const gltfShape_2 = new GLTFShape("models/Tree_Dead_01.glb");
  tree_Dead_01.addComponentOrReplace(gltfShape_2);
  const transform_3 = new Transform({
    position: new Vector3(8.5, 0, 11.51),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  });
  tree_Dead_01.addComponentOrReplace(transform_3);
  engine.addEntity(tree_Dead_01);

  const tree_Dead_02 = new Entity();
  const gltfShape_3 = new GLTFShape("models/Tree_Dead_02.glb");
  tree_Dead_02.addComponentOrReplace(gltfShape_3);
  const transform_4 = new Transform({
    position: new Vector3(35, 0, 21),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  });
  tree_Dead_02.addComponentOrReplace(transform_4);
  engine.addEntity(tree_Dead_02);

  const tree_Dead_04 = new Entity();
  const gltfShape_4 = new GLTFShape("models/Tree_Dead_04.glb");
  tree_Dead_04.addComponentOrReplace(gltfShape_4);
  const transform_5 = new Transform({
    position: new Vector3(37, 0, 12.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  });
  tree_Dead_04.addComponentOrReplace(transform_5);
  engine.addEntity(tree_Dead_04);

  const tree_Dead_03 = new Entity();
  const gltfShape_5 = new GLTFShape("models/Tree_Dead_03.glb");
  tree_Dead_03.addComponentOrReplace(gltfShape_5);
  const transform_6 = new Transform({
    position: new Vector3(37, 0, 5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  });
  tree_Dead_03.addComponentOrReplace(transform_6);
  engine.addEntity(tree_Dead_03);

  const grass03 = new Entity();
  const gltfShape_6 = new GLTFShape("models/Grass03.glb");
  grass03.addComponentOrReplace(gltfShape_6);
  const transform_9 = new Transform({
    position: new Vector3(10, 0, 2),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  });
  grass03.addComponentOrReplace(transform_9);
  engine.addEntity(grass03);

  const grass_01 = new Entity();
  const gltfShape_7 = new GLTFShape("models/Grass_01.glb");
  grass_01.addComponentOrReplace(gltfShape_7);
  const transform_10 = new Transform({
    position: new Vector3(8.5, 0, 2.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  });
  grass_01.addComponentOrReplace(transform_10);
  engine.addEntity(grass_01);

  const grass_02 = new Entity();
  const gltfShape_8 = new GLTFShape("models/Grass_02.glb");
  grass_02.addComponentOrReplace(gltfShape_8);
  const transform_11 = new Transform({
    position: new Vector3(10, 0, 3.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  });
  grass_02.addComponentOrReplace(transform_11);
  engine.addEntity(grass_02);

  // const plant_03 = new Entity();
  // const gltfShape_9 = new GLTFShape("models/Plant_03.glb");
  // plant_03.addComponentOrReplace(gltfShape_9);
  // const transform_12 = new Transform({
  //   position: new Vector3(7.5, 0, 1.5),
  //   rotation: new Quaternion(0, 0, 0, 1),
  //   scale: new Vector3(1, 1, 1)
  // });
  // plant_03.addComponentOrReplace(transform_12);
  // engine.addEntity(plant_03);

  // const plant_04 = new Entity();
  // const gltfShape_10 = new GLTFShape("models/Plant_04.glb");
  // plant_04.addComponentOrReplace(gltfShape_10);
  // const transform_13 = new Transform({
  //   position: new Vector3(11.5, 0, 1),
  //   rotation: new Quaternion(0, 0, 0, 1),
  //   scale: new Vector3(1, 1, 1)
  // });
  // plant_04.addComponentOrReplace(transform_13);
  // engine.addEntity(plant_04);

  const grass05 = new Entity();
  const gltfShape_11 = new GLTFShape("models/Grass05.glb");
  grass05.addComponentOrReplace(gltfShape_11);
  const transform_14 = new Transform({
    position: new Vector3(2, 0, 2),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  });
  grass05.addComponentOrReplace(transform_14);
  engine.addEntity(grass05);

  // const bush_Fantasy_02 = new Entity();
  // const gltfShape_12 = new GLTFShape(
  //   "models/Bush_Fantasy_02.glb"
  // );
  // bush_Fantasy_02.addComponentOrReplace(gltfShape_12);
  // const transform_15 = new Transform({
  //   position: new Vector3(2, 0, 4.5),
  //   rotation: new Quaternion(0, 0, 0, 1),
  //   scale: new Vector3(1, 1, 1)
  // });
  // bush_Fantasy_02.addComponentOrReplace(transform_15);
  // engine.addEntity(bush_Fantasy_02);

  // const bush_Fantasy_01 = new Entity();
  // const gltfShape_13 = new GLTFShape(
  //   "models/Bush_Fantasy_01.glb"
  // );
  // bush_Fantasy_01.addComponentOrReplace(gltfShape_13);
  // const transform_16 = new Transform({
  //   position: new Vector3(14.5, 0, 10),
  //   rotation: new Quaternion(0, 0, 0, 1),
  //   scale: new Vector3(1, 1, 1)
  // });
  // bush_Fantasy_01.addComponentOrReplace(transform_16);
  // engine.addEntity(bush_Fantasy_01);

  // const bush_Fantasy_03 = new Entity();
  // const gltfShape_14 = new GLTFShape(
  //   "models/Bush_Fantasy_03.glb"
  // );
  // bush_Fantasy_03.addComponentOrReplace(gltfShape_14);
  // const transform_17 = new Transform({
  //   position: new Vector3(7, 0, 14.5),
  //   rotation: new Quaternion(0, 0, 0, 1),
  //   scale: new Vector3(1, 1, 1)
  // });
  // bush_Fantasy_03.addComponentOrReplace(transform_17);
  // engine.addEntity(bush_Fantasy_03);

  // const bush_Fantasy_04 = new Entity();
  // const gltfShape_15 = new GLTFShape(
  //   "models/Bush_Fantasy_04.glb"
  // );
  // bush_Fantasy_04.addComponentOrReplace(gltfShape_15);
  // const transform_18 = new Transform({
  //   position: new Vector3(14.5, 0, 7.5),
  //   rotation: new Quaternion(0, 0, 0, 1),
  //   scale: new Vector3(1, 1, 1)
  // });
  // bush_Fantasy_04.addComponentOrReplace(transform_18);
  // engine.addEntity(bush_Fantasy_04);

  // const mushrooms_01 = new Entity();
  // const gltfShape_16 = new GLTFShape("models/Mushrooms_01.glb");
  // mushrooms_01.addComponentOrReplace(gltfShape_16);
  // const transform_19 = new Transform({
  //   position: new Vector3(9, 0, 1),
  //   rotation: new Quaternion(0, 0, 0, 1),
  //   scale: new Vector3(1, 1, 1)
  // });
  // mushrooms_01.addComponentOrReplace(transform_19);
  // engine.addEntity(mushrooms_01);

  const grass3 = new GLTFShape("models/grass3.glb");
  const dirt1 = new GLTFShape("models/dirt1.glb");
  const cemetary_grass = new GLTFShape("models/grassfloor-8x8.glb");
  const blackStone = new GLTFShape('models/Stone_Module_4M/Stone_Module_4M.glb')

  // COL 1 //

  const row1col1 = spawnEntity(4,0,4,0, 0, 0, 1, 1, 1)
  row1col1.addComponentOrReplace(blackStone)
  const row2col1 = spawnEntity(4,0,8,0, 0, 0, 1, 1, 1)
  row2col1.addComponentOrReplace(blackStone)
  const row3col1 = spawnEntity(4,0,12,0, 0, 0, 1, 1, 1)
  row3col1.addComponentOrReplace(blackStone)
  const row4col1 = spawnEntity(4,0,16,0, 0, 0, 1, 1, 1)
  row4col1.addComponentOrReplace(blackStone)
  const row5col1 = spawnEntity(4,0,20,0, 0, 0, 1, 1, 1)
  row5col1.addComponentOrReplace(blackStone)
  const row6col1 = spawnEntity(4,0,24,0, 0, 0, 1, 1, 1)
  row6col1.addComponentOrReplace(blackStone)
  const row7col1 = spawnEntity(4,0,28,0, 0, 0, 1, 1, 1)
  row7col1.addComponentOrReplace(blackStone)
  const row8col1 = spawnEntity(4,0,32,0, 0, 0, 1, 1, 1)
  row8col1.addComponentOrReplace(blackStone)
  const row9col1 = spawnEntity(4,0,36,0, 0, 0, 1, 1, 1)
  row9col1.addComponentOrReplace(blackStone)
  const row10col1 = spawnEntity(4,0,40,0, 0, 0, 1, 1, 1)
  row10col1.addComponentOrReplace(blackStone)
  const row11col1 = spawnEntity(4,0,44,0, 0, 0, 1, 1, 1)
  row11col1.addComponentOrReplace(blackStone)
  const row12col1 = spawnEntity(4,0,48,0, 0, 0, 1, 1, 1)
  row12col1.addComponentOrReplace(blackStone)

  // COL 2 //

  const row1col2 = spawnEntity(8,0,4,0, 0, 0, 1, 1, 1)
  row1col2.addComponentOrReplace(blackStone)
  const row2col2 = spawnEntity(8,0,8,0, 0, 0, 1, 1, 1)
  row2col2.addComponentOrReplace(blackStone)
  const row3col2 = spawnEntity(8,0,12,0, 0, 0, 1, 1, 1)
  row3col2.addComponentOrReplace(blackStone)
  const row4col2 = spawnEntity(8,0,16,0, 0, 0, 1, 1, 1)
  row4col2.addComponentOrReplace(blackStone)
  const row5col2 = spawnEntity(8,0,20,0, 0, 0, 1, 1, 1)
  row5col2.addComponentOrReplace(blackStone)
  const row6col2 = spawnEntity(8,0,24,0, 0, 0, 1, 1, 1)
  row6col2.addComponentOrReplace(blackStone)
  const row7col2 = spawnEntity(8,0,28,0, 0, 0, 1, 1, 1)
  row7col2.addComponentOrReplace(blackStone)
  const row8col2 = spawnEntity(8,0,32,0, 0, 0, 1, 1, 1)
  row8col2.addComponentOrReplace(blackStone)
  const row9col2 = spawnEntity(8,0,36,0, 0, 0, 1, 1, 1)
  row9col2.addComponentOrReplace(blackStone)
  const row10col2 = spawnEntity(8,0,40,0, 0, 0, 1, 1, 1)
  row10col2.addComponentOrReplace(blackStone)
  const row11col2 = spawnEntity(8,0,44,0, 0, 0, 1, 1, 1)
  row11col2.addComponentOrReplace(blackStone)
  const row12col2 = spawnEntity(8,0,48,0, 0, 0, 1, 1, 1)
  row12col2.addComponentOrReplace(blackStone)

  // COL 3 //

  const row1col3 = spawnEntity(12,0,4,0, 0, 0, 1, 1, 1)
  row1col3.addComponentOrReplace(blackStone)
  const row2col3 = spawnEntity(12,0,8,0, 0, 0, 1, 1, 1)
  row2col3.addComponentOrReplace(blackStone)
  const row3col3 = spawnEntity(12,0,12,0, 0, 0, 1, 1, 1)
  row3col3.addComponentOrReplace(blackStone)
  const row4col3 = spawnEntity(12,0,16,0, 0, 0, 1, 1, 1)
  row4col3.addComponentOrReplace(blackStone)
  const row5col3 = spawnEntity(12,0,20,0, 0, 0, 1, 1, 1)
  row5col3.addComponentOrReplace(blackStone)
  const row6col3 = spawnEntity(12,0,24,0, 0, 0, 1, 1, 1)
  row6col3.addComponentOrReplace(blackStone)
  const row7col3 = spawnEntity(12,0,28,0, 0, 0, 1, 1, 1)
  row7col3.addComponentOrReplace(blackStone)
  const row8col3 = spawnEntity(12,0,32,0, 0, 0, 1, 1, 1)
  row8col3.addComponentOrReplace(blackStone)
  const row9col3 = spawnEntity(12,0,36,0, 0, 0, 1, 1, 1)
  row9col3.addComponentOrReplace(blackStone)
  const row10col3 = spawnEntity(12,0,40,0, 0, 0, 1, 1, 1)
  row10col3.addComponentOrReplace(blackStone)
  const row11col3 = spawnEntity(12,0,44,0, 0, 0, 1, 1, 1)
  row11col3.addComponentOrReplace(blackStone)
  const row12col3 = spawnEntity(12,0,48,0, 0, 0, 1, 1, 1)
  row12col3.addComponentOrReplace(blackStone)

  // COL 4 //

  const row1col4 = spawnEntity(16,0,4,0, 0, 0, 1, 1, 1)
  row1col4.addComponentOrReplace(blackStone)
  const row2col4 = spawnEntity(16,0,8,0, 0, 0, 1, 1, 1)
  row2col4.addComponentOrReplace(blackStone)
  const row3col4 = spawnEntity(16,0,12,0, 0, 0, 1, 1, 1)
  row3col4.addComponentOrReplace(blackStone)
  const row4col4 = spawnEntity(16,0,16,0, 0, 0, 1, 1, 1)
  row4col4.addComponentOrReplace(blackStone)
  const row5col4 = spawnEntity(16,0,20,0, 0, 0, 1, 1, 1)
  row5col4.addComponentOrReplace(blackStone)
  const row6col4 = spawnEntity(16,0,24,0, 0, 0, 1, 1, 1)
  row6col4.addComponentOrReplace(blackStone)
  const row7col4 = spawnEntity(16,0,28,0, 0, 0, 1, 1, 1)
  row7col4.addComponentOrReplace(blackStone)
  const row8col4 = spawnEntity(16,0,32,0, 0, 0, 1, 1, 1)
  row8col4.addComponentOrReplace(blackStone)
  const row9col4 = spawnEntity(16,0,36,0, 0, 0, 1, 1, 1)
  row9col4.addComponentOrReplace(blackStone)
  const row10col4 = spawnEntity(16,0,40,0, 0, 0, 1, 1, 1)
  row10col4.addComponentOrReplace(blackStone)
  const row11col4 = spawnEntity(16,0,44,0, 0, 0, 1, 1, 1)
  row11col4.addComponentOrReplace(blackStone)
  const row12col4 = spawnEntity(16,0,48,0, 0, 0, 1, 1, 1)
  row12col4.addComponentOrReplace(blackStone) 

  // COL 5 //

  const row1col5 = spawnEntity(20,0,4,0, 0, 0, 1, 1, 1)
  row1col5.addComponentOrReplace(blackStone)
  const row2col5 = spawnEntity(20,0,8,0, 0, 0, 1, 1, 1)
  row2col5.addComponentOrReplace(blackStone)
  const row3col5 = spawnEntity(20,0,12,0, 0, 0, 1, 1, 1)
  row3col5.addComponentOrReplace(blackStone)
  const row4col5 = spawnEntity(20,0,16,0, 0, 0, 1, 1, 1)
  row4col5.addComponentOrReplace(blackStone)
  const row5col5 = spawnEntity(20,0,20,0, 0, 0, 1, 1, 1)
  row5col5.addComponentOrReplace(blackStone)
  const row6col5 = spawnEntity(20,0,24,0, 0, 0, 1, 1, 1)
  row6col5.addComponentOrReplace(blackStone)
  const row7col5 = spawnEntity(20,0,28,0, 0, 0, 1, 1, 1)
  row7col5.addComponentOrReplace(blackStone)
  const row8col5 = spawnEntity(20,0,32,0, 0, 0, 1, 1, 1)
  row8col5.addComponentOrReplace(blackStone)
  const row9col5 = spawnEntity(20,0,36,0, 0, 0, 1, 1, 1)
  row9col5.addComponentOrReplace(blackStone)
  const row10col5 = spawnEntity(20,0,40,0, 0, 0, 1, 1, 1)
  row10col5.addComponentOrReplace(blackStone)
  const row11col5 = spawnEntity(20,0,44,0, 0, 0, 1, 1, 1)
  row11col5.addComponentOrReplace(blackStone)
  const row12col5 = spawnEntity(20,0,48,0, 0, 0, 1, 1, 1)
  row12col5.addComponentOrReplace(blackStone)  

  // COL 6 //

  const row1col6 = spawnEntity(24,0,4,0, 0, 0, 1, 1, 1)
  row1col6.addComponentOrReplace(blackStone)
  const row2col6 = spawnEntity(24,0,8,0, 0, 0, 1, 1, 1)
  row2col6.addComponentOrReplace(blackStone)
  const row3col6 = spawnEntity(24,0,12,0, 0, 0, 1, 1, 1)
  row3col6.addComponentOrReplace(blackStone)
  const row4col6 = spawnEntity(24,0,16,0, 0, 0, 1, 1, 1)
  row4col6.addComponentOrReplace(blackStone)
  const row5col6 = spawnEntity(24,0,20,0, 0, 0, 1, 1, 1)
  row5col6.addComponentOrReplace(blackStone)
  const row6col6 = spawnEntity(24,0,24,0, 0, 0, 1, 1, 1)
  row6col6.addComponentOrReplace(blackStone)
  const row7col6 = spawnEntity(24,0,28,0, 0, 0, 1, 1, 1)
  row7col6.addComponentOrReplace(blackStone)
  const row8col6 = spawnEntity(24,0,32,0, 0, 0, 1, 1, 1)
  row8col6.addComponentOrReplace(blackStone)
  const row9col6 = spawnEntity(24,0,36,0, 0, 0, 1, 1, 1)
  row9col6.addComponentOrReplace(blackStone)
  const row10col6 = spawnEntity(24,0,40,0, 0, 0, 1, 1, 1)
  row10col6.addComponentOrReplace(blackStone)
  const row11col6 = spawnEntity(24,0,44,0, 0, 0, 1, 1, 1)
  row11col6.addComponentOrReplace(blackStone)
  const row12col6 = spawnEntity(24,0,48,0, 0, 0, 1, 1, 1)
  row12col6.addComponentOrReplace(blackStone) 

  // COL 7 //

  const row1col7 = spawnEntity(28,0,4,0, 0, 0, 1, 1, 1)
  row1col7.addComponentOrReplace(blackStone)
  const row2col7 = spawnEntity(28,0,8,0, 0, 0, 1, 1, 1)
  row2col7.addComponentOrReplace(blackStone)
  const row3col7 = spawnEntity(28,0,12,0, 0, 0, 1, 1, 1)
  row3col7.addComponentOrReplace(blackStone)
  const row4col7 = spawnEntity(28,0,16,0, 0, 0, 1, 1, 1)
  row4col7.addComponentOrReplace(blackStone)
  const row5col7 = spawnEntity(28,0,20,0, 0, 0, 1, 1, 1)
  row5col7.addComponentOrReplace(blackStone)
  const row6col7 = spawnEntity(28,0,24,0, 0, 0, 1, 1, 1)
  row6col7.addComponentOrReplace(blackStone)
  const row7col7 = spawnEntity(28,0,28,0, 0, 0, 1, 1, 1)
  row7col7.addComponentOrReplace(blackStone)
  const row8col7 = spawnEntity(28,0,32,0, 0, 0, 1, 1, 1)
  row8col7.addComponentOrReplace(blackStone)
  const row9col7 = spawnEntity(28,0,36,0, 0, 0, 1, 1, 1)
  row9col7.addComponentOrReplace(blackStone)
  const row10col7 = spawnEntity(28,0,40,0, 0, 0, 1, 1, 1)
  row10col7.addComponentOrReplace(blackStone)
  const row11col7 = spawnEntity(28,0,44,0, 0, 0, 1, 1, 1)
  row11col7.addComponentOrReplace(blackStone)
  const row12col7 = spawnEntity(28,0,48,0, 0, 0, 1, 1, 1)
  row12col7.addComponentOrReplace(blackStone) 

  // COL 8 //

  const row1col8 = spawnEntity(32,0,4,0, 0, 0, 1, 1, 1)
  row1col8.addComponentOrReplace(blackStone)
  const row2col8 = spawnEntity(32,0,8,0, 0, 0, 1, 1, 1)
  row2col8.addComponentOrReplace(blackStone)
  const row3col8 = spawnEntity(32,0,12,0, 0, 0, 1, 1, 1)
  row3col8.addComponentOrReplace(blackStone)
  const row4col8 = spawnEntity(32,0,16,0, 0, 0, 1, 1, 1)
  row4col8.addComponentOrReplace(blackStone)
  const row5col8 = spawnEntity(32,0,20,0, 0, 0, 1, 1, 1)
  row5col8.addComponentOrReplace(blackStone)
  const row6col8 = spawnEntity(32,0,24,0, 0, 0, 1, 1, 1)
  row6col8.addComponentOrReplace(blackStone)
  const row7col8 = spawnEntity(32,0,28,0, 0, 0, 1, 1, 1)
  row7col8.addComponentOrReplace(blackStone)
  const row8col8 = spawnEntity(32,0,32,0, 0, 0, 1, 1, 1)
  row8col8.addComponentOrReplace(blackStone)
  const row9col8 = spawnEntity(32,0,36,0, 0, 0, 1, 1, 1)
  row9col8.addComponentOrReplace(blackStone)
  const row10col8 = spawnEntity(32,0,40,0, 0, 0, 1, 1, 1)
  row10col8.addComponentOrReplace(blackStone)
  const row11col8 = spawnEntity(32,0,44,0, 0, 0, 1, 1, 1)
  row11col8.addComponentOrReplace(blackStone)
  const row12col8 = spawnEntity(32,0,48,0, 0, 0, 1, 1, 1)
  row12col8.addComponentOrReplace(blackStone) 

  // COL 9 //

  const row1col9 = spawnEntity(36,0,4,0, 0, 0, 1, 1, 1)
  row1col9.addComponentOrReplace(blackStone)
  const row2col9 = spawnEntity(36,0,8,0, 0, 0, 1, 1, 1)
  row2col9.addComponentOrReplace(blackStone)
  const row3col9 = spawnEntity(36,0,12,0, 0, 0, 1, 1, 1)
  row3col9.addComponentOrReplace(blackStone)
  const row4col9 = spawnEntity(36,0,16,0, 0, 0, 1, 1, 1)
  row4col9.addComponentOrReplace(blackStone)
  const row5col9 = spawnEntity(36,0,20,0, 0, 0, 1, 1, 1)
  row5col9.addComponentOrReplace(blackStone)
  const row6col9 = spawnEntity(36,0,24,0, 0, 0, 1, 1, 1)
  row6col9.addComponentOrReplace(blackStone)
  const row7col9 = spawnEntity(36,0,28,0, 0, 0, 1, 1, 1)
  row7col9.addComponentOrReplace(blackStone)
  const row8col9 = spawnEntity(36,0,32,0, 0, 0, 1, 1, 1)
  row8col9.addComponentOrReplace(blackStone)
  const row9col9 = spawnEntity(36,0,36,0, 0, 0, 1, 1, 1)
  row9col9.addComponentOrReplace(blackStone)
  const row10col9 = spawnEntity(36,0,40,0, 0, 0, 1, 1, 1)
  row10col9.addComponentOrReplace(blackStone)
  const row11col9 = spawnEntity(36,0,44,0, 0, 0, 1, 1, 1)
  row11col9.addComponentOrReplace(blackStone)
  const row12col9 = spawnEntity(36,0,48,0, 0, 0, 1, 1, 1)
  row12col9.addComponentOrReplace(blackStone) 

  // COL 10 //

  const row1col10 = spawnEntity(40,0,4,0, 0, 0, 1, 1, 1)
  row1col10.addComponentOrReplace(blackStone)
  const row2col10 = spawnEntity(40,0,8,0, 0, 0, 1, 1, 1)
  row2col10.addComponentOrReplace(blackStone)
  const row3col10 = spawnEntity(40,0,12,0, 0, 0, 1, 1, 1)
  row3col10.addComponentOrReplace(blackStone)
  const row4col10 = spawnEntity(40,0,16,0, 0, 0, 1, 1, 1)
  row4col10.addComponentOrReplace(blackStone)
  const row5col10 = spawnEntity(40,0,20,0, 0, 0, 1, 1, 1)
  row5col10.addComponentOrReplace(blackStone)
  const row6col10 = spawnEntity(40,0,24,0, 0, 0, 1, 1, 1)
  row6col10.addComponentOrReplace(blackStone)
  const row7col10 = spawnEntity(40,0,28,0, 0, 0, 1, 1, 1)
  row7col10.addComponentOrReplace(blackStone)
  const row8col10 = spawnEntity(40,0,32,0, 0, 0, 1, 1, 1)
  row8col10.addComponentOrReplace(blackStone)
  const row9col10 = spawnEntity(40,0,36,0, 0, 0, 1, 1, 1)
  row9col10.addComponentOrReplace(blackStone)
  const row10col10 = spawnEntity(40,0,40,0, 0, 0, 1, 1, 1)
  row10col10.addComponentOrReplace(blackStone)
  const row11col10 = spawnEntity(40,0,44,0, 0, 0, 1, 1, 1)
  row11col10.addComponentOrReplace(blackStone)
  const row12col10 = spawnEntity(40,0,48,0, 0, 0, 1, 1, 1)
  row12col10.addComponentOrReplace(blackStone) 

  // COL 11

  const row1col11 = spawnEntity(44,0,4,0, 0, 0, 1, 1, 1)
  row1col11.addComponentOrReplace(blackStone)
  const row2col11 = spawnEntity(44,0,8,0, 0, 0, 1, 1, 1)
  row2col11.addComponentOrReplace(blackStone)
  const row3col11 = spawnEntity(44,0,12,0, 0, 0, 1, 1, 1)
  row3col11.addComponentOrReplace(blackStone)
  const row4col11 = spawnEntity(44,0,16,0, 0, 0, 1, 1, 1)
  row4col11.addComponentOrReplace(blackStone)
  const row5col11 = spawnEntity(44,0,20,0, 0, 0, 1, 1, 1)
  row5col11.addComponentOrReplace(blackStone)
  const row6col11 = spawnEntity(44,0,24,0, 0, 0, 1, 1, 1)
  row6col11.addComponentOrReplace(blackStone)
  const row7col11 = spawnEntity(44,0,28,0, 0, 0, 1, 1, 1)
  row7col11.addComponentOrReplace(blackStone)
  const row8col11 = spawnEntity(44,0,32,0, 0, 0, 1, 1, 1)
  row8col11.addComponentOrReplace(blackStone)
  const row9col11 = spawnEntity(44,0,36,0, 0, 0, 1, 1, 1)
  row9col11.addComponentOrReplace(blackStone)
  const row10col11 = spawnEntity(44,0,40,0, 0, 0, 1, 1, 1)
  row10col11.addComponentOrReplace(blackStone)
  const row11col11 = spawnEntity(44,0,44,0, 0, 0, 1, 1, 1)
  row11col11.addComponentOrReplace(blackStone)
  const row12col11 = spawnEntity(44,0,48,0, 0, 0, 1, 1, 1)
  row12col11.addComponentOrReplace(blackStone) 

  // COL 12

  const row1col12 = spawnEntity(48,0,4,0, 0, 0, 1, 1, 1)
  row1col12.addComponentOrReplace(blackStone)
  const row2col12 = spawnEntity(48,0,8,0, 0, 0, 1, 1, 1)
  row2col12.addComponentOrReplace(blackStone)
  const row3col12 = spawnEntity(48,0,12,0, 0, 0, 1, 1, 1)
  row3col12.addComponentOrReplace(blackStone)
  const row4col12 = spawnEntity(48,0,16,0, 0, 0, 1, 1, 1)
  row4col12.addComponentOrReplace(blackStone)
  const row5col12 = spawnEntity(48,0,20,0, 0, 0, 1, 1, 1)
  row5col12.addComponentOrReplace(blackStone)
  const row6col12 = spawnEntity(48,0,24,0, 0, 0, 1, 1, 1)
  row6col12.addComponentOrReplace(blackStone)
  const row7col12 = spawnEntity(48,0,28,0, 0, 0, 1, 1, 1)
  row7col12.addComponentOrReplace(blackStone)
  const row8col12 = spawnEntity(48,0,32,0, 0, 0, 1, 1, 1)
  row8col12.addComponentOrReplace(blackStone)
  const row9col12 = spawnEntity(48,0,36,0, 0, 0, 1, 1, 1)
  row9col12.addComponentOrReplace(blackStone)
  const row10col12 = spawnEntity(48,0,40,0, 0, 0, 1, 1, 1)
  row10col12.addComponentOrReplace(blackStone)
  const row11col12 = spawnEntity(48,0,44,0, 0, 0, 1, 1, 1)
  row11col12.addComponentOrReplace(blackStone)
  const row12col12 = spawnEntity(48,0,48,0, 0, 0, 1, 1, 1)
  row12col12.addComponentOrReplace(blackStone) 

  // const row1col1 = new Entity();
  // row1col1.addComponentOrReplace(blackStone);
  // const row1col1Loc = new Transform({
  //   //position: new Vector3(8, 0, 8),
  //   position: new Vector3(4, 0, 4),
  //   rotation: new Quaternion(0, 0, 0, 1),
  //   scale: new Vector3(1, 1, 1)
  // });
  // row1col1.addComponentOrReplace(row1col1Loc);
  // engine.addEntity(row1col1);

  // const row1col11 = new Entity();
  // row1col11.addComponentOrReplace(blackStone);
  // const row1col11Loc = new Transform({
  //   //position: new Vector3(8, 0, 8),
  //   position: new Vector3(4, 0, 8),
  //   rotation: new Quaternion(0, 0, 0, 1),
  //   scale: new Vector3(1, 1, 1)
  // });
  // row1col11.addComponentOrReplace(row1col11Loc);
  // engine.addEntity(row1col11);

  // const row1col12 = new Entity();
  // row1col12.addComponentOrReplace(blackStone);
  // const row1col12Loc = new Transform({
  //   //position: new Vector3(8, 0, 8),
  //   position: new Vector3(8, 0, 8),
  //   rotation: new Quaternion(0, 0, 0, 1),
  //   scale: new Vector3(1, 1, 1)
  // });
  // row1col12.addComponentOrReplace(row1col12Loc);
  // engine.addEntity(row1col12)

  // const row1col13 = new Entity();
  // row1col13.addComponentOrReplace(blackStone);
  // const row1col13Loc = new Transform({
  //   //position: new Vector3(8, 0, 8),
  //   position: new Vector3(8, 0, 4),
  //   rotation: new Quaternion(0, 0, 0, 1),
  //   scale: new Vector3(1, 1, 1)
  // });
  // row1col13.addComponentOrReplace(row1col13Loc);
  // engine.addEntity(row1col13);

  // const row2col1 = new Entity();
  // const row2col1Loc = new Transform({
  //   position: new Vector3(4, 0, 12),
  //   rotation: new Quaternion(0, 0, 0, 1),
  //   scale: new Vector3(1, 1, 1)
  // });
  // row2col1.addComponentOrReplace(blackStone);
  // row2col1.addComponentOrReplace(row2col1Loc);
  // engine.addEntity(row2col1);

  // const row2col11 = new Entity();
  // const row2col11Loc = new Transform({
  //   position: new Vector3(4, 0, 16),
  //   rotation: new Quaternion(0, 0, 0, 1),
  //   scale: new Vector3(1, 1, 1)
  // });
  // row2col11.addComponentOrReplace(blackStone);
  // row2col11.addComponentOrReplace(row2col11Loc);
  // engine.addEntity(row2col11);

  // const row2col12 = new Entity();
  // const row2col12Loc = new Transform({
  //   position: new Vector3(8, 0, 16),
  //   rotation: new Quaternion(0, 0, 0, 1),
  //   scale: new Vector3(1, 1, 1)
  // });
  // row2col12.addComponentOrReplace(blackStone);
  // row2col12.addComponentOrReplace(row2col12Loc);
  // engine.addEntity(row2col12);

  // const row2col13 = new Entity();
  // const row2col13Loc = new Transform({
  //   position: new Vector3(8, 0, 12),
  //   rotation: new Quaternion(0, 0, 0, 1),
  //   scale: new Vector3(1, 1, 1)
  // });
  // row2col13.addComponentOrReplace(blackStone);
  // row2col13.addComponentOrReplace(row2col13Loc);
  // engine.addEntity(row2col13);

  // const row3col1 = new Entity();
  // const row3col1Loc = new Transform({
  //   position: new Vector3(4, 0, 20),
  //   rotation: new Quaternion(0, 0, 0, 1),
  //   scale: new Vector3(1, 1, 1)
  // });
  // row3col1.addComponentOrReplace(blackStone);
  // row3col1.addComponentOrReplace(row3col1Loc);
  // engine.addEntity(row3col1);

  // const row4col1 = new Entity();
  // const row4col1Loc = new Transform({
  //   position: new Vector3(4, 0, 28),
  //   rotation: new Quaternion(0, 0, 0, 1),
  //   scale: new Vector3(1, 1, 1)
  // });
  // row4col1.addComponentOrReplace(blackStone);
  // row4col1.addComponentOrReplace(row4col1Loc);
  // engine.addEntity(row4col1);

  // const row5col1 = new Entity();
  // const row5col1Loc = new Transform({
  //   position: new Vector3(4, 0, 36),
  //   rotation: new Quaternion(0, 0, 0, 1),
  //   scale: new Vector3(1, 1, 1)
  // });
  // row5col1.addComponentOrReplace(blackStone);
  // row5col1.addComponentOrReplace(row5col1Loc);
  // engine.addEntity(row5col1);

  // const row6col1 = new Entity();
  // const row6col1Loc = new Transform({
  //   position: new Vector3(4, 0, 44),
  //   rotation: new Quaternion(0, 0, 0, 1),
  //   scale: new Vector3(1, 1, 1)
  // });
  // row6col1.addComponentOrReplace(blackStone);
  // row6col1.addComponentOrReplace(row6col1Loc);
  // engine.addEntity(row6col1);

  // // // COL 2 //

  // const row1col2 = new Entity();
  // const row1col2Loc = new Transform({
  //   position: new Vector3(12, 0, 4),
  //   rotation: new Quaternion(0, 0, 0, 1),
  //   scale: new Vector3(1, 1, 1)
  // });
  // row1col2.addComponentOrReplace(cemetary_grass);
  // row1col2.addComponentOrReplace(row1col2Loc);
  // engine.addEntity(row1col2);

  // const row2col2 = new Entity();
  // const row2col2Loc = new Transform({
  //   position: new Vector3(12, 0, 12),
  //   rotation: new Quaternion(0, 0, 0, 1),
  //   scale: new Vector3(1, 1, 1)
  // });
  // row2col2.addComponentOrReplace(cemetary_grass);
  // row2col2.addComponentOrReplace(row2col2Loc);
  // engine.addEntity(row2col2);

  // const row3col2 = new Entity();
  // const row3col2Loc = new Transform({
  //   position: new Vector3(12, 0, 20),
  //   rotation: new Quaternion(0, 0, 0, 1),
  //   scale: new Vector3(1, 1, 1)
  // });
  // row3col2.addComponentOrReplace(cemetary_grass);
  // row3col2.addComponentOrReplace(row3col2Loc);
  // engine.addEntity(row3col2);

  // const row4col2 = new Entity();
  // const row4col2Loc = new Transform({
  //   position: new Vector3(12, 0, 28),
  //   rotation: new Quaternion(0, 0, 0, 1),
  //   scale: new Vector3(1, 1, 1)
  // });
  // row4col2.addComponentOrReplace(cemetary_grass);
  // row4col2.addComponentOrReplace(row4col2Loc);
  // engine.addEntity(row4col2);

  // const row5col2 = new Entity();
  // const row5col2Loc = new Transform({
  //   position: new Vector3(12, 0, 36),
  //   rotation: new Quaternion(0, 0, 0, 1),
  //   scale: new Vector3(1, 1, 1)
  // });
  // row5col2.addComponentOrReplace(cemetary_grass);
  // row5col2.addComponentOrReplace(row5col2Loc);
  // engine.addEntity(row5col2);

  // const row6col2 = new Entity();
  // const row6col2Loc = new Transform({
  //   position: new Vector3(12, 0, 44),
  //   rotation: new Quaternion(0, 0, 0, 1),
  //   scale: new Vector3(1, 1, 1)
  // });
  // row6col2.addComponentOrReplace(cemetary_grass);
  // row6col2.addComponentOrReplace(row6col2Loc);
  // engine.addEntity(row6col2);

  // // // COL 3 //

  // const row1col3 = new Entity();
  // const row1col3Loc = new Transform({
  //   position: new Vector3(20, 0, 4),
  //   rotation: new Quaternion(0, 0, 0, 1),
  //   scale: new Vector3(1, 1, 1)
  // });
  // row1col3.addComponentOrReplace(cemetary_grass);
  // row1col3.addComponentOrReplace(row1col3Loc);
  // engine.addEntity(row1col3);

  // const row2col3 = new Entity();
  // const row2col3Loc = new Transform({
  //   position: new Vector3(20, 0, 12),
  //   rotation: new Quaternion(0, 0, 0, 1),
  //   scale: new Vector3(1, 1, 1)
  // });
  // row2col3.addComponentOrReplace(cemetary_grass);
  // row2col3.addComponentOrReplace(row2col3Loc);
  // engine.addEntity(row2col3);

  // const row3col3 = new Entity();
  // const row3col3Loc = new Transform({
  //   position: new Vector3(20, 0, 20),
  //   rotation: new Quaternion(0, 0, 0, 1),
  //   scale: new Vector3(1, 1, 1)
  // });
  // row3col3.addComponentOrReplace(cemetary_grass);
  // row3col3.addComponentOrReplace(row3col3Loc);
  // engine.addEntity(row3col3);

  // const row4col3 = new Entity();
  // const row4col3Loc = new Transform({
  //   position: new Vector3(20, 0, 28),
  //   rotation: new Quaternion(0, 0, 0, 1),
  //   scale: new Vector3(1, 1, 1)
  // });
  // row4col3.addComponentOrReplace(cemetary_grass);
  // row4col3.addComponentOrReplace(row4col3Loc);
  // engine.addEntity(row4col3);

  // const row5col3 = new Entity();
  // const row5col3Loc = new Transform({
  //   position: new Vector3(20, 0, 36),
  //   rotation: new Quaternion(0, 0, 0, 1),
  //   scale: new Vector3(1, 1, 1)
  // });
  // row5col3.addComponentOrReplace(cemetary_grass);
  // row5col3.addComponentOrReplace(row5col3Loc);
  // engine.addEntity(row5col3);

  // const row6col3 = new Entity();
  // const row6col3Loc = new Transform({
  //   position: new Vector3(20, 0, 44),
  //   rotation: new Quaternion(0, 0, 0, 1),
  //   scale: new Vector3(1, 1, 1)
  // });
  // row6col3.addComponentOrReplace(cemetary_grass);
  // row6col3.addComponentOrReplace(row6col3Loc);
  // engine.addEntity(row6col3);

  // // // COL 4 ///

  // const row1col4 = new Entity();
  // const row1col4Loc = new Transform({
  //   position: new Vector3(28, 0, 4),
  //   rotation: new Quaternion(0, 0, 0, 1),
  //   scale: new Vector3(1, 1, 1)
  // });
  // row1col4.addComponentOrReplace(cemetary_grass);
  // row1col4.addComponentOrReplace(row1col4Loc);
  // engine.addEntity(row1col4);

  // const row2col4 = new Entity();
  // const row2col4Loc = new Transform({
  //   position: new Vector3(28, 0, 12),
  //   rotation: new Quaternion(0, 0, 0, 1),
  //   scale: new Vector3(1, 1, 1)
  // });
  // row2col4.addComponentOrReplace(cemetary_grass);
  // row2col4.addComponentOrReplace(row2col4Loc);
  // engine.addEntity(row2col4);

  // const row3col4 = new Entity();
  // const row3col4Loc = new Transform({
  //   position: new Vector3(28, 0, 20),
  //   rotation: new Quaternion(0, 0, 0, 1),
  //   scale: new Vector3(1, 1, 1)
  // });
  // row3col4.addComponentOrReplace(cemetary_grass);
  // row3col4.addComponentOrReplace(row3col4Loc);
  // engine.addEntity(row3col4);

  // const row4col4 = new Entity();
  // const row4col4Loc = new Transform({
  //   position: new Vector3(28, 0, 28),
  //   rotation: new Quaternion(0, 0, 0, 1),
  //   scale: new Vector3(1, 1, 1)
  // });
  // row4col4.addComponentOrReplace(cemetary_grass);
  // row4col4.addComponentOrReplace(row4col4Loc);
  // engine.addEntity(row4col4);

  // const row5col4 = new Entity();
  // const row5col4Loc = new Transform({
  //   position: new Vector3(28, 0, 36),
  //   rotation: new Quaternion(0, 0, 0, 1),
  //   scale: new Vector3(1, 1, 1)
  // });
  // row5col4.addComponentOrReplace(cemetary_grass);
  // row5col4.addComponentOrReplace(row5col4Loc);
  // engine.addEntity(row5col4);

  // const row6col4 = new Entity();
  // const row6col4Loc = new Transform({
  //   position: new Vector3(28, 0, 44),
  //   rotation: new Quaternion(0, 0, 0, 1),
  //   scale: new Vector3(1, 1, 1)
  // });
  // row6col4.addComponentOrReplace(cemetary_grass);
  // row6col4.addComponentOrReplace(row6col4Loc);
  // engine.addEntity(row6col4);

  // // // COL 5 //

  // const row1col5 = new Entity();
  // const row1col5Loc = new Transform({
  //   position: new Vector3(36, 0, 4),
  //   rotation: new Quaternion(0, 0, 0, 1),
  //   scale: new Vector3(1, 1, 1)
  // });
  // row1col5.addComponentOrReplace(cemetary_grass);
  // row1col5.addComponentOrReplace(row1col5Loc);
  // engine.addEntity(row1col5);

  // const row2col5 = new Entity();
  // const row2col5Loc = new Transform({
  //   position: new Vector3(36, 0, 12),
  //   rotation: new Quaternion(0, 0, 0, 1),
  //   scale: new Vector3(1, 1, 1)
  // });
  // row2col5.addComponentOrReplace(cemetary_grass);
  // row2col5.addComponentOrReplace(row2col5Loc);
  // engine.addEntity(row2col5);

  // const row3col5 = new Entity();
  // const row3col5Loc = new Transform({
  //   position: new Vector3(36, 0, 20),
  //   rotation: new Quaternion(0, 0, 0, 1),
  //   scale: new Vector3(1, 1, 1)
  // });
  // row3col5.addComponentOrReplace(cemetary_grass);
  // row3col5.addComponentOrReplace(row3col5Loc);
  // engine.addEntity(row3col5);

  // const row4col5 = new Entity();
  // const row4col5Loc = new Transform({
  //   position: new Vector3(36, 0, 28),
  //   rotation: new Quaternion(0, 0, 0, 1),
  //   scale: new Vector3(1, 1, 1)
  // });
  // row4col5.addComponentOrReplace(cemetary_grass);
  // row4col5.addComponentOrReplace(row4col5Loc);
  // engine.addEntity(row4col5);

  // const row5col5 = new Entity();
  // const row5col5Loc = new Transform({
  //   position: new Vector3(36, 0, 36),
  //   rotation: new Quaternion(0, 0, 0, 1),
  //   scale: new Vector3(1, 1, 1)
  // });
  // row5col5.addComponentOrReplace(cemetary_grass);
  // row5col5.addComponentOrReplace(row5col5Loc);
  // engine.addEntity(row5col5);

  // const row6col5 = new Entity();
  // const row6col5Loc = new Transform({
  //   position: new Vector3(36, 0, 44),
  //   rotation: new Quaternion(0, 0, 0, 1),
  //   scale: new Vector3(1, 1, 1)
  // });
  // row6col5.addComponentOrReplace(cemetary_grass);
  // row6col5.addComponentOrReplace(row6col5Loc);
  // engine.addEntity(row6col5);

  // // // COL 6 //

  // const row1col6 = new Entity();
  // const row1col6Loc = new Transform({
  //   position: new Vector3(44, 0, 4),
  //   rotation: new Quaternion(0, 0, 0, 1),
  //   scale: new Vector3(1, 1, 1)
  // });
  // row1col6.addComponentOrReplace(cemetary_grass);
  // row1col6.addComponentOrReplace(row1col6Loc);
  // engine.addEntity(row1col6);

  // const row2col6 = new Entity();
  // const row2col6Loc = new Transform({
  //   position: new Vector3(44, 0, 12),
  //   rotation: new Quaternion(0, 0, 0, 1),
  //   scale: new Vector3(1, 1, 1)
  // });
  // row2col6.addComponentOrReplace(cemetary_grass);
  // row2col6.addComponentOrReplace(row2col6Loc);
  // engine.addEntity(row2col6);

  // const row3col6 = new Entity();
  // const row3col6Loc = new Transform({
  //   position: new Vector3(44, 0, 20),
  //   rotation: new Quaternion(0, 0, 0, 1),
  //   scale: new Vector3(1, 1, 1)
  // });
  // row3col6.addComponentOrReplace(cemetary_grass);
  // row3col6.addComponentOrReplace(row3col6Loc);
  // engine.addEntity(row3col6);

  // const row4col6 = new Entity();
  // const row4col6Loc = new Transform({
  //   position: new Vector3(44, 0, 28),
  //   rotation: new Quaternion(0, 0, 0, 1),
  //   scale: new Vector3(1, 1, 1)
  // });
  // row4col6.addComponentOrReplace(cemetary_grass);
  // row4col6.addComponentOrReplace(row4col6Loc);
  // engine.addEntity(row4col6);

  // const row5col6 = new Entity();
  // const row5col6Loc = new Transform({
  //   position: new Vector3(44, 0, 36),
  //   rotation: new Quaternion(0, 0, 0, 1),
  //   scale: new Vector3(1, 1, 1)
  // });
  // row5col6.addComponentOrReplace(cemetary_grass);
  // row5col6.addComponentOrReplace(row5col6Loc);
  // engine.addEntity(row5col6);

  // const row6col6 = new Entity();
  // const row6col6Loc = new Transform({
  //   position: new Vector3(44, 0, 44),
  //   rotation: new Quaternion(0, 0, 0, 1),
  //   scale: new Vector3(1, 1, 1)
  // });
  // row6col6.addComponentOrReplace(cemetary_grass);
  // row6col6.addComponentOrReplace(row6col6Loc);
  // engine.addEntity(row6col6);

  //const hud: BuilderHUD = new BuilderHUD();
  //hud.attachToEntity(dead_grass_small3)
  //hud.attachToEntity(grass03);
}
