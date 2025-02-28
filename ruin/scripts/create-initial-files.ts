import { mkdir } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const sourcePath = path.join(process.env.PWT!, "src");

["generators", "middlewares", "models", "repositories", "repositories/in-memory", "repositories/prisma", "schemas"].forEach(async (newDirectory) => {
  await mkdir(path.join(sourcePath, newDirectory));
})
