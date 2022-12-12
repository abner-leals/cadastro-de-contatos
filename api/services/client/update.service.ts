import { AppDataSource } from "../../data-source";
import { Client } from "../../database/models/client.entity";
import { AppError } from "../../errors";
import { IClientUpdate } from "../../interfaces/client";
import { status_code } from "../../status_code";

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
