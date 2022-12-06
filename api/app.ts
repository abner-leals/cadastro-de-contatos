import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { AppError } from "./errors";
import client_routes from "./routers/clients.routes";
import { status_code } from "./status_code";
import "dotenv/config";
import contact_router from "./routers/contacts.routes";

const port = process.env.API_PORT;

const app = express();

app.use(express.json());
app.use(cors());

app.use("/client", client_routes);
app.use("/contact", contact_router);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });
  }
  return response.status(status_code.HTTP_500_INTERNAL_SERVER_ERROR);
});

app.listen(port, () => {
  console.log(`SERVER IS RUNNING AT PORT ${port}`);
});
