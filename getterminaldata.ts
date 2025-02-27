import {execSync} from 'node:child_process';

const data = execSync("git config user.name");
console.log(data.toString().replace("\n", ""));
console.log("a");