export default {
    sounds: {
        moveObject1: new AudioClip("sounds/move_object1.mp3"),
        moveObject2: new AudioClip("sounds/move_object2.mp3")
    },
    models: {
        lanternLit: new GLTFShape('models/lantern_lit.glb'),
        blackStone: new GLTFShape('models/Stone_Module_4M/Stone_Module_4M.glb'),
        twoBladesOfGrassShape: new GLTFShape("models/Grass03.glb"),
        goblinShape: new GLTFShape("models/goblinAnimated3.glb"),
        openBook: new GLTFShape("models/Book_06/Book_06.glb"),
        //peasantGirl: new GLTFShape('models/peasantGirlAnimated.glb'),
        peasantGirl: new GLTFShape('models/peasantAnimated.glb'),
        sackOfPotatoes: new GLTFShape("models/sackofpotatoes.glb"),
        // woodTable: new GLTFShape("models/orc_table.glb"),
        woodTable: new GLTFShape("models/Table_Wood_01/Table_Wood_01.glb"),
        woodenDoor: new GLTFShape("models/Door_Wood_01/Door_Wood_01.glb"),
        stairFence: new GLTFShape('models/StairFence_01.glb'),
        wallStoneLarge: new GLTFShape('models/Wall_Stone_Large.glb'),
        outsideStairs: new GLTFShape('models/Module_Stair_Stones_3M/Module_Stair_Stones_3M.glb')
    },
    textures: {
        textContainer: new Texture("src/images/dialogs/textContainer.png"),
        optionsContainer: new Texture("src/images/dialogs/optionsContainer.png"),
        playerPortraitDefault: new Texture("src/images/dialogs/player_default.png", {
          hasAlpha: true
        }),
        playerPortraitSurprised: new Texture(
          "src/images/dialogs/player_surprised.png",
          { hasAlpha: true }
        ),
        playerPortraitThinking: new Texture("src/images/dialogs/player_thinking.png", {
          hasAlpha: true
        }),
        npcPortraitDefault: new Texture("src/images/dialogs/dog_default.png", {
          hasAlpha: true
        }),
        npcPortraitSurprised: new Texture("src/images/dialogs/dog_surprised.png", {
          hasAlpha: true
        }),
        npcPortraitThinking: new Texture("src/images/dialogs/dog_thinking.png", {
          hasAlpha: true
        })
      }
}