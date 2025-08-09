import prismaClient from "../../../database/prisma";

import { MovimentRepository } from "../repositories/moviment.repository";
import { UpdateMovimentUseCase } from "../use-cases/update-moviment.use-case";
import { UpdateMovimentController } from "../controllers/update-moviment.controller";

export const makeUpdateMovimentController = () => {
  const movimentRepository = new MovimentRepository(prismaClient);
  const updateMovimentUseCase = new UpdateMovimentUseCase(movimentRepository);
  const updateMovimentController = new UpdateMovimentController(
    updateMovimentUseCase
  );

  return updateMovimentController;
};
