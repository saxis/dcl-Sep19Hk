import resources from "../resources";
import { SimpleDialog } from "../modules/simpleDialog";
import { DoorState } from "../gameObjects/doorState";

function selectRandom(options: string[]): string {
  return options[Math.floor(Math.random() * (options.length - 1))];
}

export class PeasantDialog extends SimpleDialog {
  private dialogTree: SimpleDialog.DialogTree;

  public onCorrectAnswer: (questionId: number) => void;
  public onSequenceComplete: () => void;

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
        textIdleTime: 1,
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

    // Variables used in the dialog tree
    let firstTimeDialog = true;
    let unlockDoor = false;

    // Dialog text colors
    const npcColor = Color4.White();
    const playerColor = Color4.White();

    const bottomFloorDoor = new Entity();
    bottomFloorDoor.addComponentOrReplace(resources.models.woodenDoor);
    const firstFloorDoorLoc = new Transform({
      position: new Vector3(0.5, 0, 0),
      rotation: new Quaternion(0, 0, 0, 1)
    });
    bottomFloorDoor.addComponentOrReplace(firstFloorDoorLoc);
    bottomFloorDoor.addComponent(
      new AudioSource(resources.sounds.doorIsLocked)
      //new AudioSource(resources.sounds.peasantunlock)
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
        if (unlockDoor) {
          let state = bottomFloorDoor.getParent().getComponent(DoorState);
          state.closed = !state.closed;
          //bottomFloorDoor.removeComponent(AudioSource);
        }
      })
    );

    this.dialogTree = new SimpleDialog.DialogTree()
      .if(() => firstTimeDialog)
      .call(() => (firstTimeDialog = false))
      .say(
        () =>
          "Old Man Rivers says, \"Hail traveler. Been some time since I've seen visitors around these parts. I'm just here guarding the [tower]. How can I help you? \"",
        { color: npcColor }
      )
      .beginOptionsGroup()
      .option(() => "What tower?")
      .say(() => 'You say, "What tower?"', { color: playerColor })
      .endOption()
      .endOptionsGroup()
      .say(
        () =>
          'Old Man Rivers says, "Yeah, the creepy tower right over there. Anyway, I\'m guarding the thing until someone comes along that can handle [matters]."',
        { color: npcColor }
      )
      .beginOptionsGroup()
      .option(() => "What kind of matters?")
      .say(() => 'You say, "What sort of matters? I might be able to help."', {
        color: playerColor
      })
      .endOption()
      .endOptionsGroup()
      .say(
        () =>
          "Old Man Rivers says, \"An old sorceress lives in there. She's been doing.. bad things around these parts. I'm hoping to find someone [brave] enough to deal with her. Permanently.\"",
        { color: npcColor }
      )
      .beginOptionsGroup()
      .option(() => "I'm brave enough!")
      .say(() => 'You say, "I\'m brave enough"', { color: playerColor })
      .say(
        () =>
          'Old Man Rivers says, "Finally.. gods be praised. I will unlock the door to the first floor. Hopefully you can make your way to the top and defeat her.  "',
        { color: npcColor }
      )
      .call(() => {
        bottomFloorDoor.getComponent(AudioSource).playOnce();
      })
      .call(() => this.onSequenceComplete())
      .call(async () => {
        log("Unlock the first floor door and remove the magic sound");
        unlockDoor = true;
        await bottomFloorDoor.removeComponent(AudioSource);
      })
      .call(async () => {
        log("in the second call to add the grobb sound back to the door");
        await bottomFloorDoor.addComponent(
          new AudioSource(resources.sounds.grobb)
        );
      })
      .endOption()

      .option(() => "Maybe some other time...")
      .say(
        () =>
          'Old Man Rivers says, "Well, thanks anyway.. I need to get back to guarding. Pleasant day"',
        { color: npcColor }
      )
      .endOption()
      .endOptionsGroup()
      .else()
      .if(() => !unlockDoor)
      .say(() => 'Old Man Rivers says, "Did you gather your courage traveler?"')
      .else()
      .say(() => 'Old Man Rivers says, "The tower is unlocked. Best of luck."')
      .endif()
      .endif();
  }

  public run(): void {
    if (!this.isDialogTreeRunning()) {
      this.runDialogTree(this.dialogTree);
    }
  }
}
