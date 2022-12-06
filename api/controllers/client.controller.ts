import { Request, Response } from "express";
import { AppError, handlerError } from "../errors";
import { IUserRequestCreate } from "../interfaces/client";
import {
  listClientsService,
  userCreateService,
  updateClientService,
  deleteClientService,
  detailClientService,
} from "../services/client.service";
import { status_code } from "../status_code";

export const userCreateController = async (req: Request, res: Response) => {
  const { email, full_name, telephone }: IUserRequestCreate = req.body;

  try {
    const newUser = await userCreateService({
      email,
      full_name,
      telephone,
    });

    return res.status(status_code.HTTP_201_CREATED).send(newUser);
  } catch (err) {
    if (err instanceof AppError) {
      handlerError(err, res);
    }
  }
};

export const userListController = async (req: Request, res: Response) => {
  try {
    const user = await listClientsService();
    return res.status(status_code.HTTP_200_OK).send(user);
  } catch (err) {
    if (err instanceof AppError) {
      handlerError(err, res);
    }
  }
};

export const userUpdateController = async (req: Request, res: Response) => {
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

export const deleteClientController = async (req: Request, res: Response) => {
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
export const detailClienttController = async (req: Request, res: Response) => {
  const { id_contact } = req.params;
  const client = await detailClientService(id_contact);
  return res.status(status_code.HTTP_200_OK).json(client);
};
