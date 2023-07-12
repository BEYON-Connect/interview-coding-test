import { Lifetime, asFunction } from "awilix";
import { startServer } from "./fastify/server.js";
import { connect } from "./database/index.js";

const database = await connect(":memory:");

startServer(
  {
    host: "localhost",
    port: 34567,
  },
  {
    database: asFunction(() => database, {
      lifetime: Lifetime.SINGLETON,
      dispose: (database) => database.close(),
    }),
  }
);
