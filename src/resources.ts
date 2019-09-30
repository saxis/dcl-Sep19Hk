export default {
    sounds: {
        moveObject1: new AudioClip("sounds/move_object1.mp3"),
        moveObject2: new AudioClip("sounds/move_object2.mp3"),
        goblinHit: new AudioClip("sounds/goblin_hit.mp3"),
        punch: new AudioClip("sounds/punch.mp3"),
        playerHit: new AudioClip("sounds/player_hit.mp"),
        doorIsLocked: new AudioClip("sounds/door_lock.mp3"),
        grobb: new AudioClip("sounds/GROBB.mp3"),
        lava: new AudioClip("sounds/LAVASTOR.mp3"),
        fear: new AudioClip("sounds/FEARPLAN.mp3"),
        unlocksorceress: new AudioClip("sounds/unlock_sorceress.mp3"),
        peasantunlock: new AudioClip("sounds/peasantunlock.mp3"),
        fighterhit: new AudioClip("sounds/fighterhit.mp3"),
        missioncomplete: new AudioClip("sounds/missioncomplete.mp3"),
        executioner: new AudioClip("sounds/executioner.mp3"),
        button: new AudioClip("sounds/button.mp3")
    },
    models: {
        spicebag1: new GLTFShape("models/floor2/Spicesbag_01/Spicesbag_01.glb"),
        spicebag2: new GLTFShape("models/floor2/Spicesbag_02/Spicesbag_02.glb"),
        spicebag3: new GLTFShape("models/floor2/Spicesbag_03/Spicesbag_03.glb"),
        longcrate: new GLTFShape("models/CrateLong_02/CrateLong_02.glb"),
        stairs: new GLTFShape("models/Stairs_L_01/Stairs_L_01.glb"),
        // orcchair: new GLTFShape("models/orc_chair.glb"),
        lanternLit: new GLTFShape('models/lantern_lit.glb'),
        ironChestTop: new GLTFShape('models/Chest_Top_Iron_01/Chest_Top_Iron_01.glb'),
        blackStone: new GLTFShape('models/Stone_Module_4M/Stone_Module_4M.glb'),
        wallStoneSmall: new GLTFShape("models/Wall_Stone_Small/Wall_Stone_Small.glb"),
        twoBladesOfGrassShape: new GLTFShape("models/Grass03.glb"),
        goblin: new GLTFShape("models/goblinAnimated3.glb"),
        fighter: new GLTFShape("models/FighterLadyAnimated3.glb"),
        sorceress: new GLTFShape("models/sorceressAnimated3.glb"),
        brute: new GLTFShape("models/BruteAnimated6.glb"),
        openBook: new GLTFShape("models/Book_06/Book_06.glb"),
        squareButton: new GLTFShape("models/Square_Button.glb"),
        peasantGirl: new GLTFShape('models/peasantAnimated.glb'),
        peasant: new GLTFShape("models/peasantAnimated2.glb"),
        sackOfPotatoes: new GLTFShape("models/sackofpotatoes.glb"),
        // woodTable: new GLTFShape("models/orc_table.glb"),
        woodTable: new GLTFShape("models/Table_Wood_01/Table_Wood_01.glb"),
        woodenDoor: new GLTFShape("models/Door_Wood_01/Door_Wood_01.glb"),
        stairFence: new GLTFShape('models/StairFence_01.glb'),
        wallStoneLarge: new GLTFShape('models/Wall_Stone_Large.glb'),
        outsideStairs: new GLTFShape('models/Module_Stair_Stones_3M/Module_Stair_Stones_3M.glb'),
        chairwood: new GLTFShape('models/floor2/Chairwood_02/Chairwood_02.glb'),
        tablewood: new GLTFShape('models/floor2/TableWood_01/TableWood_01.glb'),
        barrel: new GLTFShape('models/floor2/Barrel_01/Barrel_01.glb'),
        barrel2: new GLTFShape('models/floor2/Barrel_02/Barrel_02.glb'),
        plate: new GLTFShape('models/floor2/Plate_01/Plate_01.glb'),
        fishskeleton: new GLTFShape('models/floor2/FishSkeleton_01/FishSkeleton_01.glb'),
        dagger: new GLTFShape('models/floor2/Dagger_01/Dagger_01.glb'),
        bannerblue: new GLTFShape('models/floor2/Banner_Blue_02/Banner_Blue_02.glb'),
        bannerred: new GLTFShape('models/floor2/Banner_Red_02/Banner_Red_02.glb')
    },
    textures: {
        textContainer: new Texture("src/images/dialogs/textContainer.png"),
        optionsContainer: new Texture("src/images/dialogs/optionsContainer.png"),
        // playerPortraitDefault: new Texture("src/images/dialogs/player_default.png", {
        //   hasAlpha: true
        // }),
        // playerPortraitSurprised: new Texture(
        //   "src/images/dialogs/player_surprised.png",
        //   { hasAlpha: true }
        // ),
        // playerPortraitThinking: new Texture("src/images/dialogs/player_thinking.png", {
        //   hasAlpha: true
        // }),
        // npcPortraitDefault: new Texture("src/images/dialogs/dog_default.png", {
        //   hasAlpha: true
        // }),
        // npcPortraitSurprised: new Texture("src/images/dialogs/dog_surprised.png", {
        //   hasAlpha: true
        // }),
        // npcPortraitThinking: new Texture("src/images/dialogs/dog_thinking.png", {
        //   hasAlpha: true
        // })
      }
}