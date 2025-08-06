import { Request, Response } from "express";

import { Bank } from "../../../domain/bank.model";

import { ListBanksUseCase } from "../use-cases/list-banks.use-case";

export class ListBanksController {
  private readonly listBanksService: ListBanksUseCase;

  constructor(listBanksUseCase: ListBanksUseCase) {
    this.listBanksService = listBanksUseCase;
  }

  async handler(
    request: Request,
    response: Response
  ): Promise<Response<Bank[]>> {
    try {
      const result = await this.listBanksService.execute();

      return response.json(result);
    } catch (err) {
      throw err;
    }
  }
}
