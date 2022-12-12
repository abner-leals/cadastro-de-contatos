import { Request, Response } from "express";
import { AppError, handlerError } from "../../errors";
import { deleteClientService } from "../../services/client/delete.service";
import { status_code } from "../../status_code";

export const clientDeleteController = async (req: Request, res: Response) => {
  try {
    const { id_client } = req.params;

    await deleteClientService(id_client);

    return res.status(status_code.HTTP_204_NO_CONTENT).json();
  } catch (error) {
    if (error instanceof AppError) {
      handlerError(error, res);
    }
  }
};
