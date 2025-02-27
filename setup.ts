import { createPromptModule } from "inquirer";
import { renderFile } from "ejs";
import { writeFile } from "fs/promises";

const prompt = createPromptModule();

const setupData = await prompt([
  {
    name: "name",
    message: "What is your project named?",
    type: "input",
  },
  {
    name: "logger",
    message:
      "Do you want enable pino-pretty for logger in development environment?",
    type: "confirm",
  },
  {
    name: "jwt",
    message: "Do you want enable cors in your project?",
    type: "confirm",
  },
]);

await writeFile(
  "testing.ts",
  (
    await renderFile("./templates/app.ejs", {
      cookies: null,
      cors: null,
      ...setupData,
    })
  ).replace(/\n{3,}/g, "\n\n"),
  {
    encoding: "utf8",
  }
);

