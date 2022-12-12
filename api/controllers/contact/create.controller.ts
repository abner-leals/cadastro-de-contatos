import { Request, Response } from "express";
import { AppError, handlerError } from "../../errors";
import { createContactService } from "../../services/contact/create.service";
import { status_code } from "../../status_code";

export const createContactController = async (req: Request, res: Response) => {
  try {
    const { full_name, email, telephone } = req.body;
    const { id_client } = req.params;

    const contact = await createContactService(id_client, {
      full_name,
      email,
      telephone,
    });

    return res.status(status_code.HTTP_201_CREATED).json(contact);
  } catch (error) {
    if (error instanceof AppError) {
      handlerError(error, res);
    }
  }
};
