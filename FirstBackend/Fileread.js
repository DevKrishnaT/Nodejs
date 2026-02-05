import fs from "fs/promises";


const files = await fs.readdir("./");
console.log(files);

const data   = await fs.readFile("data.txt" , "utf-8");
console.log(data);





