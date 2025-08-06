import { PrismaClient } from "@prisma/client";

import { Moviment } from "../../../domain/moviment.model";

import { toDomainList } from "../mappers/moviment.mapper";

import { IMovimentRepository } from "./moviment.repository.interface";

export class MovimentRepository implements IMovimentRepository {
  private readonly prisma: PrismaClient;

  constructor(prismaClient: PrismaClient) {
    this.prisma = prismaClient;
  }

  async listAllByAccountIdAndPayDate(
    accountId: number,
    startDate: Date,
    endDate: Date
  ): Promise<Moviment[]> {
    const moviments = await this.prisma.moviment.findMany({
      where: {
        accountId,
        pay_date: {
          gte: startDate,
          lt: endDate,
        },
      },
      include: {
        bank: true,
      },
      orderBy: {
        type: "asc",
      },
    });

    return toDomainList(moviments);
  }
}
