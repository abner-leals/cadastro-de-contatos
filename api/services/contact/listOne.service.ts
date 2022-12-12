import { AppDataSource } from "../../data-source";
import { Contact } from "../../database/models/contact.entity";

export const detailContactService = async (id: string) => {
  const contactRepo = AppDataSource.getRepository(Contact);
  const contact = await contactRepo.findOneBy({ id: id });

  return contact;
};
