import process from "node:process";

import path from "node:path";
import { readFile, writeFile } from "node:fs/promises";

const packageJsonPath = path.join(process.env.PWD, "package.json");

const packageJsonBuffer = await readFile(packageJsonPath, {
  encoding: "utf-8",
});

const packageJson = JSON.parse(packageJsonBuffer.toString());

delete packageJson["scripts"]["init:boilerplate"];

await writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2), {
  encoding: "utf-8",
});
