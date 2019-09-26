export class BaseScene extends Entity {

     constructor() {
        super();
        engine.addEntity(this)
        const tower = new Entity()
        tower.setParent(this)
        //const gltfShape = new GLTFShape('models/skeletontower15.glb')
        const gltfShape = new GLTFShape('models/skeletontower16.glb')
        tower.addComponentOrReplace(gltfShape)
        const transform_2 = new Transform({
          position: new Vector3(24, 1.6, 12),
          rotation: new Quaternion(0, 0, 0, 1),
          scale: new Vector3(1, 1, 1)
        })
        tower.addComponentOrReplace(transform_2)
        engine.addEntity(tower)
     }
}