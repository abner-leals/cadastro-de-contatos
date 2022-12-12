import { AppDataSource } from "../../data-source";
import { Contact } from "../../database/models/contact.entity";

export const listContactsService = async () => {
  const contactRepo = AppDataSource.getRepository(Contact);
  const contacts = await contactRepo.find();
  return contacts;
};
