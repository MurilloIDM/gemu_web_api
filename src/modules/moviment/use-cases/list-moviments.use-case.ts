import groupBy from "lodash/groupBy";

import { ListMovimentsGroup } from "../dto/list-moviments.interface";

import { IMovimentRepository } from "../repositories/moviment.repository.interface";

export class ListMovimentsUseCase {
  private readonly movimentRepository: IMovimentRepository;

  constructor(movimentRepository: IMovimentRepository) {
    this.movimentRepository = movimentRepository;
  }

  async execute(accountId: number, month: number): Promise<ListMovimentsGroup> {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    const startDate = new Date(currentYear, month - 1, 1);
    const endDate = new Date(currentYear, month, 1);

    const moviments =
      await this.movimentRepository.listAllByAccountIdAndPayDate(
        accountId,
        startDate,
        endDate
      );

    const movimentsGroupByBank = groupBy(
      moviments,
      (moviment) => moviment.bank?.name
    );

    return movimentsGroupByBank;
  }
}
