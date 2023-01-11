import express from "express";
import { json, urlencoded } from "express";
import bodyparser from 'body-parser'
import applyRoutes from "./routes";
import connectDatabase from "./helpers/connect-database";

const PORT = 3000;
const app = express();

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

applyRoutes(app);
connectDatabase();

app.listen({ port: PORT }, (): void => {
  console.info(`🚀 Amber API up and running in @ http://localhost:${PORT}`);
});
