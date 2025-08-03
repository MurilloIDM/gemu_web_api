import { Request, Response, Router } from "express";

import { makeLoginController } from "../factories/login.factory";

import { validateLoginRequestSchema } from "../../../middlewares/login-request-validation.middleware";

export const accountRouter = Router();

const loginController = makeLoginController();

accountRouter.post(
  "/auth",
  validateLoginRequestSchema,
  (request: Request, response: Response) =>
    loginController.handler(request, response)
);
