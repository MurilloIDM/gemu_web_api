import { Account } from "../../../domain/account.model";

export interface IAccountRepository {
  findByEmail(email: string): Promise<Account | null>;
}
