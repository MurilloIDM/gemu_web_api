import { NextFunction, Request, Response } from "express";

import { HttpError } from "../core/errors/http.error";

export function errorHandler(
  err: any,
  _request: Request,
  response: Response,
  _next: NextFunction
) {
  if (err instanceof HttpError) {
    return response.status(err.status).json({ error: err.message });
  }

  console.log(err);
  return response.status(500).json({ error: "Internal error" });
}
