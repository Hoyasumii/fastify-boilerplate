import { readFile, writeFile } from "node:fs/promises";
import process from "node:process";
import path from "node:path";

export class Env<EnvType extends NodeJS.ProcessEnv> {
  public path = path.join(process.env.PWD!, ".env");
  public envDeclarationPath = path.join(process.env.PWD!, "env.d.ts");

  async generateType(): Promise<void> {
    const envFile = await readFile(this.path, { encoding: "utf-8" });

    const envEntries = envFile
      .split("\n")
      .map((propertie) => propertie.split("="));

    const env = Object.fromEntries(envEntries.slice(0, envEntries.length - 1));

    Object.entries(env).forEach(([key, value]) => {
      env[key] = (value as string).length === 0 ? typeof value : value;
    });

    const envDeclarationFile = await readFile(this.envDeclarationPath, {
      encoding: "utf-8",
    });

    const envDeclarationArr: Array<Array<string>> = envDeclarationFile
      .split("\n")
      .map((propertie) => propertie.replace(";", "").trim().split(": "));

    const envDeclaration = Object.fromEntries(
      envDeclarationArr.slice(2, envDeclarationArr.length - 3)
    ) as EnvType;

    let content = "declare namespace NodeJS {\n";
    content += "  export interface ProcessEnv {\n";

    Object.entries({ ...env, ...envDeclaration }).forEach(([key, value]) => {
      content += `    ${key}: ${value};\n`;
    });

    content += "  }\n";
    content += "}\n";

    await writeFile(this.envDeclarationPath, content, { encoding: "utf-8" });
  }
  
  set(key: keyof EnvType, value: string) {}

  rawSet(key: string, value: string) {}

  static watch() {}
}

const instance = new Env();

console.log(await instance.generateType());
