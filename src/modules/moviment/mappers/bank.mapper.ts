import { Bank as BankRaw } from "@prisma/client";

import { Bank } from "../../../domain/bank.model";

export const toDomain = (raw: BankRaw) => {
  return new Bank(raw?.id, raw?.name, raw?.code);
};

export const toDomainList = (rows: BankRaw[]) => {
  return rows.map((raw: BankRaw) => toDomain(raw));
};
