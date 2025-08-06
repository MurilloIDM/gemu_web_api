import prismaClient from "../../../database/prisma";

import { MovimentRepository } from "../repositories/moviment.repository";
import { ListMovimentsUseCase } from "../use-cases/list-moviments.use-case";
import { ListMovimentsController } from "../controllers/list-moviments.controller";

export const makeListMovimentsController = () => {
  const movimentRepository = new MovimentRepository(prismaClient);
  const listMovimentsUseCase = new ListMovimentsUseCase(movimentRepository);
  const listMovimentsController = new ListMovimentsController(
    listMovimentsUseCase
  );

  return listMovimentsController;
};
