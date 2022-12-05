import { Client } from "../database/models/client.entity";

export interface IContactsCreate {
  id?: string;
  full_name: string;
  email: string;
  telephone: string;
}

export interface IContactUpdate {
  full_name?: string;
  email?: string;
  telephone?: string;
}
