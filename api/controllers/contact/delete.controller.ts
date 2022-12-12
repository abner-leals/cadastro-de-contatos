import { Request, Response } from "express";
import { AppError, handlerError } from "../../errors";
import { deleteContactService } from "../../services/contact/delete.service";
import { status_code } from "../../status_code";

export const deleteContactController = async (req: Request, res: Response) => {
  try {
    const { id_contact } = req.params;

    await deleteContactService(id_contact);

    return res.status(status_code.HTTP_204_NO_CONTENT).json();
  } catch (error) {
    if (error instanceof AppError) {
      handlerError(error, res);
    }
  }
};
