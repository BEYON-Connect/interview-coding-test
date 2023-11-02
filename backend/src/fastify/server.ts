import { Cradle, diContainer, fastifyAwilixPlugin } from "@fastify/awilix";
import { NameAndRegistrationPair } from "awilix";
import { fastify as Fastify } from "fastify";
import { errorHandler } from "./middleware/error-handler.js";
import { taskHandler } from "../handlers/taskHandler.js";
import cors from "@fastify/cors";

interface ServerSettings {
  readonly host: string;
  readonly port: number;
}

export const startServer = async (
  serverSettings: ServerSettings,
  di: NameAndRegistrationPair<Cradle>
) => {
  diContainer.register(di);

  const fastify = Fastify({
    logger: true,
  });

  await fastify.register(cors, {
    origin: true,
  });

  fastify.register(fastifyAwilixPlugin);
  fastify.setErrorHandler(errorHandler);

  fastify.register(taskHandler, { prefix: "tasks" });

  fastify.listen({ host: serverSettings.host, port: serverSettings.port });
};
