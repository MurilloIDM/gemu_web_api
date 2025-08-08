import { Moviment } from "../../../domain/moviment.model";

export interface IMovimentRepository {
  listAllByAccountIdAndPayDate(
    accountId: number,
    startDate: Date,
    endDate: Date
  ): Promise<Moviment[]>;
  createMoviment(data: Moviment): Promise<void>;
}
