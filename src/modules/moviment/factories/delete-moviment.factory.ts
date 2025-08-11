import prismaClient from "../../../database/prisma";

import { MovimentRepository } from "../repositories/moviment.repository";
import { DeleteMovimentUseCase } from "../use-cases/delete-moviment.use-case";
import { DeleteMovimentController } from "../controllers/delete-moviment.controller";

export const makeDeleteMovimentController = () => {
  const movimentRepository = new MovimentRepository(prismaClient);
  const deleteMovimentUseCase = new DeleteMovimentUseCase(movimentRepository);
  const deleteMovimentController = new DeleteMovimentController(
    deleteMovimentUseCase
  );

  return deleteMovimentController;
};
