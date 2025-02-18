import { helloWorldController } from "@/controllers";
import { FastifyInstance } from "fastify";

export default async function routes(app: FastifyInstance) {
  app.get("/hello-world", helloWorldController);
}
