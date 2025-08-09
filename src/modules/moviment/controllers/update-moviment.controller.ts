import { Request, Response } from "express";

import { Moviment } from "../../../domain/moviment.model";

import { UpdateMovimentUseCase } from "../use-cases/update-moviment.use-case";

export class UpdateMovimentController {
  private readonly updateMovimentService: UpdateMovimentUseCase;

  constructor(updateMovimentUseCase: UpdateMovimentUseCase) {
    this.updateMovimentService = updateMovimentUseCase;
  }

  async handler(request: Request, response: Response): Promise<Response> {
    try {
      const accountId = request?.account?.id;
      const movimentId = Number(request?.params?.id);
      const dataBody = request?.body;

      const moviment = new Moviment(
        movimentId,
        dataBody?.description,
        dataBody?.period,
        dataBody?.pay_date,
        dataBody?.value,
        false,
        dataBody?.type,
        dataBody?.bank,
        accountId
      );

      await this.updateMovimentService.execute(moviment);

      return response.send();
    } catch (err) {
      throw err;
    }
  }
}
