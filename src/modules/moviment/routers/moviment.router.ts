import { Request, Response, Router } from "express";

import { authValidation } from "../../../middlewares/auth-validation.middleware";

import { makeListMovimentsController } from "../factories/list-moviments.factory";

import { validateListMovimentsQueryRequestSchema } from "../../../middlewares/list-moviments-validation.middleware";

export const movimentRouter = Router();

const listMovimentsController = makeListMovimentsController();

movimentRouter.get(
  "/",
  authValidation,
  validateListMovimentsQueryRequestSchema,
  (request: Request, response: Response) => {
    listMovimentsController.handler(request, response);
  }
);
