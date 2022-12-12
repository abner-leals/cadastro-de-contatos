import { AppDataSource } from "../../data-source";
import { Client } from "../../database/models/client.entity";
import { AppError } from "../../errors";
import { status_code } from "../../status_code";

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
