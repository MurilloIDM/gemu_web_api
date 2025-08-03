import { Router } from "express";

import { accountRouter } from "../modules/account/routers";

export const router = Router();

router.use("/account", accountRouter);
