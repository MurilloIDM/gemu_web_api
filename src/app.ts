import express from "express";

import { router } from "./routes";

import { errorHandler } from "./middlewares/error-handler.middleware";

export const app = express();

app.use(express.json());

app.use(router);
app.use(errorHandler);
