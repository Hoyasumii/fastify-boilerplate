import { execSync } from "node:child_process";

type GitData = {
  name: string;
  email: string;
};

export function getGitData(): GitData {
  const name = execSync("git config user.name").toString().replace("\n", "");
  const email = execSync("git config user.email").toString().replace("\n", "");

  return {
    name,
    email,
  };
}
