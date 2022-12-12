import { Request, Response } from "express";
import { AppError, handlerError } from "../../errors";
import { listClientsService } from "../../services/client/list.service";
import { status_code } from "../../status_code";

export const clientListController = async (req: Request, res: Response) => {
  try {
    const user = await listClientsService();
    return res.status(status_code.HTTP_200_OK).send(user);
  } catch (err) {
    if (err instanceof AppError) {
      handlerError(err, res);
    }
  }
};
