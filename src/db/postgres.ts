import { DataSource } from "typeorm";
import entities from "./entities";
import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config({ path: "config/dev.env" });
console.log(__dirname);

const postgres: DataSource = new DataSource({
  type: "postgres",
  entities: entities,
  migrations: ["src/migrations/*{.ts,.js}"],
  logging: true,
  synchronize: false,
  host: process.env.POSTGRES_HOST,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  port: process.env.POSTGRES_PORT
    ? parseInt(process.env.POSTGRES_PORT)
    : undefined,
});

export default postgres;
