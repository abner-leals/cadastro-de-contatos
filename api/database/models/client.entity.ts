import {
  Entity,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  OneToMany,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Contact } from "./contact.entity";

@Entity()
export class Client {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  full_name: string;

  @Column()
  email: string;

  @Column()
  telephone: string;

  @OneToMany((type) => Contact, (contact) => contact.client, {
    eager: true,
    cascade: true,
    onDelete: "CASCADE",
  })
  contacts?: Contact[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
