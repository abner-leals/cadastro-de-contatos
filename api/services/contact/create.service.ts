import { AppDataSource } from "../../data-source";
import { Client } from "../../database/models/client.entity";
import { Contact } from "../../database/models/contact.entity";
import { AppError } from "../../errors";
import { IContactsCreate } from "../../interfaces/contacts";
import { status_code } from "../../status_code";

export const createContactService = async (
  id_client: string,
  { full_name, email, telephone }: IContactsCreate
) => {
  const contactRepo = AppDataSource.getRepository(Contact);
  const clientRepo = AppDataSource.getRepository(Client);

  const client = await clientRepo.findOneBy({ id: id_client });
  if (!client) {
    throw new AppError(
      "CLIENTE NÃO ENCONTRADO",
      status_code.HTTP_404_NOT_FOUND
    );
  }

  const emailAlreadyExists = (await contactRepo.find()).find(
    (cli) => cli.email === email
  );

  if (emailAlreadyExists) {
    throw new AppError("EMAIL JÁ CADASTRADO", status_code.HTTP_409_CONFLICT);
  }

  const { contacts, createdAt, updatedAt, ...rest } = client;
  const contact = new Contact();
  contact.full_name = full_name;
  contact.email = email;
  contact.telephone = telephone;
  contact.client = rest;

  contactRepo.create(contact);
  await contactRepo.save(contact);

  return contact;
};
