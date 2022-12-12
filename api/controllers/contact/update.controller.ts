import { Request, Response } from "express";
import { AppError, handlerError } from "../../errors";
import { updateContactService } from "../../services/contact/update.service";
import { status_code } from "../../status_code";

export const updateContactController = async (req: Request, res: Response) => {
  const { id_contact } = req.params;
  const data = req.body;
  try {
    const contact = await updateContactService(id_contact, data);

    return res.status(status_code.HTTP_202_ACCEPTED).send(contact);
  } catch (err) {
    if (err instanceof AppError) {
      handlerError(err, res);
    }
  }
};
