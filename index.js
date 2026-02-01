
import { fileURLToPath } from "url";
import  Sub  , { Add  }  from "./MathOption.js";
import {CurYear , Curdate} from './logger.js';
import path from 'path';
const __filename = fileURLToPath(import.meta.url);

const info = path.parse(__filename);
console.log(info);
const imagePath = path.join(info.dir , "img.png")
console.log(imagePath);
const normal = path.normalize("users//krishna/../docs//file.txt");
console.log(normal);
const dirName = path.dirname(__filename);
console.log(dirName);







const creating = "good morging";

console.log(creating);

const ans = Add(10 , 20);
console.log(ans);
console.log(Sub(10 ,5));
console.log(CurYear() , Curdate());


