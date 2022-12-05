import { AppDataSource } from "../data-source";
import { Client } from "../database/models/client.entity";
import { Contact } from "../database/models/contact.entity";
import { AppError } from "../errors";
import { IContactsCreate, IContactUpdate } from "../interfaces/contacts";
import { status_code } from "../status_code";

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
export const listContactsService = async () => {
  const contactRepo = AppDataSource.getRepository(Contact);
  const contacts = await contactRepo.find();
  return contacts;
};
export const updateContactService = async (
  id: string,
  data: IContactUpdate
) => {
  const contactRepo = AppDataSource.getRepository(Contact);
  if (data.email) {
    const email_exist = await contactRepo.findOneBy({ email: data.email });
    if (email_exist) {
      if (email_exist.id === id) {
        await contactRepo.update(id, { ...data });
        const contact = await contactRepo.findOneBy({ id: id });
        return contact;
      }
      throw new AppError("EMAIL JÁ ESTÁ EM USO", status_code.HTTP_409_CONFLICT);
    } else {
      await contactRepo.update(id, { ...data });
      const contact = await contactRepo.findOneBy({ id: id });
      return contact;
    }
  }
  try {
    await contactRepo.update(id, { ...data });

    const contact = await contactRepo.findOneBy({ id: id });

    return contact;
  } catch (error) {
    throw new AppError(
      "FALHA NA ATUALIZAÇÃO",
      status_code.HTTP_400_BAD_REQUEST
    );
  }
};
export const deleteContactService = async (id: string) => {
  const contactRepo = AppDataSource.getRepository(Contact);
  const contact = await contactRepo.findOneBy({ id: id });
  if (!contact) {
    throw new AppError(
      "USUÁRIO NÃO ENCONTRADO",
      status_code.HTTP_404_NOT_FOUND
    );
  }
  await contactRepo.delete({ id: id });

  return;
};
