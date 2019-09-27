// Skeleton Tower by Saxis
// (c) 2019 Saxis
//

import { CreateFloor1 } from "./scenes/floor1";
import { CreateFloor2 } from './scenes/floor2';
import { CreateFloor3 } from "./scenes/floor3";
import { CreateOutside } from "./scenes/outside";
import { BaseScene } from "./gameObjects/baseScene";

let baseScene = new BaseScene();

CreateFloor1(baseScene)
CreateFloor2(baseScene);
CreateFloor3(baseScene);
CreateOutside();