import fastify from "fastify";
import statusByError from "@/errors/status-by-error";
import routes from "@/routes";
import dotenv from "dotenv";

dotenv.config();

const app = fastify();

app.register(routes);

app.setErrorHandler((error, _, reply) => {
  return reply.status(statusByError[error.name] ?? 500).send({
    success: false,
    content: { cause: error.cause ?? undefined, message: error.message },
  });
});

export default app;
