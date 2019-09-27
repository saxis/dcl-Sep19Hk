import resources from "../resources";
import { SimpleDialog } from "../modules/simpleDialog";
import { DoorState } from "../gameObjects/doorState";

function selectRandom(options: string[]): string {
  return options[Math.floor(Math.random() * (options.length - 1))];
}

export class PeasantDialog extends SimpleDialog {
  private dialogTree: SimpleDialog.DialogTree;

  public onCorrectAnswer: (questionId: number) => void;

  constructor(gameCanvas: UICanvas) {
    // Create a new SimpleDialog to manage the dialog tree
    super({
      canvas: gameCanvas,
      leftPortrait: {
        width: 256,
        height: 256,
        sourceWidth: 256,
        sourceHeight: 256,
        positionX: "-17%"
      },
      rightPortrait: {
        width: 256,
        height: 256,
        sourceWidth: 256,
        sourceHeight: 256,
        positionX: "15%"
      },
      dialogText: {
        width: "25%",
        height: "25%",
        textSpeed: 15,
        textIdleTime: 5,
        textConfig: { fontSize: 16, paddingLeft: 25, paddingRight: 25 },
        background: resources.textures.textContainer,
        backgroundConfig: { sourceWidth: 512, sourceHeight: 257 }
      },
      optionsContainer: {
        stackOrientation: UIStackOrientation.VERTICAL,
        spacing: 0,
        width: "40%",
        height: "12%",
        vAlign: "top",
        hAlign: "center",
        positionY: "-65%",
        background: resources.textures.optionsContainer,
        backgroundConfig: { sourceWidth: 512, sourceHeight: 79 },
        optionsTextConfig: { fontSize: 20, paddingLeft: 20, positionY: "-35%" }
      }
    });

    // Some random replies for muna
    const randomStartingOptions = ["I see...", "...", "...OK..."];
    const randomWrongAnswers = [
      "You are just guessing...",
      "No it is not...",
      "What? Not even close!"
    ];

    // Variables used in the dialog tree
    let firstTimeDialog = true;
    let firstOptionCorrect = false;
    let secondOptionCorrect = false;
    let thirdOptionCorrect = false;
    let unlockDoor = false;

    // Dialog text colors
    const npcColor = Color4.White();
    //const npcColor = Color4.Green();
    const playerColor = new Color4(0.898, 0, 0.157);

    const bottomFloorDoor = new Entity();
  //bottomFloorDoor.setParent(scene);
  //const woodenDoorModel = new GLTFShape("models/Door_Wood_01/Door_Wood_01.glb");
  bottomFloorDoor.addComponentOrReplace(resources.models.woodenDoor);
  const firstFloorDoorLoc = new Transform({
    position: new Vector3(0.5, 0, 0),
    rotation: new Quaternion(0, 0, 0, 1)
  });
  bottomFloorDoor.addComponentOrReplace(firstFloorDoorLoc);
  bottomFloorDoor.addComponent(
    //new AudioSource(new AudioClip("sounds/GROBB.mp3"))
    new AudioSource(resources.sounds.doorIsLocked)
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
      bottomFloorDoor.getComponent(AudioSource).playOnce();
      if(unlockDoor) {
        let state = bottomFloorDoor.getParent().getComponent(DoorState);
        state.closed = !state.closed;
      }
    })
  );
 

    this.dialogTree = new SimpleDialog.DialogTree()
      .if(() => firstTimeDialog)
        .call(() => (firstTimeDialog = false))
        .say(() => "Old Man Rivers says, \"Hail traveler. Been some time since I've seen visitors around these parts. I'm just here guarding the [tower]. How can I help you? \"", { color: npcColor })
        .beginOptionsGroup()
          .option(() => "What Tower?")
            .say(() => "You say, \"What tower?\"", { color: playerColor })
          .endOption()
        .endOptionsGroup()
        .say(() => "Old Man Rivers says, \"Yeah, the creepy tower right over there. Anyway, I'm guarding the thing until someone comes along that can handle [matters].\"", { color: npcColor })
        .beginOptionsGroup()
          .option(() => "What kind of matters?")
            .say(() => "You say, \"What sort of matters? I might be able to help.\"", { color: playerColor })
          .endOption()
        .endOptionsGroup()
        .say(() => "Old Man Rivers says, \"An old sorceress lives in there. She's been doing.. bad things around these parts. I'm hoping to find someone [brave] enough to deal with her. Permanently.\"", { color: npcColor })
        .beginOptionsGroup()
          .option(() => "I'm brave enough")
            .say(() => "You say, \"I'm brave enough\"", { color: playerColor })
            .say(() => "Old Man Rivers says, \"Finally.. gods be praised. I will unlock the door to the first floor. Hopefully you can make your way to the top and defeat her.  \"", { color: npcColor })
            .call(() => { bottomFloorDoor.getComponent(AudioSource).playOnce();})
            .call( async () => {
                log("Unlock the first floor door")
                unlockDoor = true;
                //await bottomFloorDoor.removeComponent(OnClick);
                await bottomFloorDoor.removeComponent(AudioSource);
            })
            .call(async () => {
                log("in the second call")
                await bottomFloorDoor.addComponent(
                    new AudioSource(resources.sounds.grobb)
                );
                
            })
            // .call(async() => {
            //     log("in the third call")
            //     await bottomFloorDoor.addComponent(
            //       new OnClick(e => {
            //         log('a new onclick was added')
            //         // let state = bottomFloorDoor.getParent().getComponent(DoorState);
            //         // state.closed = !state.closed;
            //         // bottomFloorDoor.getComponent(AudioSource).playOnce();
            //       })
            //     );
            // })
          .endOption()
          .option(() => "Maybe some other time")
            .say(() => "Old Man Rivers says, \"Well, thanks anyway.. I need to get back to guarding. Pleasant day\"", { color: npcColor })
          .endOption()
        .endOptionsGroup()
      .else()
        .if(() => !unlockDoor)
          .say(() => "Old Man Rivers says, \"Did you gather your courage traveler?\"")
        .endif()
      .endif()
     
    //     .say(
    //          () =>
    //                "So go ahead, explore the other rooms and solve the puzzles to find the answers to my questions!",
    //     { color: npcColor }
    //     )
    //     .say(() => "Um... sure, why not? Who am I to argue?", {
    //       color: playerColor
    //     })
    //     .wait(3)
    //   .else()
    //     .if(() => firstOptionCorrect && secondOptionCorrect && thirdOptionCorrect)
    //       .say(() => "We're done talking. \nEnter the code and you can leave.", {
    //         color: npcColor
    //       })
    //       .wait(3)
    //     .else()
    //       .say(() => "Did you solve my puzzles? Do you know the answers?", {
    //       color: npcColor
    //       })
    //       .beginOptionsGroup()
    //         .option(() => "- Yes.")
    //         .say(() => "Yes. Why do you think I came all the way down here?", {
    //           color: playerColor
    //         })
    //         .say(() => selectRandom(randomStartingOptions), { color: npcColor })
    //         .say(() => "Very well then... answer me this:", { color: npcColor })
    //         .if(() => !firstOptionCorrect)
    //           .say(() => "What’s my favorite color?", { color: npcColor })
    //           .beginOptionsGroup()
    //             .option(() => "- Green.")
    //               .say(() => "Is it green?", { color: playerColor })
    //                 .say(() => selectRandom(randomWrongAnswers), { color: npcColor })
    //                   .endOption()
    //                     .option(() => "- Blue.")
    //                       .say(() => "Blue... right?", { color: playerColor })
    //                       .say(() => selectRandom(randomWrongAnswers), { color: npcColor })
    //                     .endOption()
    //                     .option(() => "- Orange.")
    //                       .say(() => "Organge!", { color: playerColor })
    //                       .call(() => (firstOptionCorrect = true))
    //                       .say(() => "That’s right!", { color: npcColor })
    //                       .say(() => '"In the midst of darkness, light persists."', {
    //                        color: npcColor
    //                       })
    //                       //.call(() => this.onCorrectAnswer(0))
    //                     .endOption()
    //           .endOptionsGroup()
    //         .else()
    //           .if(() => !secondOptionCorrect)
    //             .say(() => "What’s my favorite game?", { color: npcColor })
    //             .beginOptionsGroup()
    //               .option(() => "- Retro arcade games.")
    //                 .say(() => "Is it retro arcade games?", { color: playerColor })
    //                 .say(() => selectRandom(randomWrongAnswers), { color: npcColor })
    //               .endOption()
    //               .option(() => "- Darts.")
    //                 .say(() => "Darts?", { color: playerColor })
    //                 .call(() => (secondOptionCorrect = true))
    //                 .say(() => "Yes it is...", { color: npcColor })
    //                 .say(() => '"Give light, and the darkness will disappear of itself."', {
    //                   color: npcColor
    //                 })
    //                 //.call(() => this.onCorrectAnswer(1))
    //               .endOption()
    //               .option(() => "- Bowling.")
    //                 .say(() => "Of course… It’s bowling... right?", { color: playerColor })
    //                 .say(() => selectRandom(randomWrongAnswers), { color: npcColor })
    //               .endOption()
    //             .endOptionsGroup()
    //           .else()
    //             .if(() => !thirdOptionCorrect)
    //               .say(() => "What’s my favorite dessert?", { color: npcColor })
    //               .beginOptionsGroup()
    //                 .option(() => "- Cheese Cake.")
    //                   .say(() => "Cheese Cake?", { color: playerColor })
    //                   .say(() => selectRandom(randomWrongAnswers), { color: npcColor })
    //                 .endOption()
    //                 .option(() => "- Apple Pie.")
    //                   .say(() => "It's Apple Pie...", { color: playerColor })
    //                   .say(() => selectRandom(randomWrongAnswers), { color: npcColor })
    //                 .endOption()
    //                 .option(() => "- Lemon Pie.")
    //                   .say(() => "Lemon Pie!", { color: playerColor })
    //                   .call(() => (thirdOptionCorrect = true))
    //                   .say(() => "Very good...", { color: npcColor })
    //                   .say(() => '"Give light and people will find the way."')
    //                   //.call(() => this.onCorrectAnswer(2))
    //                 .endOption()
    //               .endOptionsGroup()
    //             .endif()
    //           .endif()
    //     .endif()
    //   .endOption()
    //   .option(() => "- No, not yet")
    //   .say(() => "No, not yet", { color: playerColor })
    //   .say(() => "You are wasting my time.", { color: npcColor })
    //   .endOption()
    //   .endOptionsGroup()
    //   .endif();
  }

  public run(): void {
    if (!this.isDialogTreeRunning()) {
      this.runDialogTree(this.dialogTree);
    }
  }
}
