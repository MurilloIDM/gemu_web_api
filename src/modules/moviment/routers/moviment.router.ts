import { Request, Response, Router } from "express";

import { authValidation } from "../../../middlewares/auth-validation.middleware";
import { validateCreateMovimentRequestSchema } from "../../../middlewares/create-moviment-validation.middleware";
import { validateUpdateMovimentRequestSchema } from "../../../middlewares/update-moviment-validation.middleware";
import { validateListMovimentsQueryRequestSchema } from "../../../middlewares/list-moviments-validation.middleware";

import { makeListMovimentsController } from "../factories/list-moviments.factory";
import { makeUpdateMovimentController } from "../factories/update-moviment.factory";
import { makeCreateMovimentController } from "../factories/create-moviment.factory";
import { makeDeleteMovimentController } from "../factories/delete-moviment.factory";

export const movimentRouter = Router();

const listMovimentsController = makeListMovimentsController();
const createMovimentController = makeCreateMovimentController();
const updateMovimentController = makeUpdateMovimentController();
const deleteMovimentController = makeDeleteMovimentController();

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

movimentRouter.delete(
  "/:id",
  authValidation,
  (request: Request, response: Response) => {
    deleteMovimentController.handler(request, response);
  }
);
