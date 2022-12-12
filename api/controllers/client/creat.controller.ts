import { Request, Response } from "express";
import { AppError, handlerError } from "../../errors";
import { IUserRequestCreate } from "../../interfaces/client";
import { userCreateService } from "../../services/client/create.service";
import { status_code } from "../../status_code";

export const clientCreateController = async (req: Request, res: Response) => {
  const { email, full_name, telephone, password }: IUserRequestCreate =
    req.body;

  try {
    const newUser = await userCreateService({
      email,
      full_name,
      telephone,
      password,
    });

    return res.status(status_code.HTTP_201_CREATED).send(newUser);
  } catch (err) {
    if (err instanceof AppError) {
      handlerError(err, res);
    }
  }
};
