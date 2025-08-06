import { Request, Response, Router } from "express";

import { makeListBanksController } from "../factories/list-banks.factory";

import { authValidation } from "../../../middlewares/auth-validation.middleware";

export const bankRouter = Router();

const listBanksController = makeListBanksController();

bankRouter.get("/", authValidation, (request: Request, response: Response) => {
  return listBanksController.handler(request, response);
});
