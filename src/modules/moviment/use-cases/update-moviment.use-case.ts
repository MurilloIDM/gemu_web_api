import { HttpError } from "../../../core/errors/http.error";
import { HTTP_STATUS } from "../../../core/constants/http-status";

import { Moviment } from "../../../domain/moviment.model";

import { IMovimentRepository } from "../repositories/moviment.repository.interface";

export class UpdateMovimentUseCase {
  private readonly movimentRepository: IMovimentRepository;

  constructor(movimentRepository: IMovimentRepository) {
    this.movimentRepository = movimentRepository;
  }

  async execute(moviment: Moviment): Promise<void> {
    const hasMoviment = await this.movimentRepository.findById(moviment?.id);

    if (!hasMoviment) {
      throw new HttpError("Not found moviment with id.", HTTP_STATUS.NOT_FOUND);
    }

    moviment.completed = hasMoviment?.completed;
    await this.movimentRepository.update(moviment);
  }
}
