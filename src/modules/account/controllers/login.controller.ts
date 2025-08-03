import { Request, Response } from "express";

import { TokenResponse } from "../../../core/dto/token-response.dto";

import { LoginService } from "../use-cases/login.use-case";

import { ILoginRequest } from "../dto/login.interface";

export class LoginController {
  private readonly loginService: LoginService;

  constructor(loginService: LoginService) {
    this.loginService = loginService;
  }

  async handler(
    request: Request,
    response: Response
  ): Promise<Response<TokenResponse>> {
    try {
      const body = request?.body as ILoginRequest;

      const result = await this.loginService.execute(
        body?.email,
        body?.password
      );

      return response.status(201).json(result);
    } catch (error) {
      throw error;
    }
  }
}
