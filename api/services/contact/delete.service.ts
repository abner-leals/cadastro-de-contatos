import { AppDataSource } from "../../data-source";
import { Contact } from "../../database/models/contact.entity";
import { AppError } from "../../errors";
import { status_code } from "../../status_code";

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
