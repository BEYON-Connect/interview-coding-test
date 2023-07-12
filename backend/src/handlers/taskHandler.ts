import { FastifyPluginCallback, RouteHandlerMethod } from "fastify";
import { query } from "../database/index.js";

const listTasks: RouteHandlerMethod = async (request, reply) => {
  const database = request.diScope.resolve("database");

  const tasks = await query(
    database,
    "SELECT Id, Title, Deadline, Description, IsCompleted FROM Tasks"
  );

  return reply.send(tasks);
};

export const taskHandler: FastifyPluginCallback = (app, _, done) => {
  app.get("", listTasks);
  done();
};
