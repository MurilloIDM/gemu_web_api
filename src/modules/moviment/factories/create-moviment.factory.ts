import prismaClient from "../../../database/prisma";

import { MovimentRepository } from "../repositories/moviment.repository";
import { CreateMovimentUseCase } from "../use-cases/create-moviment.use-case";
import { CreateMovimentController } from "../controllers/create-moviment.controller";

export const makeCreateMovimentController = () => {
  const movimentRepository = new MovimentRepository(prismaClient);
  const createMovimentUseCase = new CreateMovimentUseCase(movimentRepository);
  const createMovimentController = new CreateMovimentController(
    createMovimentUseCase
  );

  return createMovimentController;
};
