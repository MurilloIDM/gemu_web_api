import { Moviment } from "../../../domain/moviment.model";

import { IMovimentRepository } from "../repositories/moviment.repository.interface";

export class CreateMovimentUseCase {
  private readonly movimentRepository: IMovimentRepository;

  constructor(movimentRepository: IMovimentRepository) {
    this.movimentRepository = movimentRepository;
  }

  async execute(moviment: Moviment): Promise<void> {
    await this.movimentRepository.create(moviment);
  }
}
