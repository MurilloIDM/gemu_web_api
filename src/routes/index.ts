import { Router } from "express";

import { accountRouter } from "../modules/account/routers";
import { bankRouter } from "../modules/moviment/routers/bank.router";

export const router = Router();

router.use("/accounts", accountRouter);
router.use("/banks", bankRouter);
