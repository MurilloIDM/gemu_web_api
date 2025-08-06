import currency from "currency.js";

import { Bank } from "./bank.model";

export enum MovimentTypeEnum {
  INPUT = "INPUT",
  OUTPUT = "OUTPUT",
}

export class Moviment {
  id: number;
  description: string;
  period: string | null;
  pay_date: Date;
  value: string;
  completed: boolean;
  type: MovimentTypeEnum;
  bank: Bank;
  accountId: number;

  constructor(
    id: number,
    description: string,
    period: string | null,
    pay_date: Date,
    value: string,
    completed: boolean,
    type: MovimentTypeEnum,
    bank: Bank,
    accountId: number
  ) {
    this.id = id;
    this.description = description;
    this.period = period;
    this.pay_date = pay_date;
    this.value = value;
    this.completed = completed;
    this.type = type;
    this.bank = bank;
    this.accountId = accountId;
  }

  formatValue(): void {
    this.value = currency(this.value).toString();
  }

  formatValueInReal(): void {
    this.value = currency(Number(this.value) || 0, {
      symbol: "R$ ",
      separator: ".",
      decimal: ",",
    }).format();
  }
}
