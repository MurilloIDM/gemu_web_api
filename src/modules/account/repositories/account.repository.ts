import { PrismaClient } from "@prisma/client";

import { Account } from "../../../domain/account.model";

import { toDomain } from "../mappers/account.mapper";

import { IAccountRepository } from "./account.repository.interface";

export class AccountRepository implements IAccountRepository {
  private readonly prisma: PrismaClient;

  constructor(prismaClient: PrismaClient) {
    this.prisma = prismaClient;
  }

  async findByEmail(email: string): Promise<Account | null> {
    const account = await this.prisma.account.findUnique({
      where: { email },
    });

    if (!account) {
      return null;
    }

    return toDomain(account);
  }
}
