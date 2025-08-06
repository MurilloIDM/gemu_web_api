import { PrismaClient } from "@prisma/client";

import { Bank } from "../../../domain/bank.model";
import { toDomainList } from "../mappers/bank.mapper";

import { IBankRepository } from "./bank.repository.interface";

export class BankRepository implements IBankRepository {
  private readonly prisma: PrismaClient;

  constructor(prismaClient: PrismaClient) {
    this.prisma = prismaClient;
  }

  async listAll(): Promise<Bank[]> {
    const banks = await this.prisma.bank.findMany();

    return toDomainList(banks);
  }
}
