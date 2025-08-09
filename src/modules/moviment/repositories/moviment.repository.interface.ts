import { Moviment } from "../../../domain/moviment.model";

export interface IMovimentRepository {
  listAllByAccountIdAndPayDate(
    accountId: number,
    startDate: Date,
    endDate: Date
  ): Promise<Moviment[]>;
  create(data: Moviment): Promise<void>;
  findById(id: number): Promise<Moviment | null>;
  update(data: Moviment): Promise<void>;
}
