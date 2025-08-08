import { Request, Response } from "express";

import { Moviment } from "../../../domain/moviment.model";

import { CreateMovimentUseCase } from "../use-cases/create-moviment.use-case";

export class CreateMovimentController {
  private readonly createMovimentService: CreateMovimentUseCase;

  constructor(createMovimentUseCase: CreateMovimentUseCase) {
    this.createMovimentService = createMovimentUseCase;
  }

  async handler(request: Request, response: Response): Promise<Response> {
    try {
      const accountId = request?.account?.id;
      const dataBody = request?.body;

      const moviment = new Moviment(
        0,
        dataBody?.description,
        dataBody?.period,
        dataBody?.pay_date,
        dataBody?.value,
        false,
        dataBody?.type,
        dataBody?.bank,
        accountId
      );

      await this.createMovimentService.execute(moviment);

      return response.status(201).send();
    } catch (err) {
      throw err;
    }
  }
}
