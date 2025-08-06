import prismaClient from "../../../database/prisma";

import { BankRepository } from "../repositories/bank.repository";
import { ListBanksUseCase } from "../use-cases/list-banks.use-case";
import { ListBanksController } from "../controllers/list-banks.controller";

export const makeListBanksController = () => {
  const bankRepository = new BankRepository(prismaClient);
  const listBanksService = new ListBanksUseCase(bankRepository);
  const listBanksController = new ListBanksController(listBanksService);

  return listBanksController;
};
