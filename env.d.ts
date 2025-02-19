declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: "development" | "testing" | "production";
    PORT: string;
    DATABASE_URL: string;
    JWT_PRIVATE_KEY: string;
  }
}
