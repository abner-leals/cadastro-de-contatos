import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  UpdateDateColumn,
  CreateDateColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { IContactsCreate } from "../../interfaces/contacts";
import { Client } from "./client.entity";

@Entity()
export class Contact {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  full_name: string;

  @Column()
  email: string;

  @Column()
  telephone: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne((type) => Client, (user) => user.id, { eager: false })
  client: IContactsCreate;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
