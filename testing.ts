import fastify from "fastify";
import statusByError from "@/errors/status-by-error";
import routes from "@/routes";
import dotenv from "dotenv";

import { getLogger } from "@/utils";

dotenv.config();

const app = fastify({
  logger: getLogger(process.env.NODE_ENV),
});

app.register(routes);

app.setErrorHandler((error, _, reply) => {
  return reply.status(statusByError[error.name] ?? 500).send({
    success: false,
    content: { cause: error.cause ?? undefined, message: error.message },
  });
});

export default app;
