import { Router } from "express";
import {
  createContactController,
  listContactsController,
  updateContactController,
  deleteContactController,
} from "../controllers/contact.controller";

const contact_router = Router();

contact_router.get("", listContactsController);
contact_router.post("/:id_client", createContactController);
contact_router.patch("/:id_contact", updateContactController);
contact_router.delete("/:id_contact", deleteContactController);

export default contact_router;
