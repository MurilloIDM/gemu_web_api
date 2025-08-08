import { NextFunction, Request, Response } from "express";
import * as yup from "yup";

const createMovimentRequestSchema = yup.object({
  description: yup.string().required("O campo é obrigatório."),
  type: yup.string().required("O campo é obrigatório."),
  value: yup.string().required("O campo é obrigatório."),
  period: yup.string().required("O campo é obrigatório."),
  pay_date: yup.date().required("O campo é obrigatório."),
  bank: yup.object({
    id: yup.number().required("O campo é obrigatório."),
    name: yup.string().required("O campo é obrigatório."),
    code: yup.string().required("O campo é obrigatório."),
  }),
});

export const validateCreateMovimentRequestSchema = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    await createMovimentRequestSchema.validate(request.body, {
      abortEarly: false,
    });
    next();
  } catch (err: any) {
    console.log(err);
    response.status(400).json({ errors: err.errors });
  }
};
