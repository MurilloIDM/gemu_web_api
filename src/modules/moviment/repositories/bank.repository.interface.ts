import { Bank } from "../../../domain/bank.model";

export interface IBankRepository {
  listAll(): Promise<Bank[]>;
}
