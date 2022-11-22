import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('contacts')
export class Contact extends BaseEntity {

  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ nullable: false })
  fullName: string;

  @Column({ nullable: false })
  email: string;

  @Column({ type: "varchar", nullable: true })
  phone: string;

  @Column({ nullable: false })
  message: string;
}