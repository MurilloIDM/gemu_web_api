import { NextFunction, Request, Response } from "express";
import * as yup from "yup";

const loginRequestSchema = yup.object({
  email: yup
    .string()
    .email("O e-mail deve possuir um valor válido.")
    .required("O campo é obrigatório."),
  password: yup.string().required("O campo é obrigatório."),
});

export const validateLoginRequestSchema = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    await loginRequestSchema.validate(request.body, { abortEarly: false });
    next();
  } catch (err: any) {
    response.status(400).json({ errors: err.errors });
  }
};
