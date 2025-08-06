import { NextFunction, Request, Response } from "express";
import * as yup from "yup";

const listMovimentsQuerySchema = yup.object({
  month: yup
    .number()
    .transform((_, originalValue) => Number(originalValue))
    .required("O campo é obrigatório.")
    .min(1)
    .max(12),
});

export const validateListMovimentsQueryRequestSchema = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    await listMovimentsQuerySchema.validate(request.query, {
      abortEarly: false,
    });
    next();
  } catch (err: any) {
    response.status(400).json({ errors: err.errors });
  }
};
