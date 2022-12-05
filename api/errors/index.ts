import { Response } from "express";

export class AppError extends Error {
  statusCode;

  constructor(message: string, statusCode: number) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

export const handlerError = (err: AppError, res: Response) => {
  const { statusCode, message } = err;
  return res.status(statusCode).json({
    status: "error",
    statusCode,
    message,
  });
};
