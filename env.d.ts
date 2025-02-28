declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: "development" | "testing" | "production";
    PORT: string;
    POSTGRESQL_USERNAME: string;
    POSTGRESQL_PASSWORD: string;
    POSTGRESQL_DATABASE: string;
    DATABASE_URL: string;
    JWT_PRIVATE_KEY: string;
  }
}
