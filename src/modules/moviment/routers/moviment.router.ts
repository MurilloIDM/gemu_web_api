import { Request, Response, Router } from "express";

import { authValidation } from "../../../middlewares/auth-validation.middleware";

import { makeListMovimentsController } from "../factories/list-moviments.factory";

import { validateListMovimentsQueryRequestSchema } from "../../../middlewares/list-moviments-validation.middleware";
import { validateCreateMovimentRequestSchema } from "../../../middlewares/create-moviment-validation.middleware";
import { makeCreateMovimentController } from "../factories/create-moviment.factory";
import { makeUpdateMovimentController } from "../factories/update-moviment.factory";
import { validateUpdateMovimentRequestSchema } from "../../../middlewares/update-moviment-validation.middleware";

export const movimentRouter = Router();

const listMovimentsController = makeListMovimentsController();
const createMovimentController = makeCreateMovimentController();
const updateMovimentController = makeUpdateMovimentController();

movimentRouter.get(
  "",
  authValidation,
  validateListMovimentsQueryRequestSchema,
  (request: Request, response: Response) => {
    listMovimentsController.handler(request, response);
  }
);

movimentRouter.post(
  "",
  authValidation,
  validateCreateMovimentRequestSchema,
  (request: Request, response: Response) => {
    createMovimentController.handler(request, response);
  }
);

movimentRouter.put(
  "/:id",
  authValidation,
  validateUpdateMovimentRequestSchema,
  (request: Request, response: Response) => {
    updateMovimentController.handler(request, response);
  }
);
