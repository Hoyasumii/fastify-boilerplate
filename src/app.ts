import fastify from "fastify";
import cors from "@fastify/cors";
import cookies from "@fastify/cookie";
import dotenv from "dotenv";
import { getLogger } from "@/utils";
import statusByError from "@/errors/status-by-error";
import routes from "./routes";

if (!process.env.NODE_ENV) {
  dotenv.config();
} else {
  dotenv.config({ path: ".env.test" });
}

const app = fastify({
  logger: getLogger(process.env.NODE_ENV),
});

app.register(cors, {
  credentials: true,
  exposedHeaders: [],
});

app.register(cookies);

app.register(routes);

app.setErrorHandler((error, _, reply) => {
  return reply.status(statusByError[error.name] ?? 500).send({
    success: false,
    content: { cause: error.cause ?? undefined, message: error.message },
  });
});

export default app;
