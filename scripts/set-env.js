import { argv, exit } from "node:process";
import path from "node:path";
import process from 'node:process';
import { existsSync } from "node:fs";
import { readFile, writeFile } from "node:fs/promises";

const envs = {
  0: "testing",
  1: "development",
  2: "production",
  help: null,
};

let target = argv[2];

if (!target) target = envs["help"];

if (envs[target] === null || envs[target] === undefined) {
  console.log("0 - testing");
  console.log("1 - development");
  console.log("2 - production\n");
  exit(0);
}

const envPath = path.join(process.env.PWD, ".env");

if (!existsSync(envPath)) {
  console.log(".env file not exists");
  exit(0);
}

const envBuffer = await readFile(envPath, {
  encoding: "utf-8"
});

let env = {};

envBuffer.toString().split("\n").forEach(line => {
  const [key, ...value] = line.split("=");

  if (key === "") return;

  env[key] = value.join("=");
})

env["NODE_ENV"] = envs[target];

let newEnv = "";

Object.entries(env).forEach(([key, value]) => {
  newEnv += `${key}=${value}\n`;
});

await writeFile(envPath, newEnv, { encoding: "utf-8" })
