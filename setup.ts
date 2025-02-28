import { createPromptModule } from "inquirer";
import { execSync } from "node:child_process";
import { renderFile } from "ejs";
import { writeFile } from "fs/promises";

const prompt = createPromptModule();

const setupData = await prompt([
  {
    name: "name",
    message: "What is your project named?",
    type: "input",
  },
  // {
  //   name: "logger",
  //   message:
  //     "Do you want enable pino-pretty for logger in development environment?",
  //   type: "confirm",
  // },
  // {
  //   name: "jwt",
  //   message: "Do you want enable cors in your project?",
  //   type: "confirm",
  // },
]);

execSync("rm -rf .git")
execSync("git init")
execSync("git add .")
execSync(`git commit -m "Initial Commit"`);



// await writeFile(
//   "testing.ts",
//   (
//     await renderFile("./ruin/templates/src/app.ejs", {
//       cookies: null,
//       cors: null,
//       logger: null,
//       jwt: null,
//       ...setupData,
//     })
//   ).replace(/\n{3,}/g, "\n\n"),
//   {
//     encoding: "utf8",
//   }
// );
