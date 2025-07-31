import { Account as AccountRaw } from "@prisma/client";

import { Account } from "../../../domain/account.model";

export const toDomain = (raw: AccountRaw): Account => {
  return new Account(raw.id, raw.email, raw.password);
};
