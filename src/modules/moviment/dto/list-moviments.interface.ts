import { Moviment } from "../../../domain/moviment.model";

export interface ListMovimentsGroup {
  [T: string]: Moviment[];
}
