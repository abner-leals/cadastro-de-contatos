import { AppDataSource } from "../../data-source";
import { Client } from "../../database/models/client.entity";

export const detailClientService = async (id: string) => {
  const clientRepo = AppDataSource.getRepository(Client);
  const client = await clientRepo.findOneBy({ id: id });
  return client;
};
