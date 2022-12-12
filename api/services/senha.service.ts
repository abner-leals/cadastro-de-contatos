import { Request, Response } from "express";
import { status_code } from "../status_code";
import { hash } from "bcryptjs";
// const { hashSync } = require("bcryptjs");

export const SENHASER = async (req: Request, res: Response) => {
  const { senha } = req.body;
  let senhash = await hash(senha, 10);
  return res.status(status_code.HTTP_200_OK).send({ senhash });
};
