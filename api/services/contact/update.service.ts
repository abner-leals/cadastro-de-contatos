import { AppDataSource } from "../../data-source";
import { Contact } from "../../database/models/contact.entity";
import { AppError } from "../../errors";
import { IContactUpdate } from "../../interfaces/contacts";
import { status_code } from "../../status_code";

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
