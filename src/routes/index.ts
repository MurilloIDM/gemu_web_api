import { Router } from "express";

import { accountRouter } from "../modules/account/routers";
import { bankRouter } from "../modules/moviment/routers/bank.router";
import { movimentRouter } from "../modules/moviment/routers/moviment.router";

export const router = Router();

router.use("/accounts", accountRouter);
router.use("/banks", bankRouter);
router.use("/moviments", movimentRouter);
