import { PrismaClient } from "@prisma/client";
import { Account } from "../domain/account.model";
import { JwtPayload } from "jsonwebtoken";

declare global {
  var prisma: PrismaClient | undefined;

  namespace Express {
    interface Request {
      account: Account;
    }
  }

  interface GemuJwtPayload extends JwtPayload {
    id: number;
    sub: string;
  }
}

export {};
