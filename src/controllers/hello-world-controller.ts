import { FastifyReply, FastifyRequest } from "fastify";

export async function helloWorldController(
  _: FastifyRequest,
  reply: FastifyReply
): Promise<"Hello World"> {
  return reply.status(200).send("Hello World");
}
