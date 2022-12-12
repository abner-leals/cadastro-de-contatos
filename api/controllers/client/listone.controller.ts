import { Request, Response } from "express";
import { AppError, handlerError } from "../../errors";
import { detailClientService } from "../../services/client/listOne.service";
import { status_code } from "../../status_code";

export const clientOneListController = async (req: Request, res: Response) => {
  const { id_contact } = req.params;
  try {
    const client = await detailClientService(id_contact);
    return res.status(status_code.HTTP_200_OK).json(client);
  } catch (err) {
    if (err instanceof AppError) {
      handlerError(err, res);
    }
  }
};
