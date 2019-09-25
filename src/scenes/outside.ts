//import { BuilderHUD } from "../modules/BuilderHUD";
import { spawnEntity } from '../modules/SpawnerFunctions'
import resources from '../resources';

export function CreateOutside(): void {
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
  grass03.addComponentOrReplace(resources.models.twoBladesOfGrassShape);
  const transform_9 = new Transform({
    position: new Vector3(31, 0, 28),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  });
  grass03.addComponent(transform_9);
  engine.addEntity(grass03);

  const grass032 = new Entity()
  const transform_91 = new Transform({
    position: new Vector3(31.5, 0, 28),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  })
  grass032.addComponent(transform_91)
  grass032.addComponent(resources.models.twoBladesOfGrassShape)
  engine.addEntity(grass032)
  

  const grass05 = new Entity();
  const gltfShape_11 = new GLTFShape("models/Grass05.glb");
  grass05.addComponentOrReplace(gltfShape_11);
  const transform_14 = new Transform({
    position: new Vector3(35, 0, 15),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  });
  grass05.addComponentOrReplace(transform_14);
  engine.addEntity(grass05);

  const outsidestairs1 = new Entity()
  const osShape = new GLTFShape('models/Module_Stair_Stones_3M/Module_Stair_Stones_3M.glb')
  const outsidestairs1Loc = new Transform({
    position: new Vector3(32, 0, 41),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1.3, 1, 1)
  })
  outsidestairs1.addComponent(osShape)
  outsidestairs1.addComponent(outsidestairs1Loc)
  engine.addEntity(outsidestairs1)

  const outsidestairs2 = new Entity()
  const outsidestairs2Loc = new Transform({
    position: new Vector3(28, 0, 41),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1.3, 1, 1)
  })
  outsidestairs2.addComponent(osShape)
  outsidestairs2.addComponent(outsidestairs2Loc)
  engine.addEntity(outsidestairs2)

  const grassPatchLarge_04 = new Entity();
  const gltfShape_12 = new GLTFShape(
    "models/GrassPatchLarge_04.glb"
  );
  grassPatchLarge_04.addComponentOrReplace(gltfShape_12);
  const transform_15 = new Transform({
    position: new Vector3(34, 0, 12.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  });
  grassPatchLarge_04.addComponentOrReplace(transform_15);
  engine.addEntity(grassPatchLarge_04);

  const grassPatchSmall_04 = new Entity();
  const gltfShape_13 = new GLTFShape(
    "models/GrassPatchSmall_04.glb"
  );
  grassPatchSmall_04.addComponentOrReplace(gltfShape_13);
  const transform_16 = new Transform({
    position: new Vector3(34.5, 0, 23),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  });
  grassPatchSmall_04.addComponentOrReplace(transform_16);
  engine.addEntity(grassPatchSmall_04);
  
  // COL 1 //

  const row1col1 = spawnEntity(4,0,4,0, 0, 0, 1, 1, 1)
  row1col1.addComponentOrReplace(resources.models.blackStone)
  const row2col1 = spawnEntity(4,0,8,0, 0, 0, 1, 1, 1)
  row2col1.addComponentOrReplace(resources.models.blackStone)
  const row3col1 = spawnEntity(4,0,12,0, 0, 0, 1, 1, 1)
  row3col1.addComponentOrReplace(resources.models.blackStone)
  const row4col1 = spawnEntity(4,0,16,0, 0, 0, 1, 1, 1)
  row4col1.addComponentOrReplace(resources.models.blackStone)
  const row5col1 = spawnEntity(4,0,20,0, 0, 0, 1, 1, 1)
  row5col1.addComponentOrReplace(resources.models.blackStone)
  const row6col1 = spawnEntity(4,0,24,0, 0, 0, 1, 1, 1)
  row6col1.addComponentOrReplace(resources.models.blackStone)
  const row7col1 = spawnEntity(4,0,28,0, 0, 0, 1, 1, 1)
  row7col1.addComponentOrReplace(resources.models.blackStone)
  const row8col1 = spawnEntity(4,0,32,0, 0, 0, 1, 1, 1)
  row8col1.addComponentOrReplace(resources.models.blackStone)
  const row9col1 = spawnEntity(4,0,36,0, 0, 0, 1, 1, 1)
  row9col1.addComponentOrReplace(resources.models.blackStone)
  const row10col1 = spawnEntity(4,0,40,0, 0, 0, 1, 1, 1)
  row10col1.addComponentOrReplace(resources.models.blackStone)
  const row11col1 = spawnEntity(4,0,44,0, 0, 0, 1, 1, 1)
  row11col1.addComponentOrReplace(resources.models.blackStone)
  const row12col1 = spawnEntity(4,0,48,0, 0, 0, 1, 1, 1)
  row12col1.addComponentOrReplace(resources.models.blackStone)

  // COL 2 //

  const row1col2 = spawnEntity(8,0,4,0, 0, 0, 1, 1, 1)
  row1col2.addComponentOrReplace(resources.models.blackStone)
  const row2col2 = spawnEntity(8,0,8,0, 0, 0, 1, 1, 1)
  row2col2.addComponentOrReplace(resources.models.blackStone)
  const row3col2 = spawnEntity(8,0,12,0, 0, 0, 1, 1, 1)
  row3col2.addComponentOrReplace(resources.models.blackStone)
  const row4col2 = spawnEntity(8,0,16,0, 0, 0, 1, 1, 1)
  row4col2.addComponentOrReplace(resources.models.blackStone)
  const row5col2 = spawnEntity(8,0,20,0, 0, 0, 1, 1, 1)
  row5col2.addComponentOrReplace(resources.models.blackStone)
  const row6col2 = spawnEntity(8,0,24,0, 0, 0, 1, 1, 1)
  row6col2.addComponentOrReplace(resources.models.blackStone)
  const row7col2 = spawnEntity(8,0,28,0, 0, 0, 1, 1, 1)
  row7col2.addComponentOrReplace(resources.models.blackStone)
  const row8col2 = spawnEntity(8,0,32,0, 0, 0, 1, 1, 1)
  row8col2.addComponentOrReplace(resources.models.blackStone)
  const row9col2 = spawnEntity(8,0,36,0, 0, 0, 1, 1, 1)
  row9col2.addComponentOrReplace(resources.models.blackStone)
  const row10col2 = spawnEntity(8,0,40,0, 0, 0, 1, 1, 1)
  row10col2.addComponentOrReplace(resources.models.blackStone)
  const row11col2 = spawnEntity(8,0,44,0, 0, 0, 1, 1, 1)
  row11col2.addComponentOrReplace(resources.models.blackStone)
  const row12col2 = spawnEntity(8,0,48,0, 0, 0, 1, 1, 1)
  row12col2.addComponentOrReplace(resources.models.blackStone)

  // COL 3 //

  const row1col3 = spawnEntity(12,0,4,0, 0, 0, 1, 1, 1)
  row1col3.addComponentOrReplace(resources.models.blackStone)
  const row2col3 = spawnEntity(12,0,8,0, 0, 0, 1, 1, 1)
  row2col3.addComponentOrReplace(resources.models.blackStone)
  const row3col3 = spawnEntity(12,0,12,0, 0, 0, 1, 1, 1)
  row3col3.addComponentOrReplace(resources.models.blackStone)
  const row4col3 = spawnEntity(12,0,16,0, 0, 0, 1, 1, 1)
  row4col3.addComponentOrReplace(resources.models.blackStone)
  const row5col3 = spawnEntity(12,0,20,0, 0, 0, 1, 1, 1)
  row5col3.addComponentOrReplace(resources.models.blackStone)
  const row6col3 = spawnEntity(12,0,24,0, 0, 0, 1, 1, 1)
  row6col3.addComponentOrReplace(resources.models.blackStone)
  const row7col3 = spawnEntity(12,0,28,0, 0, 0, 1, 1, 1)
  row7col3.addComponentOrReplace(resources.models.blackStone)
  const row8col3 = spawnEntity(12,0,32,0, 0, 0, 1, 1, 1)
  row8col3.addComponentOrReplace(resources.models.blackStone)
  const row9col3 = spawnEntity(12,0,36,0, 0, 0, 1, 1, 1)
  row9col3.addComponentOrReplace(resources.models.blackStone)
  const row10col3 = spawnEntity(12,0,40,0, 0, 0, 1, 1, 1)
  row10col3.addComponentOrReplace(resources.models.blackStone)
  const row11col3 = spawnEntity(12,0,44,0, 0, 0, 1, 1, 1)
  row11col3.addComponentOrReplace(resources.models.blackStone)
  const row12col3 = spawnEntity(12,0,48,0, 0, 0, 1, 1, 1)
  row12col3.addComponentOrReplace(resources.models.blackStone)

  // COL 4 //

  const row1col4 = spawnEntity(16,0,4,0, 0, 0, 1, 1, 1)
  row1col4.addComponentOrReplace(resources.models.blackStone)
  const row2col4 = spawnEntity(16,0,8,0, 0, 0, 1, 1, 1)
  row2col4.addComponentOrReplace(resources.models.blackStone)
  const row3col4 = spawnEntity(16,0,12,0, 0, 0, 1, 1, 1)
  row3col4.addComponentOrReplace(resources.models.blackStone)
  const row4col4 = spawnEntity(16,0,16,0, 0, 0, 1, 1, 1)
  row4col4.addComponentOrReplace(resources.models.blackStone)
  const row5col4 = spawnEntity(16,0,20,0, 0, 0, 1, 1, 1)
  row5col4.addComponentOrReplace(resources.models.blackStone)
  const row6col4 = spawnEntity(16,0,24,0, 0, 0, 1, 1, 1)
  row6col4.addComponentOrReplace(resources.models.blackStone)
  const row7col4 = spawnEntity(16,0,28,0, 0, 0, 1, 1, 1)
  row7col4.addComponentOrReplace(resources.models.blackStone)
  const row8col4 = spawnEntity(16,0,32,0, 0, 0, 1, 1, 1)
  row8col4.addComponentOrReplace(resources.models.blackStone)
  const row9col4 = spawnEntity(16,0,36,0, 0, 0, 1, 1, 1)
  row9col4.addComponentOrReplace(resources.models.blackStone)
  const row10col4 = spawnEntity(16,0,40,0, 0, 0, 1, 1, 1)
  row10col4.addComponentOrReplace(resources.models.blackStone)
  const row11col4 = spawnEntity(16,0,44,0, 0, 0, 1, 1, 1)
  row11col4.addComponentOrReplace(resources.models.blackStone)
  const row12col4 = spawnEntity(16,0,48,0, 0, 0, 1, 1, 1)
  row12col4.addComponentOrReplace(resources.models.blackStone) 

  // COL 5 //

  const row1col5 = spawnEntity(20,0,4,0, 0, 0, 1, 1, 1)
  row1col5.addComponentOrReplace(resources.models.blackStone)
  const row2col5 = spawnEntity(20,0,8,0, 0, 0, 1, 1, 1)
  row2col5.addComponentOrReplace(resources.models.blackStone)
  const row3col5 = spawnEntity(20,0,12,0, 0, 0, 1, 1, 1)
  row3col5.addComponentOrReplace(resources.models.blackStone)
  const row4col5 = spawnEntity(20,0,16,0, 0, 0, 1, 1, 1)
  row4col5.addComponentOrReplace(resources.models.blackStone)
  const row5col5 = spawnEntity(20,0,20,0, 0, 0, 1, 1, 1)
  row5col5.addComponentOrReplace(resources.models.blackStone)
  const row6col5 = spawnEntity(20,0,24,0, 0, 0, 1, 1, 1)
  row6col5.addComponentOrReplace(resources.models.blackStone)
  const row7col5 = spawnEntity(20,0,28,0, 0, 0, 1, 1, 1)
  row7col5.addComponentOrReplace(resources.models.blackStone)
  const row8col5 = spawnEntity(20,0,32,0, 0, 0, 1, 1, 1)
  row8col5.addComponentOrReplace(resources.models.blackStone)
  const row9col5 = spawnEntity(20,0,36,0, 0, 0, 1, 1, 1)
  row9col5.addComponentOrReplace(resources.models.blackStone)
  const row10col5 = spawnEntity(20,0,40,0, 0, 0, 1, 1, 1)
  row10col5.addComponentOrReplace(resources.models.blackStone)
  const row11col5 = spawnEntity(20,0,44,0, 0, 0, 1, 1, 1)
  row11col5.addComponentOrReplace(resources.models.blackStone)
  const row12col5 = spawnEntity(20,0,48,0, 0, 0, 1, 1, 1)
  row12col5.addComponentOrReplace(resources.models.blackStone)  

  // COL 6 //

  const row1col6 = spawnEntity(24,0,4,0, 0, 0, 1, 1, 1)
  row1col6.addComponentOrReplace(resources.models.blackStone)
  const row2col6 = spawnEntity(24,0,8,0, 0, 0, 1, 1, 1)
  row2col6.addComponentOrReplace(resources.models.blackStone)
  const row3col6 = spawnEntity(24,0,12,0, 0, 0, 1, 1, 1)
  row3col6.addComponentOrReplace(resources.models.blackStone)
  const row4col6 = spawnEntity(24,0,16,0, 0, 0, 1, 1, 1)
  row4col6.addComponentOrReplace(resources.models.blackStone)
  const row5col6 = spawnEntity(24,0,20,0, 0, 0, 1, 1, 1)
  row5col6.addComponentOrReplace(resources.models.blackStone)
  const row6col6 = spawnEntity(24,0,24,0, 0, 0, 1, 1, 1)
  row6col6.addComponentOrReplace(resources.models.blackStone)
  const row7col6 = spawnEntity(24,0,28,0, 0, 0, 1, 1, 1)
  row7col6.addComponentOrReplace(resources.models.blackStone)
  const row8col6 = spawnEntity(24,0,32,0, 0, 0, 1, 1, 1)
  row8col6.addComponentOrReplace(resources.models.blackStone)
  const row9col6 = spawnEntity(24,0,36,0, 0, 0, 1, 1, 1)
  row9col6.addComponentOrReplace(resources.models.blackStone)
  const row10col6 = spawnEntity(24,0,40,0, 0, 0, 1, 1, 1)
  row10col6.addComponentOrReplace(resources.models.blackStone)
  const row11col6 = spawnEntity(24,0,44,0, 0, 0, 1, 1, 1)
  row11col6.addComponentOrReplace(resources.models.blackStone)
  const row12col6 = spawnEntity(24,0,48,0, 0, 0, 1, 1, 1)
  row12col6.addComponentOrReplace(resources.models.blackStone) 

  // COL 7 //

  const row1col7 = spawnEntity(28,0,4,0, 0, 0, 1, 1, 1)
  row1col7.addComponentOrReplace(resources.models.blackStone)
  const row2col7 = spawnEntity(28,0,8,0, 0, 0, 1, 1, 1)
  row2col7.addComponentOrReplace(resources.models.blackStone)
  const row3col7 = spawnEntity(28,0,12,0, 0, 0, 1, 1, 1)
  row3col7.addComponentOrReplace(resources.models.blackStone)
  const row4col7 = spawnEntity(28,0,16,0, 0, 0, 1, 1, 1)
  row4col7.addComponentOrReplace(resources.models.blackStone)
  const row5col7 = spawnEntity(28,0,20,0, 0, 0, 1, 1, 1)
  row5col7.addComponentOrReplace(resources.models.blackStone)
  const row6col7 = spawnEntity(28,0,24,0, 0, 0, 1, 1, 1)
  row6col7.addComponentOrReplace(resources.models.blackStone)
  const row7col7 = spawnEntity(28,0,28,0, 0, 0, 1, 1, 1)
  row7col7.addComponentOrReplace(resources.models.blackStone)
  const row8col7 = spawnEntity(28,0,32,0, 0, 0, 1, 1, 1)
  row8col7.addComponentOrReplace(resources.models.blackStone)
  const row9col7 = spawnEntity(28,0,36,0, 0, 0, 1, 1, 1)
  row9col7.addComponentOrReplace(resources.models.blackStone)
  const row10col7 = spawnEntity(28,.4,40,0, 0, 0, 1, 1, 1)
  row10col7.addComponentOrReplace(resources.models.blackStone)
  const row11col7 = spawnEntity(28,0,44,0, 0, 0, 1, 1, 1)
  row11col7.addComponentOrReplace(resources.models.blackStone)
  const row12col7 = spawnEntity(28,0,48,0, 0, 0, 1, 1, 1)
  row12col7.addComponentOrReplace(resources.models.blackStone) 

  // COL 8 //

  const row1col8 = spawnEntity(32,0,4,0, 0, 0, 1, 1, 1)
  row1col8.addComponentOrReplace(resources.models.blackStone)
  const row2col8 = spawnEntity(32,0,8,0, 0, 0, 1, 1, 1)
  row2col8.addComponentOrReplace(resources.models.blackStone)
  const row3col8 = spawnEntity(32,0,12,0, 0, 0, 1, 1, 1)
  row3col8.addComponentOrReplace(resources.models.blackStone)
  const row4col8 = spawnEntity(32,0,16,0, 0, 0, 1, 1, 1)
  row4col8.addComponentOrReplace(resources.models.blackStone)
  const row5col8 = spawnEntity(32,0,20,0, 0, 0, 1, 1, 1)
  row5col8.addComponentOrReplace(resources.models.blackStone)
  const row6col8 = spawnEntity(32,0,24,0, 0, 0, 1, 1, 1)
  row6col8.addComponentOrReplace(resources.models.blackStone)
  const row7col8 = spawnEntity(32,0,28,0, 0, 0, 1, 1, 1)
  row7col8.addComponentOrReplace(resources.models.blackStone)
  const row8col8 = spawnEntity(32,0,32,0, 0, 0, 1, 1, 1)
  row8col8.addComponentOrReplace(resources.models.blackStone)
  const row9col8 = spawnEntity(32,0,36,0, 0, 0, 1, 1, 1)
  row9col8.addComponentOrReplace(resources.models.blackStone)
  const row10col8 = spawnEntity(32,.4,40,0, 0, 0, 1, 1, 1)
  row10col8.addComponentOrReplace(resources.models.blackStone)
  const row11col8 = spawnEntity(32,0,44,0, 0, 0, 1, 1, 1)
  row11col8.addComponentOrReplace(resources.models.blackStone)
  const row12col8 = spawnEntity(32,0,48,0, 0, 0, 1, 1, 1)
  row12col8.addComponentOrReplace(resources.models.blackStone) 

  // COL 9 //

  const row1col9 = spawnEntity(36,0,4,0, 0, 0, 1, 1, 1)
  row1col9.addComponentOrReplace(resources.models.blackStone)
  const row2col9 = spawnEntity(36,0,8,0, 0, 0, 1, 1, 1)
  row2col9.addComponentOrReplace(resources.models.blackStone)
  const row3col9 = spawnEntity(36,0,12,0, 0, 0, 1, 1, 1)
  row3col9.addComponentOrReplace(resources.models.blackStone)
  const row4col9 = spawnEntity(36,0,16,0, 0, 0, 1, 1, 1)
  row4col9.addComponentOrReplace(resources.models.blackStone)
  const row5col9 = spawnEntity(36,0,20,0, 0, 0, 1, 1, 1)
  row5col9.addComponentOrReplace(resources.models.blackStone)
  const row6col9 = spawnEntity(36,0,24,0, 0, 0, 1, 1, 1)
  row6col9.addComponentOrReplace(resources.models.blackStone)
  const row7col9 = spawnEntity(36,0,28,0, 0, 0, 1, 1, 1)
  row7col9.addComponentOrReplace(resources.models.blackStone)
  const row8col9 = spawnEntity(36,0,32,0, 0, 0, 1, 1, 1)
  row8col9.addComponentOrReplace(resources.models.blackStone)
  const row9col9 = spawnEntity(36,0,36,0, 0, 0, 1, 1, 1)
  row9col9.addComponentOrReplace(resources.models.blackStone)
  const row10col9 = spawnEntity(36,0,40,0, 0, 0, 1, 1, 1)
  row10col9.addComponentOrReplace(resources.models.blackStone)
  const row11col9 = spawnEntity(36,0,44,0, 0, 0, 1, 1, 1)
  row11col9.addComponentOrReplace(resources.models.blackStone)
  const row12col9 = spawnEntity(36,0,48,0, 0, 0, 1, 1, 1)
  row12col9.addComponentOrReplace(resources.models.blackStone) 

  // COL 10 //

  const row1col10 = spawnEntity(40,0,4,0, 0, 0, 1, 1, 1)
  row1col10.addComponentOrReplace(resources.models.blackStone)
  const row2col10 = spawnEntity(40,0,8,0, 0, 0, 1, 1, 1)
  row2col10.addComponentOrReplace(resources.models.blackStone)
  const row3col10 = spawnEntity(40,0,12,0, 0, 0, 1, 1, 1)
  row3col10.addComponentOrReplace(resources.models.blackStone)
  const row4col10 = spawnEntity(40,0,16,0, 0, 0, 1, 1, 1)
  row4col10.addComponentOrReplace(resources.models.blackStone)
  const row5col10 = spawnEntity(40,0,20,0, 0, 0, 1, 1, 1)
  row5col10.addComponentOrReplace(resources.models.blackStone)
  const row6col10 = spawnEntity(40,0,24,0, 0, 0, 1, 1, 1)
  row6col10.addComponentOrReplace(resources.models.blackStone)
  const row7col10 = spawnEntity(40,0,28,0, 0, 0, 1, 1, 1)
  row7col10.addComponentOrReplace(resources.models.blackStone)
  const row8col10 = spawnEntity(40,0,32,0, 0, 0, 1, 1, 1)
  row8col10.addComponentOrReplace(resources.models.blackStone)
  const row9col10 = spawnEntity(40,0,36,0, 0, 0, 1, 1, 1)
  row9col10.addComponentOrReplace(resources.models.blackStone)
  const row10col10 = spawnEntity(40,0,40,0, 0, 0, 1, 1, 1)
  row10col10.addComponentOrReplace(resources.models.blackStone)
  const row11col10 = spawnEntity(40,0,44,0, 0, 0, 1, 1, 1)
  row11col10.addComponentOrReplace(resources.models.blackStone)
  const row12col10 = spawnEntity(40,0,48,0, 0, 0, 1, 1, 1)
  row12col10.addComponentOrReplace(resources.models.blackStone) 

  // COL 11

  const row1col11 = spawnEntity(44,0,4,0, 0, 0, 1, 1, 1)
  row1col11.addComponentOrReplace(resources.models.blackStone)
  const row2col11 = spawnEntity(44,0,8,0, 0, 0, 1, 1, 1)
  row2col11.addComponentOrReplace(resources.models.blackStone)
  const row3col11 = spawnEntity(44,0,12,0, 0, 0, 1, 1, 1)
  row3col11.addComponentOrReplace(resources.models.blackStone)
  const row4col11 = spawnEntity(44,0,16,0, 0, 0, 1, 1, 1)
  row4col11.addComponentOrReplace(resources.models.blackStone)
  const row5col11 = spawnEntity(44,0,20,0, 0, 0, 1, 1, 1)
  row5col11.addComponentOrReplace(resources.models.blackStone)
  const row6col11 = spawnEntity(44,0,24,0, 0, 0, 1, 1, 1)
  row6col11.addComponentOrReplace(resources.models.blackStone)
  const row7col11 = spawnEntity(44,0,28,0, 0, 0, 1, 1, 1)
  row7col11.addComponentOrReplace(resources.models.blackStone)
  const row8col11 = spawnEntity(44,0,32,0, 0, 0, 1, 1, 1)
  row8col11.addComponentOrReplace(resources.models.blackStone)
  const row9col11 = spawnEntity(44,0,36,0, 0, 0, 1, 1, 1)
  row9col11.addComponentOrReplace(resources.models.blackStone)
  const row10col11 = spawnEntity(44,0,40,0, 0, 0, 1, 1, 1)
  row10col11.addComponentOrReplace(resources.models.blackStone)
  const row11col11 = spawnEntity(44,0,44,0, 0, 0, 1, 1, 1)
  row11col11.addComponentOrReplace(resources.models.blackStone)
  const row12col11 = spawnEntity(44,0,48,0, 0, 0, 1, 1, 1)
  row12col11.addComponentOrReplace(resources.models.blackStone) 

  // COL 12

  const row1col12 = spawnEntity(48,0,4,0, 0, 0, 1, 1, 1)
  row1col12.addComponentOrReplace(resources.models.blackStone)
  const row2col12 = spawnEntity(48,0,8,0, 0, 0, 1, 1, 1)
  row2col12.addComponentOrReplace(resources.models.blackStone)
  const row3col12 = spawnEntity(48,0,12,0, 0, 0, 1, 1, 1)
  row3col12.addComponentOrReplace(resources.models.blackStone)
  const row4col12 = spawnEntity(48,0,16,0, 0, 0, 1, 1, 1)
  row4col12.addComponentOrReplace(resources.models.blackStone)
  const row5col12 = spawnEntity(48,0,20,0, 0, 0, 1, 1, 1)
  row5col12.addComponentOrReplace(resources.models.blackStone)
  const row6col12 = spawnEntity(48,0,24,0, 0, 0, 1, 1, 1)
  row6col12.addComponentOrReplace(resources.models.blackStone)
  const row7col12 = spawnEntity(48,0,28,0, 0, 0, 1, 1, 1)
  row7col12.addComponentOrReplace(resources.models.blackStone)
  const row8col12 = spawnEntity(48,0,32,0, 0, 0, 1, 1, 1)
  row8col12.addComponentOrReplace(resources.models.blackStone)
  const row9col12 = spawnEntity(48,0,36,0, 0, 0, 1, 1, 1)
  row9col12.addComponentOrReplace(resources.models.blackStone)
  const row10col12 = spawnEntity(48,0,40,0, 0, 0, 1, 1, 1)
  row10col12.addComponentOrReplace(resources.models.blackStone)
  const row11col12 = spawnEntity(48,0,44,0, 0, 0, 1, 1, 1)
  row11col12.addComponentOrReplace(resources.models.blackStone)
  const row12col12 = spawnEntity(48,0,48,0, 0, 0, 1, 1, 1)
  row12col12.addComponentOrReplace(resources.models.blackStone) 

// const archWay_02 = new Entity()
// const gltfShape_26 = new GLTFShape('models/ArchWay_02/ArchWay_02.glb')
// archWay_02.addComponentOrReplace(gltfShape_26)
// const transform_30 = new Transform({
//   position: new Vector3(20, 0, 23),
//   rotation: new Quaternion(0, 0, 0, 1),
//   scale: new Vector3(1, 1, 1)
// })
// archWay_02.addComponentOrReplace(transform_30)
// engine.addEntity(archWay_02)

  //const hud: BuilderHUD = new BuilderHUD();
  //hud.attachToEntity(outsidestairs1);
}
