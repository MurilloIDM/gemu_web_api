import { Bank } from "../../../domain/bank.model";

import { IBankRepository } from "../repositories/bank.repository.interface";

export class ListBanksUseCase {
  private readonly bankRepository: IBankRepository;

  constructor(bankRepository: IBankRepository) {
    this.bankRepository = bankRepository;
  }

  async execute(): Promise<Bank[]> {
    const banks = await this.bankRepository.listAll();

    return banks;
  }
}
