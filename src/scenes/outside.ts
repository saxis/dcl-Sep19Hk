export function createOutside(): void {
  const blueTree = new Entity();
  //blueTree.setParent(scene);
  const gltfShape_28 = new GLTFShape(
    "models/Tree_Forest_Blue_02/Tree_Forest_Blue_02.glb"
  );
  blueTree.addComponentOrReplace(gltfShape_28);
  const transform_32 = new Transform({
    position: new Vector3(32.5, 0, 21.51),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  });
  blueTree.addComponentOrReplace(transform_32);
  engine.addEntity(blueTree);

  const pinkTree = new Entity();
  //pinkTree.setParent(scene);
  const gltfShape_31 = new GLTFShape(
    "models/Tree_Forest_Pink_04/Tree_Forest_Pink_04.glb"
  );
  pinkTree.addComponentOrReplace(gltfShape_31);
  const transform_35 = new Transform({
    position: new Vector3(34.5, 0, 27),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  });
  pinkTree.addComponentOrReplace(transform_35);
  engine.addEntity(pinkTree);

  const tree_Leafs_02 = new Entity();
  //tree_Leafs_02.setParent(scene);
  const gltfShape_4 = new GLTFShape("models/Tree_Leafs_02/Tree_Leafs_02.glb");
  tree_Leafs_02.addComponentOrReplace(gltfShape_4);
  const transform_8 = new Transform({
    position: new Vector3(37, 0, 25),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  });
  tree_Leafs_02.addComponentOrReplace(transform_8);
  engine.addEntity(tree_Leafs_02);

  const tree_Leafs_01 = new Entity();
  //tree_Leafs_01.setParent(scene);
  const gltfShape_29 = new GLTFShape("models/Tree_Leafs_01/Tree_Leafs_01.glb");
  tree_Leafs_01.addComponentOrReplace(gltfShape_29);
  const transform_33 = new Transform({
    position: new Vector3(39, 0, 23.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  });
  tree_Leafs_01.addComponentOrReplace(transform_33);
  engine.addEntity(tree_Leafs_01);

  const tree_Forest_Green_01 = new Entity();
  //tree_Forest_Green_01.setParent(scene);
  const gltfShape_30 = new GLTFShape(
    "models/Tree_Forest_Green_01/Tree_Forest_Green_01.glb"
  );
  tree_Forest_Green_01.addComponentOrReplace(gltfShape_30);
  const transform_34 = new Transform({
    position: new Vector3(30, 0, 20),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  });
  tree_Forest_Green_01.addComponentOrReplace(transform_34);
  engine.addEntity(tree_Forest_Green_01);
}
