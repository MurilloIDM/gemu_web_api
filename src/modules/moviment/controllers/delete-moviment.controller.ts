import { Request, Response } from "express";

import { DeleteMovimentUseCase } from "../use-cases/delete-moviment.use-case";

export class DeleteMovimentController {
  private readonly deleteMovimentService: DeleteMovimentUseCase;

  constructor(deleteMovimentService: DeleteMovimentUseCase) {
    this.deleteMovimentService = deleteMovimentService;
  }

  async handler(request: Request, response: Response): Promise<Response> {
    try {
      const accountId = request?.account?.id;
      const id = Number(request?.params?.id);

      await this.deleteMovimentService.execute(accountId, id);

      return response.send();
    } catch (err) {
      throw err;
    }
  }
}
