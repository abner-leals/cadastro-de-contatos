import { Router } from "express";

const client_routes = Router();

import { clientCreateController } from "../controllers/client/creat.controller";
import { clientDeleteController } from "../controllers/client/delete.controller";
import { clientListController } from "../controllers/client/list.controller";
import { clientOneListController } from "../controllers/client/listone.controller";
import { clientUpdateController } from "../controllers/client/update.controller";
import { SENHASER } from "../services/senha.service";

client_routes.post("", clientCreateController);
client_routes.post("/senha", SENHASER);
client_routes.get("", clientListController);
client_routes.patch("/:id_client", clientUpdateController);
client_routes.delete("/:id_client", clientDeleteController);
client_routes.get("/:id_client", clientOneListController);
export default client_routes;
