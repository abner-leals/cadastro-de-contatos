import { Request, Response } from "express";
import { AppError, handlerError } from "../../errors";
import { updateClientService } from "../../services/client/update.service";
import { status_code } from "../../status_code";

export const clientUpdateController = async (req: Request, res: Response) => {
  const { id_client } = req.params;
  const data = req.body;

  try {
    const client = await updateClientService(id_client, data);

    return res.status(status_code.HTTP_202_ACCEPTED).send(client);
  } catch (err) {
    if (err instanceof AppError) {
      handlerError(err, res);
    }
  }
};
