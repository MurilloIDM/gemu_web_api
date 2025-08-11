import { IMovimentRepository } from "../repositories/moviment.repository.interface";

import { HttpError } from "../../../core/errors/http.error";
import { HTTP_STATUS } from "../../../core/constants/http-status";

export class DeleteMovimentUseCase {
  private readonly movimentRepository: IMovimentRepository;

  constructor(movimentRepository: IMovimentRepository) {
    this.movimentRepository = movimentRepository;
  }

  async execute(accountId: number, id: number): Promise<void> {
    const hasMoviment = await this.movimentRepository.findById(id);

    if (!hasMoviment) {
      throw new HttpError("Not found moviment with id.", HTTP_STATUS.NOT_FOUND);
    }

    if (hasMoviment.accountId !== accountId) {
      throw new HttpError(
        "Invalid moviment in user logged.",
        HTTP_STATUS.BAD_REQUEST
      );
    }

    await this.movimentRepository.delete(id);
  }
}
