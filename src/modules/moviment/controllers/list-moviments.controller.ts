import { Request, Response } from "express";

import { ListMovimentsGroup } from "../dto/list-moviments.interface";

import { ListMovimentsUseCase } from "../use-cases/list-moviments.use-case";

export class ListMovimentsController {
  private readonly listMovimentsService: ListMovimentsUseCase;

  constructor(listMovimentsUseCase: ListMovimentsUseCase) {
    this.listMovimentsService = listMovimentsUseCase;
  }

  async handler(
    request: Request,
    response: Response
  ): Promise<Response<ListMovimentsGroup>> {
    try {
      const accountId = request.account.id;
      const month = Number(request.query.month);

      const result = await this.listMovimentsService.execute(accountId, month);

      return response.json(result);
    } catch (err) {
      throw err;
    }
  }
}
