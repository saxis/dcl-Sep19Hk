import { spawnEntity } from '../modules/SpawnerFunctions'
import resources from '../resources';

export function CreateOutside(): void {
  const tree_Dead_01 = new Entity();
  const gltfShape_2 = new GLTFShape("models/Tree_Dead_01.glb");
  tree_Dead_01.addComponentOrReplace(gltfShape_2);
  const transform_3 = new Transform({
    position: new Vector3(5.5, 0, 12.51),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  });
  tree_Dead_01.addComponentOrReplace(transform_3);
  engine.addEntity(tree_Dead_01);

  const tree_Dead_01a = new Entity();
  tree_Dead_01a.addComponentOrReplace(gltfShape_2);
  const transform_3a = new Transform({
    position: new Vector3(5.5, 0, 25.51),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  });
  tree_Dead_01a.addComponentOrReplace(transform_3a);
  engine.addEntity(tree_Dead_01a);

  const tree_Dead_01b = new Entity();
  tree_Dead_01b.addComponentOrReplace(gltfShape_2);
  const transform_3b = new Transform({
    position: new Vector3(5.5, 0, 38.51),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  });
  tree_Dead_01b.addComponentOrReplace(transform_3b);
  engine.addEntity(tree_Dead_01b);

  
  const tree_Dead_02 = new Entity();
  const gltfShape_3 = new GLTFShape("models/Tree_Dead_02.glb");
  tree_Dead_02.addComponentOrReplace(gltfShape_3);
  const transform_4 = new Transform({
    position: new Vector3(40, 0, 38),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  });
  tree_Dead_02.addComponentOrReplace(transform_4);
  engine.addEntity(tree_Dead_02);

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

  const tree_Dead_04 = new Entity();
  const gltfShape_4 = new GLTFShape("models/Tree_Dead_04.glb");
  tree_Dead_04.addComponentOrReplace(gltfShape_4);
  const transform_5 = new Transform({
    position: new Vector3(37, 0, 23.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  });
  tree_Dead_04.addComponentOrReplace(transform_5);
  engine.addEntity(tree_Dead_04);

  

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

  //const resources.models.outsideStairs = new GLTFShape('models/Module_Stair_Stones_3M/Module_Stair_Stones_3M.glb')

  const outsidestairs1 = new Entity()
  const outsidestairs1Loc = new Transform({
    position: new Vector3(32, 0, 41),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1.4, 1, 1)
  })
  outsidestairs1.addComponent(resources.models.outsideStairs)
  outsidestairs1.addComponent(outsidestairs1Loc)
  engine.addEntity(outsidestairs1)

  const outsidestairs1a = new Entity()
  const outsidestairs1aLoc = new Transform({
    position: new Vector3(32, .4, 37),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1.4, 1, 1)
  })
  outsidestairs1a.addComponent(resources.models.outsideStairs)
  outsidestairs1a.addComponent(outsidestairs1aLoc)
  engine.addEntity(outsidestairs1a)

  const outsidestairs1b = new Entity()
  const outsidestairs1bLoc = new Transform({
    position: new Vector3(32, .8, 33),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1.4, 1, 1)
  })
  outsidestairs1b.addComponent(resources.models.outsideStairs)
  outsidestairs1b.addComponent(outsidestairs1bLoc)
  engine.addEntity(outsidestairs1b)

  const outsidestairs1c = new Entity()
  const outsidestairs1cLoc = new Transform({
    position: new Vector3(32, 1.2, 29),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1.4, 1, 1)
  })
  outsidestairs1c.addComponent(resources.models.outsideStairs)
  outsidestairs1c.addComponent(outsidestairs1cLoc)
  engine.addEntity(outsidestairs1c)

  const outsidestairs2 = new Entity()
  const outsidestairs2Loc = new Transform({
    position: new Vector3(28, 0, 41),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1.4, 1, 1)
  })
  outsidestairs2.addComponent(resources.models.outsideStairs)
  outsidestairs2.addComponent(outsidestairs2Loc)
  engine.addEntity(outsidestairs2)

  const outsidestairs2a = new Entity()
  const outsidestairs2aLoc = new Transform({
    position: new Vector3(28, .4, 37),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1.4, 1, 1)
  })
  outsidestairs2a.addComponent(resources.models.outsideStairs)
  outsidestairs2a.addComponent(outsidestairs2aLoc)
  engine.addEntity(outsidestairs2a)

  const outsidestairs2b = new Entity()
  const outsidestairs2bLoc = new Transform({
    position: new Vector3(28, .8, 33),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1.4, 1, 1)
  })
  outsidestairs2b.addComponent(resources.models.outsideStairs)
  outsidestairs2b.addComponent(outsidestairs2bLoc)
  engine.addEntity(outsidestairs2b)

  const outsidestairs2c = new Entity()
  const outsidestairs2cLoc = new Transform({
    position: new Vector3(28, 1.2, 29),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1.4, 1, 1)
  })
  outsidestairs2c.addComponent(resources.models.outsideStairs)
  outsidestairs2c.addComponent(outsidestairs2cLoc)
  engine.addEntity(outsidestairs2c)

  const outsidestairs3 = new Entity()
  const outsidestairs3Loc = new Transform({
    position: new Vector3(24, 0, 41),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1.4, 1, 1)
  })
  outsidestairs3.addComponent(resources.models.outsideStairs)
  outsidestairs3.addComponent(outsidestairs3Loc)
  engine.addEntity(outsidestairs3)

  const outsidestairs3a = new Entity()
  const outsidestairs3aLoc = new Transform({
    position: new Vector3(24, .4, 37),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1.4, 1, 1)
  })
  outsidestairs3a.addComponent(resources.models.outsideStairs)
  outsidestairs3a.addComponent(outsidestairs3aLoc)
  engine.addEntity(outsidestairs3a)

  const outsidestairs3b = new Entity()
  const outsidestairs3bLoc = new Transform({
    position: new Vector3(24, .8, 33),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1.4, 1, 1)
  })
  outsidestairs3b.addComponent(resources.models.outsideStairs)
  outsidestairs3b.addComponent(outsidestairs3bLoc)
  engine.addEntity(outsidestairs3b)

  const outsidestairs3c = new Entity()
  const outsidestairs3cLoc = new Transform({
    position: new Vector3(24, 1.2, 29),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1.4, 1, 1)
  })
  outsidestairs3c.addComponent(resources.models.outsideStairs)
  outsidestairs3c.addComponent(outsidestairs3cLoc)
  engine.addEntity(outsidestairs3c)


  const outsidestairs4 = new Entity()
  const outsidestairs4Loc = new Transform({
    position: new Vector3(20, 0, 41),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1.4, 1, 1)
  })
  outsidestairs4.addComponent(resources.models.outsideStairs)
  outsidestairs4.addComponent(outsidestairs4Loc)
  engine.addEntity(outsidestairs4)

  const outsidestairs4a = new Entity()
  const outsidestairs4aLoc = new Transform({
    position: new Vector3(20, .4, 37),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1.4, 1, 1)
  })
  outsidestairs4a.addComponent(resources.models.outsideStairs)
  outsidestairs4a.addComponent(outsidestairs4aLoc)
  engine.addEntity(outsidestairs4a)

  const outsidestairs4b = new Entity()
  const outsidestairs4bLoc = new Transform({
    position: new Vector3(20, .8, 33),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1.4, 1, 1)
  })
  outsidestairs4b.addComponent(resources.models.outsideStairs)
  outsidestairs4b.addComponent(outsidestairs4bLoc)
  engine.addEntity(outsidestairs4b)

  const outsidestairs4c = new Entity()
  const outsidestairs4cLoc = new Transform({
    position: new Vector3(20, 1.2, 29),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1.4, 1, 1)
  })
  outsidestairs4c.addComponent(resources.models.outsideStairs)
  outsidestairs4c.addComponent(outsidestairs4cLoc)
  engine.addEntity(outsidestairs4c)

  const outsidestairs5 = new Entity()
  const outsidestairs5Loc = new Transform({
    position: new Vector3(16, 0, 41),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1.4, 1, 1)
  })
  outsidestairs5.addComponent(resources.models.outsideStairs)
  outsidestairs5.addComponent(outsidestairs5Loc)
  engine.addEntity(outsidestairs5)

  const outsidestairs5a = new Entity()
  const outsidestairs5aLoc = new Transform({
    position: new Vector3(16, .4, 37),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1.4, 1, 1)
  })
  outsidestairs5a.addComponent(resources.models.outsideStairs)
  outsidestairs5a.addComponent(outsidestairs5aLoc)
  engine.addEntity(outsidestairs5a)

  const outsidestairs5b = new Entity()
  const outsidestairs5bLoc = new Transform({
    position: new Vector3(16, .8, 33),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1.4, 1, 1)
  })
  outsidestairs5b.addComponent(resources.models.outsideStairs)
  outsidestairs5b.addComponent(outsidestairs5bLoc)
  engine.addEntity(outsidestairs5b)

  const outsidestairs5c = new Entity()
  const outsidestairs5cLoc = new Transform({
    position: new Vector3(16, 1.2, 29),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1.4, 1, 1)
  })
  outsidestairs5c.addComponent(resources.models.outsideStairs)
  outsidestairs5c.addComponent(outsidestairs5cLoc)
  engine.addEntity(outsidestairs5c)

  const outsidestairs0 = new Entity()  
  const outsidestairs0Loc = new Transform({
    position: new Vector3(12, 0, 41),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1.3, 1, 1)
  })
  outsidestairs0.addComponent(resources.models.outsideStairs)
  outsidestairs0.addComponent(outsidestairs0Loc)
  engine.addEntity(outsidestairs0)

  const outsidestairs0a = new Entity()
  const outsidestairs0aLoc = new Transform({
    position: new Vector3(12, .4, 37),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1.3, 1, 1)
  })
  outsidestairs0a.addComponent(resources.models.outsideStairs)
  outsidestairs0a.addComponent(outsidestairs0aLoc)
  engine.addEntity(outsidestairs0a)

  const outsidestairs0b = new Entity()
  const outsidestairs0bLoc = new Transform({
    position: new Vector3(12, .8, 33),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1.3, 1, 1)
  })
  outsidestairs0b.addComponent(resources.models.outsideStairs)
  outsidestairs0b.addComponent(outsidestairs0bLoc)
  engine.addEntity(outsidestairs0b)

  const outsidestairs0c = new Entity()
  const outsidestairs0cLoc = new Transform({
    position: new Vector3(12, 1.2, 29),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1.3, 1, 1)
  })
  outsidestairs0c.addComponent(resources.models.outsideStairs)
  outsidestairs0c.addComponent(outsidestairs0cLoc)
  engine.addEntity(outsidestairs0c)

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
  const row2col3 = spawnEntity(12,1.59,8,0, 0, 0, 1, 1, 1)
  row2col3.addComponentOrReplace(resources.models.blackStone)
  const row3col3 = spawnEntity(12,1.59,12,0, 0, 0, 1, 1, 1)
  row3col3.addComponentOrReplace(resources.models.blackStone)
  const row4col3 = spawnEntity(12,1.6,16,0, 0, 0, 1, 1, 1)
  row4col3.addComponentOrReplace(resources.models.blackStone)
  const row5col3 = spawnEntity(12,1.6,20,0, 0, 0, 1, 1, 1)
  row5col3.addComponentOrReplace(resources.models.blackStone)
  const row6col3 = spawnEntity(12,1.6,24,0, 0, 0, 1, 1, 1)
  row6col3.addComponentOrReplace(resources.models.blackStone)
  const row7col3 = spawnEntity(12,1.6,28,0, 0, 0, 1, 1, 1)
  row7col3.addComponentOrReplace(resources.models.blackStone)
  const row8col3 = spawnEntity(12,1.2,32,0, 0, 0, 1, 1, 1)
  row8col3.addComponentOrReplace(resources.models.blackStone)
  const row9col3 = spawnEntity(12,.8,36,0, 0, 0, 1, 1, 1)
  row9col3.addComponentOrReplace(resources.models.blackStone)
  const row10col3 = spawnEntity(12,.4,40,0, 0, 0, 1, 1, 1)
  row10col3.addComponentOrReplace(resources.models.blackStone)
  const row11col3 = spawnEntity(12,0,44,0, 0, 0, 1, 1, 1)
  row11col3.addComponentOrReplace(resources.models.blackStone)
  const row12col3 = spawnEntity(12,0,48,0, 0, 0, 1, 1, 1)
  row12col3.addComponentOrReplace(resources.models.blackStone)

  // COL 4 //

  const row1col4 = spawnEntity(16,0,4,0, 0, 0, 1, 1, 1)
  row1col4.addComponentOrReplace(resources.models.blackStone)
  const row2col4 = spawnEntity(16,1.59,8,0, 0, 0, 1, 1, 1)
  row2col4.addComponentOrReplace(resources.models.blackStone)
  const row3col4 = spawnEntity(16,1.59,12,0, 0, 0, 1, 1, 1)
  row3col4.addComponentOrReplace(resources.models.blackStone)
  const row4col4 = spawnEntity(16,1.6,16,0, 0, 0, 1, 1, 1)
  row4col4.addComponentOrReplace(resources.models.blackStone)
  const row5col4 = spawnEntity(16,1.6,20,0, 0, 0, 1, 1, 1)
  row5col4.addComponentOrReplace(resources.models.blackStone)
  const row6col4 = spawnEntity(16,1.6,24,0, 0, 0, 1, 1, 1)
  row6col4.addComponentOrReplace(resources.models.blackStone)
  const row7col4 = spawnEntity(16,1.6,28,0, 0, 0, 1, 1, 1)
  row7col4.addComponentOrReplace(resources.models.blackStone)
  const row8col4 = spawnEntity(16,1.2,32,0, 0, 0, 1, 1, 1)
  row8col4.addComponentOrReplace(resources.models.blackStone)
  const row9col4 = spawnEntity(16,.8,36,0, 0, 0, 1, 1, 1)
  row9col4.addComponentOrReplace(resources.models.blackStone)
  const row10col4 = spawnEntity(16,.4,40,0, 0, 0, 1, 1, 1)
  row10col4.addComponentOrReplace(resources.models.blackStone)
  const row11col4 = spawnEntity(16,0,44,0, 0, 0, 1, 1, 1)
  row11col4.addComponentOrReplace(resources.models.blackStone)
  const row12col4 = spawnEntity(16,0,48,0, 0, 0, 1, 1, 1)
  row12col4.addComponentOrReplace(resources.models.blackStone) 

  // COL 5 //

  const row1col5 = spawnEntity(20,0,4,0, 0, 0, 1, 1, 1)
  row1col5.addComponentOrReplace(resources.models.blackStone)
  const row2col5 = spawnEntity(20,1.59,8,0, 0, 0, 1, 1, 1)
  row2col5.addComponentOrReplace(resources.models.blackStone)
  const row3col5 = spawnEntity(20,1.59,12,0, 0, 0, 1, 1, 1)
  row3col5.addComponentOrReplace(resources.models.blackStone)
  const row4col5 = spawnEntity(20,1.6,16,0, 0, 0, 1, 1, 1)
  row4col5.addComponentOrReplace(resources.models.blackStone)
  const row5col5 = spawnEntity(20,1.6,20,0, 0, 0, 1, 1, 1)
  row5col5.addComponentOrReplace(resources.models.blackStone)
  const row6col5 = spawnEntity(20,1.6,24,0, 0, 0, 1, 1, 1)
  row6col5.addComponentOrReplace(resources.models.blackStone)
  const row7col5 = spawnEntity(20,1.6,28,0, 0, 0, 1, 1, 1)
  row7col5.addComponentOrReplace(resources.models.blackStone)
  const row8col5 = spawnEntity(20,1.2,32,0, 0, 0, 1, 1, 1)
  row8col5.addComponentOrReplace(resources.models.blackStone)
  const row9col5 = spawnEntity(20,.8,36,0, 0, 0, 1, 1, 1)
  row9col5.addComponentOrReplace(resources.models.blackStone)
  const row10col5 = spawnEntity(20,.4,40,0, 0, 0, 1, 1, 1)
  row10col5.addComponentOrReplace(resources.models.blackStone)
  const row11col5 = spawnEntity(20,0,44,0, 0, 0, 1, 1, 1)
  row11col5.addComponentOrReplace(resources.models.blackStone)
  const row12col5 = spawnEntity(20,0,48,0, 0, 0, 1, 1, 1)
  row12col5.addComponentOrReplace(resources.models.blackStone)  

  // COL 6 //

  const row1col6 = spawnEntity(24,0,4,0, 0, 0, 1, 1, 1)
  row1col6.addComponentOrReplace(resources.models.blackStone)
  const row2col6 = spawnEntity(24,1.59,8,0, 0, 0, 1, 1, 1)
  row2col6.addComponentOrReplace(resources.models.blackStone)
  const row3col6 = spawnEntity(24,1.59,12,0, 0, 0, 1, 1, 1)
  row3col6.addComponentOrReplace(resources.models.blackStone)
  const row4col6 = spawnEntity(24,1.6,16,0, 0, 0, 1, 1, 1)
  row4col6.addComponentOrReplace(resources.models.blackStone)
  const row5col6 = spawnEntity(24,1.6,20,0, 0, 0, 1, 1, 1)
  row5col6.addComponentOrReplace(resources.models.blackStone)
  const row6col6 = spawnEntity(24,1.6,24,0, 0, 0, 1, 1, 1)
  row6col6.addComponentOrReplace(resources.models.blackStone)
  const row7col6 = spawnEntity(24,1.6,28,0, 0, 0, 1, 1, 1)
  row7col6.addComponentOrReplace(resources.models.blackStone)
  const row8col6 = spawnEntity(24,1.2,32,0, 0, 0, 1, 1, 1)
  row8col6.addComponentOrReplace(resources.models.blackStone)
  const row9col6 = spawnEntity(24,.8,36,0, 0, 0, 1, 1, 1)
  row9col6.addComponentOrReplace(resources.models.blackStone)
  const row10col6 = spawnEntity(24,.4,40,0, 0, 0, 1, 1, 1)
  row10col6.addComponentOrReplace(resources.models.blackStone)
  const row11col6 = spawnEntity(24,0,44,0, 0, 0, 1, 1, 1)
  row11col6.addComponentOrReplace(resources.models.blackStone)
  const row12col6 = spawnEntity(24,0,48,0, 0, 0, 1, 1, 1)
  row12col6.addComponentOrReplace(resources.models.blackStone) 

  // COL 7 //

  const row1col7 = spawnEntity(28,0,4,0, 0, 0, 1, 1, 1)
  row1col7.addComponentOrReplace(resources.models.blackStone)
  const row2col7 = spawnEntity(28,1.59,8,0, 0, 0, 1, 1, 1)
  row2col7.addComponentOrReplace(resources.models.blackStone)
  const row3col7 = spawnEntity(28,1.59,12,0, 0, 0, 1, 1, 1)
  row3col7.addComponentOrReplace(resources.models.blackStone)
  const row4col7 = spawnEntity(28,1.6,16,0, 0, 0, 1, 1, 1)
  row4col7.addComponentOrReplace(resources.models.blackStone)
  const row5col7 = spawnEntity(28,1.6,20,0, 0, 0, 1, 1, 1)
  row5col7.addComponentOrReplace(resources.models.blackStone)
  const row6col7 = spawnEntity(28,1.6,24,0, 0, 0, 1, 1, 1)
  row6col7.addComponentOrReplace(resources.models.blackStone)
  const row7col7 = spawnEntity(28,1.6,28,0, 0, 0, 1, 1, 1)
  row7col7.addComponentOrReplace(resources.models.blackStone)
  const row8col7 = spawnEntity(28,1.2,32,0, 0, 0, 1, 1, 1)
  row8col7.addComponentOrReplace(resources.models.blackStone)
  const row9col7 = spawnEntity(28,.8,36,0, 0, 0, 1, 1, 1)
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
  const row2col8 = spawnEntity(32,1.59,8,0, 0, 0, 1, 1, 1)
  row2col8.addComponentOrReplace(resources.models.blackStone)
  const row3col8 = spawnEntity(32,1.59,12,0, 0, 0, 1, 1, 1)
  row3col8.addComponentOrReplace(resources.models.blackStone)
  const row4col8 = spawnEntity(32,1.6,16,0, 0, 0, 1, 1, 1)
  row4col8.addComponentOrReplace(resources.models.blackStone)
  const row5col8 = spawnEntity(32,1.6,20,0, 0, 0, 1, 1, 1)
  row5col8.addComponentOrReplace(resources.models.blackStone)
  const row6col8 = spawnEntity(32,1.6,24,0, 0, 0, 1, 1, 1)
  row6col8.addComponentOrReplace(resources.models.blackStone)
  const row7col8 = spawnEntity(32,1.6,28,0, 0, 0, 1, 1, 1)
  row7col8.addComponentOrReplace(resources.models.blackStone)
  const row8col8 = spawnEntity(32,1.2,32,0, 0, 0, 1, 1, 1)
  row8col8.addComponentOrReplace(resources.models.blackStone)
  const row9col8 = spawnEntity(32,.8,36,0, 0, 0, 1, 1, 1)
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


  

  const stairFence_02 = new Entity()
  stairFence_02.addComponentOrReplace(resources.models.stairFence)
  const stairFenceLoc2 = new Transform({
    position: new Vector3(8, 0, 41),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(2, 1, 1)
  })
  stairFence_02.addComponentOrReplace(stairFenceLoc2)
  engine.addEntity(stairFence_02)


  const wall_Stone_Large1 = new Entity()
  wall_Stone_Large1.addComponentOrReplace(resources.models.wallStoneLarge)
  const wallStoneLargeLoc1 = new Transform({
    position: new Vector3(8, 0, 37),
    rotation: Quaternion.Euler(0,90,0),
    scale: new Vector3(.6, .85, 1)
  })
  wall_Stone_Large1.addComponentOrReplace(wallStoneLargeLoc1)
  engine.addEntity(wall_Stone_Large1)

  const stairFence_01a = new Entity()
  stairFence_01a.addComponentOrReplace(resources.models.stairFence)
  const stairFenceLoc1a = new Transform({
    position: new Vector3(8, 0, 37),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 2, 1)
  })
  stairFence_01a.addComponentOrReplace(stairFenceLoc1a)
  engine.addEntity(stairFence_01a)

  const wall_Stone_Large2 = new Entity()
  wall_Stone_Large2.addComponentOrReplace(resources.models.wallStoneLarge)
  const wallStoneLargeLoc2 = new Transform({
    position: new Vector3(8, 0, 32.9),
    rotation: Quaternion.Euler(0,90,0),
    scale: new Vector3(.65, 1.7, 1)
  })
  wall_Stone_Large2.addComponentOrReplace(wallStoneLargeLoc2)
  engine.addEntity(wall_Stone_Large2)

  const stairFence_02a = new Entity()
  stairFence_02a.addComponentOrReplace(resources.models.stairFence)
  const stairFenceLoc2a = new Transform({
    position: new Vector3(8, 0, 33),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 3.8, 1)
  })
  stairFence_02a.addComponentOrReplace(stairFenceLoc2a)
  engine.addEntity(stairFence_02a)

  const wall_Stone_Large3 = new Entity()
  wall_Stone_Large3.addComponentOrReplace(resources.models.wallStoneLarge)
  const wallStoneLargeLoc3 = new Transform({
    position: new Vector3(8, 0, 28.5),
    rotation: Quaternion.Euler(0,90,0),
    scale: new Vector3(.7, 3.2, 1)
  })
  wall_Stone_Large3.addComponentOrReplace(wallStoneLargeLoc3)
  engine.addEntity(wall_Stone_Large3)

  const stairFence_03a = new Entity()
  stairFence_03a.addComponentOrReplace(resources.models.stairFence)
  const stairFenceLoc3a = new Transform({
    position: new Vector3(8, 0, 29),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 5.8, 1)
  })
  stairFence_03a.addComponentOrReplace(stairFenceLoc3a)
  engine.addEntity(stairFence_03a)

  const wall_Stone_Large4 = new Entity()
  wall_Stone_Large4.addComponentOrReplace(resources.models.wallStoneLarge)
  const wallStoneLarge4Loc = new Transform({
    position: new Vector3(8, 0, 23),
    rotation: Quaternion.Euler(0,90,0),
    scale: new Vector3(1, 4.7, 1)
  })
  wall_Stone_Large4.addComponentOrReplace(wallStoneLarge4Loc)
  engine.addEntity(wall_Stone_Large4)

  const wall_Stone_Large5 = new Entity()
  wall_Stone_Large5.addComponentOrReplace(resources.models.wallStoneLarge)
  const wallStoneLarge5Loc = new Transform({
    position: new Vector3(8, 0, 19),
    rotation: Quaternion.Euler(0,90,0),
    scale: new Vector3(1, 4.7, 1)
  })
  wall_Stone_Large5.addComponentOrReplace(wallStoneLarge5Loc)
  engine.addEntity(wall_Stone_Large5)

  const wall_Stone_Large6 = new Entity()
  wall_Stone_Large6.addComponentOrReplace(resources.models.wallStoneLarge)
  const wallStoneLarge6Loc = new Transform({
    position: new Vector3(8, 0, 14),
    rotation: Quaternion.Euler(0,90,0),
    scale: new Vector3(1, 4.7, 1)
  })
  wall_Stone_Large6.addComponentOrReplace(wallStoneLarge6Loc)
  engine.addEntity(wall_Stone_Large6)

  const wall_Stone_Large7 = new Entity()
  wall_Stone_Large7.addComponentOrReplace(resources.models.wallStoneLarge)
  const wallStoneLarge7Loc = new Transform({
    position: new Vector3(8, 0, 9),
    rotation: Quaternion.Euler(0,90,0),
    scale: new Vector3(1, 4.7, 1)
  })
  wall_Stone_Large7.addComponentOrReplace(wallStoneLarge7Loc)
  engine.addEntity(wall_Stone_Large7)

  const wall_Stone_Large8 = new Entity()
  wall_Stone_Large8.addComponentOrReplace(resources.models.wallStoneLarge)
  const wallStoneLarge8Loc = new Transform({
    position: new Vector3(8, 0, 4),
    rotation: Quaternion.Euler(0,90,0),
    scale: new Vector3(1, 4.7, 1)
  })
  wall_Stone_Large8.addComponentOrReplace(wallStoneLarge8Loc)
  engine.addEntity(wall_Stone_Large8)
  
  

const stairFence_l02 = new Entity()
stairFence_l02.addComponentOrReplace(resources.models.stairFence)
const stairFenceLocl2 = new Transform({
  position: new Vector3(32, 0, 41),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2, 1, 1)
})
stairFence_l02.addComponentOrReplace(stairFenceLocl2)
engine.addEntity(stairFence_l02)


const wall_Stone_Largel1 = new Entity()
wall_Stone_Largel1.addComponentOrReplace(resources.models.wallStoneLarge)
const wallStoneLargeLocl1 = new Transform({
  position: new Vector3(32, 0, 37),
  rotation: Quaternion.Euler(0,90,0),
  scale: new Vector3(.6, .85, 1)
})
wall_Stone_Largel1.addComponentOrReplace(wallStoneLargeLocl1)
engine.addEntity(wall_Stone_Largel1)

const stairFence_l01a = new Entity()
stairFence_l01a.addComponentOrReplace(resources.models.stairFence)
const stairFenceLocl1a = new Transform({
  position: new Vector3(32, 0, 37),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 2, 1)
})
stairFence_l01a.addComponentOrReplace(stairFenceLocl1a)
engine.addEntity(stairFence_l01a)

const wall_Stone_Largel2 = new Entity()
wall_Stone_Largel2.addComponentOrReplace(resources.models.wallStoneLarge)
const wallStoneLargeLocl2 = new Transform({
  position: new Vector3(32, 0, 32.9),
  rotation: Quaternion.Euler(0,90,0),
  scale: new Vector3(.65, 1.7, 1)
})
wall_Stone_Largel2.addComponentOrReplace(wallStoneLargeLocl2)
engine.addEntity(wall_Stone_Largel2)

const stairFence_l02a = new Entity()
stairFence_l02a.addComponentOrReplace(resources.models.stairFence)
const stairFenceLocl2a = new Transform({
  position: new Vector3(32, 0, 33),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 3.8, 1)
})
stairFence_l02a.addComponentOrReplace(stairFenceLocl2a)
engine.addEntity(stairFence_l02a)

const wall_Stone_Largel3 = new Entity()
wall_Stone_Largel3.addComponentOrReplace(resources.models.wallStoneLarge)
const wallStoneLargeLocl3 = new Transform({
  position: new Vector3(32, 0, 28.5),
  rotation: Quaternion.Euler(0,90,0),
  scale: new Vector3(.7, 3.2, 1)
})
wall_Stone_Largel3.addComponentOrReplace(wallStoneLargeLocl3)
engine.addEntity(wall_Stone_Largel3)

const stairFence_l03a = new Entity()
stairFence_l03a.addComponentOrReplace(resources.models.stairFence)
const stairFenceLocl3a = new Transform({
  position: new Vector3(32, 0, 29),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 5.8, 1)
})
stairFence_l03a.addComponentOrReplace(stairFenceLocl3a)
engine.addEntity(stairFence_l03a)

const wall_Stone_Largel4 = new Entity()
wall_Stone_Largel4.addComponentOrReplace(resources.models.wallStoneLarge)
const wallStoneLargel4Loc = new Transform({
  position: new Vector3(32, 0, 23),
  rotation: Quaternion.Euler(0,90,0),
  scale: new Vector3(1, 4.7, 1)
})
wall_Stone_Largel4.addComponentOrReplace(wallStoneLargel4Loc)
engine.addEntity(wall_Stone_Largel4)

const wall_Stone_Largel5 = new Entity()
wall_Stone_Largel5.addComponentOrReplace(resources.models.wallStoneLarge)
const wallStoneLargel5Loc = new Transform({
  position: new Vector3(32, 0, 19),
  rotation: Quaternion.Euler(0,90,0),
  scale: new Vector3(1, 4.7, 1)
})
wall_Stone_Largel5.addComponentOrReplace(wallStoneLargel5Loc)
engine.addEntity(wall_Stone_Largel5)

const wall_Stone_Largel6 = new Entity()
wall_Stone_Largel6.addComponentOrReplace(resources.models.wallStoneLarge)
const wallStoneLargel6Loc = new Transform({
  position: new Vector3(32, 0, 14),
  rotation: Quaternion.Euler(0,90,0),
  scale: new Vector3(1, 4.7, 1)
})
wall_Stone_Largel6.addComponentOrReplace(wallStoneLargel6Loc)
engine.addEntity(wall_Stone_Largel6)

const wall_Stone_Largel7 = new Entity()
wall_Stone_Largel7.addComponentOrReplace(resources.models.wallStoneLarge)
const wallStoneLargel7Loc = new Transform({
  position: new Vector3(32, 0, 9),
  rotation: Quaternion.Euler(0,90,0),
  scale: new Vector3(1, 4.7, 1)
})
wall_Stone_Largel7.addComponentOrReplace(wallStoneLargel7Loc)
engine.addEntity(wall_Stone_Largel7)

const wall_Stone_Largel8 = new Entity()
wall_Stone_Largel8.addComponentOrReplace(resources.models.wallStoneLarge)
const wallStoneLargel8Loc = new Transform({
  position: new Vector3(32, 0, 4),
  rotation: Quaternion.Euler(0,90,0),
  scale: new Vector3(1, 4.7, 1)
})
wall_Stone_Largel8.addComponentOrReplace(wallStoneLargel8Loc)
engine.addEntity(wall_Stone_Largel8) 

const wall_Stone_LargelBack1 = new Entity()
wall_Stone_LargelBack1.addComponentOrReplace(resources.models.wallStoneLarge)
const wallStoneLargelBack1Loc = new Transform({
  position: new Vector3(32, 0, 3.9),
  rotation: Quaternion.Euler(0,0,0),
  scale: new Vector3(1, 4.7, 1.6)
})
wall_Stone_LargelBack1.addComponentOrReplace(wallStoneLargelBack1Loc)
engine.addEntity(wall_Stone_LargelBack1) 

const wall_Stone_LargelBack2 = new Entity()
wall_Stone_LargelBack2.addComponentOrReplace(resources.models.wallStoneLarge)
const wallStoneLargelBack2Loc = new Transform({
  position: new Vector3(27, 0, 3.9),
  rotation: Quaternion.Euler(0,0,0),
  scale: new Vector3(1, 4.7, 1)
})
wall_Stone_LargelBack2.addComponentOrReplace(wallStoneLargelBack2Loc)
engine.addEntity(wall_Stone_LargelBack2) 

const wall_Stone_LargelBack3 = new Entity()
wall_Stone_LargelBack3.addComponentOrReplace(resources.models.wallStoneLarge)
const wallStoneLargelBack3Loc = new Transform({
  position: new Vector3(22, 0, 3.9),
  rotation: Quaternion.Euler(0,0,0),
  scale: new Vector3(1, 4.7, 1)
})
wall_Stone_LargelBack3.addComponentOrReplace(wallStoneLargelBack3Loc)
engine.addEntity(wall_Stone_LargelBack3) 

const wall_Stone_LargelBack4 = new Entity()
wall_Stone_LargelBack4.addComponentOrReplace(resources.models.wallStoneLarge)
const wallStoneLargelBack4Loc = new Transform({
  position: new Vector3(17, 0, 3.9),
  rotation: Quaternion.Euler(0,0,0),
  scale: new Vector3(1, 4.7, 1)
})
wall_Stone_LargelBack4.addComponentOrReplace(wallStoneLargelBack4Loc)
engine.addEntity(wall_Stone_LargelBack4) 

const wall_Stone_LargelBack5 = new Entity()
wall_Stone_LargelBack5.addComponentOrReplace(resources.models.wallStoneLarge)
const wallStoneLargelBack5Loc = new Transform({
  position: new Vector3(12.9, 0, 3.9),
  rotation: Quaternion.Euler(0,0,0),
  scale: new Vector3(1, 4.7, 1.6)
})
wall_Stone_LargelBack5.addComponentOrReplace(wallStoneLargelBack5Loc)
engine.addEntity(wall_Stone_LargelBack5) 

}
