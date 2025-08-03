import prismaClient from "../../../database/prisma";
import { LoginController } from "../controllers/login.controller";

import { AccountRepository } from "../repositories/account.repository";
import { LoginService } from "../use-cases/login.use-case";

export const makeLoginController = () => {
  const accountRepository = new AccountRepository(prismaClient);
  const loginService = new LoginService(accountRepository);
  const loginController = new LoginController(loginService);

  return loginController;
};
