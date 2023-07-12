import "@fastify/awilix";
import { Database } from "sqlite3";

interface CradleBase {
  database: Database;
}

declare module "@fastify/awilix" {
  interface Cradle extends CradleBase {} // eslint-disable-line @typescript-eslint/no-empty-interface
}
