import { IClientUpdate, IUserRequestCreate } from "../interfaces/client";
import { AppDataSource } from "../data-source";
import { Client } from "../database/models/client.entity";
import { status_code } from "../status_code";
import { AppError } from "../errors";

export const userCreateService = async ({
  full_name,
  telephone,
  email,
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

  userRepository.create(user);
  await userRepository.save(user);
  const { updatedAt, ...newUser } = user;
  return newUser;
};

export const listClientsService = async () => {
  const clientRepository = AppDataSource.getRepository(Client);
  const clients = await clientRepository.find();
  return clients;
};

export const updateClientService = async (id: string, data: IClientUpdate) => {
  const clientRepo = AppDataSource.getRepository(Client);

  if (data.email) {
    const email_exist = await clientRepo.findOneBy({ email: data.email });
    if (email_exist) {
      if (email_exist.id === id) {
        await clientRepo.update(id, { ...data });
        const client = await clientRepo.findOneBy({ id: id });
        return client;
      }
      throw new AppError("EMAIL JÁ ESTÁ EM USO", status_code.HTTP_409_CONFLICT);
    } else {
      await clientRepo.update(id, { ...data });
      const client = await clientRepo.findOneBy({ id: id });
      return client;
    }
  }
  try {
    await clientRepo.update(id, { ...data });

    const client = await clientRepo.findOneBy({ id: id });

    return client;
  } catch (error) {
    throw new AppError(
      "FALHA NA ATUALIZAÇÃO",
      status_code.HTTP_400_BAD_REQUEST
    );
  }
};

export const deleteClientService = async (id: string) => {
  const clientRepo = AppDataSource.getRepository(Client);
  const client = await clientRepo.findOneBy({ id: id });

  if (!client) {
    throw new AppError(
      "USUÁRIO NÃO ENCONTRADO",
      status_code.HTTP_404_NOT_FOUND
    );
  }
  await clientRepo.delete({ id: id });

  return;
};

export const detailClientService = async (id: string) => {
  const clientRepo = AppDataSource.getRepository(Client);
  const client = await clientRepo.findOneBy({ id: id });
  return client;
};
