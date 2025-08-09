import { PrismaClient } from "@prisma/client";

import { Moviment } from "../../../domain/moviment.model";

import { toDomain, toDomainList } from "../mappers/moviment.mapper";

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

  async create(data: Moviment): Promise<void> {
    await this.prisma.moviment.create({
      data: {
        description: data?.description,
        type: data?.type,
        value: data?.value,
        pay_date: data?.pay_date,
        period: data?.period,
        accountId: data?.accountId,
        bankId: data?.bank?.id,
      },
    });
  }

  async findById(id: number): Promise<Moviment | null> {
    const moviment = await this.prisma.moviment.findUnique({
      where: { id },
      include: { bank: true },
    });

    if (!moviment) return null;

    return toDomain(moviment);
  }

  async update(data: Moviment): Promise<void> {
    await this.prisma.moviment.update({
      where: { id: data?.id },
      data: {
        description: data?.description,
        type: data?.type,
        value: data?.value,
        pay_date: data?.pay_date,
        period: data?.period,
        accountId: data?.accountId,
        bankId: data?.bank?.id,
      },
    });
  }
}
