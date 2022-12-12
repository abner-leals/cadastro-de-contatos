import { AppDataSource } from "../../data-source";
import { Client } from "../../database/models/client.entity";

export const listClientsService = async () => {
  const clientRepository = AppDataSource.getRepository(Client);
  const clients = await clientRepository.find();
  return clients;
};
