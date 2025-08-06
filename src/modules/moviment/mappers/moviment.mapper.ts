import { Moviment as MovimentRaw, Bank as BankRaw } from "@prisma/client";

import { Moviment, MovimentTypeEnum } from "../../../domain/moviment.model";

type MovimentWithBankRaw = MovimentRaw & {
  bank: BankRaw;
};

export const toDomain = (movimentRaw: MovimentWithBankRaw): Moviment => {
  return new Moviment(
    movimentRaw?.id,
    movimentRaw?.description,
    movimentRaw?.period,
    movimentRaw?.pay_date,
    movimentRaw?.value,
    movimentRaw?.completed,
    MovimentTypeEnum[movimentRaw?.type],
    movimentRaw?.bank,
    movimentRaw?.accountId
  );
};

export const toDomainList = (moviments: MovimentWithBankRaw[]): Moviment[] => {
  return moviments.map((movimentRaw) => {
    const moviment = toDomain(movimentRaw);
    moviment.formatValueInReal();

    return moviment;
  });
};
