import os from "os"

const myPlat = os.platform();
const Mymem = os.totalmem();
const MyFreeMem = os.freemem();
const host = os.hostname();
const cpus = os.cpus();

console.log(myPlat , " " , Mymem , " " , MyFreeMem , " " , host , " " , cpus.length);
