import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

import { env } from "../core/env";
import { HttpError } from "../core/errors/http.error";
import { HTTP_STATUS } from "../core/constants/http-status";

import { AccountRepository } from "../modules/account/repositories/account.repository";

import prismaClient from "../database/prisma";

export const authValidation = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const authorization = request?.headers.authorization?.split(" ") || [];
  const [suffix, token] = authorization;

  if (suffix !== "Bearer") {
    throw new HttpError("Invalid token.", HTTP_STATUS.UNAUTHORIZED);
  }

  try {
    const isValidateToken = jwt.verify(token, env.SECRET_JWT) as GemuJwtPayload;

    const accountId = isValidateToken?.id;

    const accountRepository = new AccountRepository(prismaClient);
    const account = await accountRepository.findById(accountId);

    if (!account) {
      throw new HttpError("Invalid token.", HTTP_STATUS.UNAUTHORIZED);
    }

    request.account = account;
    next();
  } catch (_err) {
    throw new HttpError("Invalid token.", HTTP_STATUS.UNAUTHORIZED);
  }
};
