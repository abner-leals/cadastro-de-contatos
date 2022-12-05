import { Request, Response } from "express";
import { AppError, handlerError } from "../errors";
import {
  createContactService,
  deleteContactService,
  listContactsService,
  updateContactService,
} from "../services/contacts.service";
import { status_code } from "../status_code";

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

export const listContactsController = async (req: Request, res: Response) => {
  const contacts = await listContactsService();
  return res.json(contacts);
};

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
