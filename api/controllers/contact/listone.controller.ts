import { Request, Response } from "express";
import { AppError, handlerError } from "../../errors";
import { detailContactService } from "../../services/contact/listOne.service";
import { status_code } from "../../status_code";

export const detailContactController = async (req: Request, res: Response) => {
  const { id_contact } = req.params;
  try {
    const client = await detailContactService(id_contact);
    return res.status(status_code.HTTP_200_OK).json(client);
  } catch (err) {
    if (err instanceof AppError) {
      handlerError(err, res);
    }
  }
};
