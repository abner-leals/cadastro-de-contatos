import { Request, Response } from "express";
import { AppError, handlerError } from "../../errors";
import { listContactsService } from "../../services/contact/list.service";

export const listContactsController = async (req: Request, res: Response) => {
  try {
    const contacts = await listContactsService();
    return res.json(contacts);
  } catch (err) {
    if (err instanceof AppError) {
      handlerError(err, res);
    }
  }
};
