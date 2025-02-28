import { RuinConfig } from "~/ruin/types";

const config: RuinConfig = {
  enabledTools: [],
  fileNaming: "kebab-case",
  patternFolders: {
    controllers: "controllers",
    enums: "enums",
    errors: "erorrs",
    generators: "generators",
    jobs: "jobs",
    middlewares: "middlewares",
    models: "models",
    repositories: "repositories",
    routes: "routes",
    schemas: "schemas",
    services: "services",
    utils: "utils",
  },
  basePath: "src",
};

export default config;
