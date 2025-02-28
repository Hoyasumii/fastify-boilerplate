import { readFile, writeFile } from "node:fs/promises";
import process from "node:process";
import path from "node:path";
import { DefaultPackageJson } from "~/ruin/types";

export class PackageJson<PackageType extends object = DefaultPackageJson> {
  public path = path.join(process.env.PWD!, "package.json");

  async get(): Promise<PackageType> {
    const packageJsonBuffer = await readFile(this.path, {
      encoding: "utf-8",
    });

    return JSON.parse(packageJsonBuffer.toString()) as PackageType;
  }

  async set<KeyType extends keyof PackageType>(
    key: KeyType,
    value: PackageType[KeyType]
  ): Promise<void> {
    const data = (await this.get()) as PackageType;

    data[key] = value;

    await writeFile(this.path, JSON.stringify(data, null, 2), {
      encoding: "utf-8",
    });
  }
}
