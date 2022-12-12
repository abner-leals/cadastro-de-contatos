import { AppDataSource } from "../../data-source";
import { Client } from "../../database/models/client.entity";
import { AppError } from "../../errors";
import { IUserRequestCreate } from "../../interfaces/client";
import { status_code } from "../../status_code";
import { hashSync } from "bcryptjs";

export const userCreateService = async ({
  full_name,
  telephone,
  email,
  password,
}: IUserRequestCreate) => {
  const userRepository = AppDataSource.getRepository(Client);

  const emailAlreadyExists = (await userRepository.find()).find(
    (cli) => cli.email === email
  );

  if (emailAlreadyExists) {
    throw new AppError("EMAIL JÁ CADASTRADO", status_code.HTTP_409_CONFLICT);
  }

  const user = new Client();

  user.full_name = full_name;
  user.telephone = telephone;
  user.email = email;
  if (password) {
    user.password = hashSync(password, 10);
  }

  userRepository.create(user);
  await userRepository.save(user);
  const { updatedAt, ...newUser } = user;
  return newUser;
};
