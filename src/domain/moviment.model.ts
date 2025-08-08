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
  formatedValue: string;
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
    this.description = String(description).toUpperCase();
    this.period = String(period).toUpperCase();
    this.pay_date = pay_date;
    this.value = value;
    this.formatedValue = value;
    this.completed = completed;
    this.type = type;
    this.bank = bank;
    this.accountId = accountId;
  }

  formatValueInReal(): void {
    this.formatedValue = currency(Number(this.formatedValue) || 0, {
      symbol: "R$ ",
      separator: ".",
      decimal: ",",
    }).format();
  }
}
