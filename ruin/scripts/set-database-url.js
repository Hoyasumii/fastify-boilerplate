import { exit } from "node:process";
import path from "node:path";
import process from "node:process";
import { existsSync } from "node:fs";
import { readFile, writeFile } from "node:fs/promises";

const envPath = path.join(process.env.PWD, ".env");

if (!existsSync(envPath)) {
  console.log(".env file not exists");
  exit(0);
}

const envBuffer = await readFile(envPath, {
  encoding: "utf-8",
});

let env = {};

envBuffer
  .toString()
  .split("\n")
  .forEach((line) => {
    const [key, ...value] = line.split("=");

    if (key === "") return;

    env[key] = value.join("=");
  });

env["DATABASE_URL"] = `"postgresql://${env["POSTGRESQL_USERNAME"]}:${env["POSTGRESQL_PASSWORD"]}@localhost:5432/${env["POSTGRESQL_DATABASE"]}?schema=public"`

let newEnv = "";

Object.entries(env).forEach(([key, value]) => {
  newEnv += `${key}=${value}\n`;
});

await writeFile(envPath, newEnv, { encoding: "utf-8" });  
