import groupBy from "lodash/groupBy";

import { ListMoviments } from "../dto/list-moviments.interface";

import { IMovimentRepository } from "../repositories/moviment.repository.interface";
import { MovimentTypeEnum } from "../../../domain/moviment.model";
import currency from "currency.js";

export class ListMovimentsUseCase {
  private readonly movimentRepository: IMovimentRepository;

  constructor(movimentRepository: IMovimentRepository) {
    this.movimentRepository = movimentRepository;
  }

  async execute(accountId: number, month: number): Promise<ListMoviments> {
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

    const result = {} as any;

    const movimentsGroupByBank = groupBy(
      moviments,
      (moviment) => moviment.bank?.name
    );

    const BRL = (value: number) =>
      currency(value, { symbol: "R$ ", separator: ".", decimal: "," }).format();

    for (const bankName in movimentsGroupByBank) {
      const summary = {
        sumInput: "0",
        sumOutput: "0",
        result: "0",
      };

      movimentsGroupByBank[bankName].forEach((moviment) => {
        if (moviment.type === MovimentTypeEnum.INPUT) {
          summary.sumInput = currency(summary.sumInput)
            .add(currency(moviment.value))
            .toString();
          return;
        }

        summary.sumOutput = currency(summary.sumOutput)
          .add(moviment.value)
          .toString();
      });

      summary.result = currency(summary.sumInput)
        .subtract(summary.sumOutput)
        .toString();

      summary.sumInput = BRL(Number(summary.sumInput));
      summary.sumOutput = BRL(Number(summary.sumOutput));
      summary.result = BRL(Number(summary.result));

      result[bankName] = {
        summary,
        moviments: movimentsGroupByBank[bankName],
      };
    }

    return result;
  }
}
