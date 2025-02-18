import { mkdir } from "node:fs/promises";
import process from "node:process";
import path from "node:path";

const sourcePath = path.join(process.env.PWD, "src");

["generators", "middlewares", "models", "repositories", "repositories/in-memory", "repositories/prisma", "schemas"].forEach(async (newDirectory) => {
  await mkdir(path.join(sourcePath, newDirectory));
})
