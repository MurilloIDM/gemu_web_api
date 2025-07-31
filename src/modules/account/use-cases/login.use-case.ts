import jwt from "jsonwebtoken";

import { env } from "../../../core/env";
import { TokenResponse } from "../../../core/dto/token-response.dto";

import { IAccountRepository } from "../repositories/account.repository.interface";
import { HttpError } from "../../../core/errors/http.error";

export class LoginService {
  private readonly accountRepository: IAccountRepository;

  constructor(accountRepository: IAccountRepository) {
    this.accountRepository = accountRepository;
  }

  async execute(email: string, password: string): Promise<TokenResponse> {
    const account = await this.accountRepository.findByEmail(email);

    if (account == null) {
      throw new HttpError("Invalid user in login.", HTTP_STATUS.FORBIDDEN);
    }

    const isValidPassword = await account?.comparePassword(password);

    if (!isValidPassword) {
      throw new HttpError("Invalid user in login.", HTTP_STATUS.FORBIDDEN);
    }

    const token = jwt.sign({ id: account?.id }, env.SECRET_JWT, {
      expiresIn: "1h",
    });

    return { token };
  }
}
