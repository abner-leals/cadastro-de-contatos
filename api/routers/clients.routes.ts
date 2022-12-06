import { Router } from "express";

const client_routes = Router();

import {
  userCreateController,
  userListController,
  userUpdateController,
  deleteClientController,
  detailClienttController,
} from "../controllers/client.controller";

client_routes.post("", userCreateController);
client_routes.get("", userListController);
client_routes.patch("/:id_client", userUpdateController);
client_routes.delete("/:id_client", deleteClientController);
client_routes.get("/:id_client", detailClienttController);
export default client_routes;
