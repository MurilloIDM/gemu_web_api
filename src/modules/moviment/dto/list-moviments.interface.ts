import { Moviment } from "../../../domain/moviment.model";

interface ListMovimentsSummary {
  totalInput: string;
  totalOutput: string;
  result: string;
}

interface ListMovimentsForBank {
  summary: ListMovimentsSummary;
  moviments: Moviment[];
}

export interface ListMoviments {
  [T: string]: ListMovimentsForBank;
}
