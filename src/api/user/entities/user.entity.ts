import { Order } from 'src/api/order/entities/order.entity';
import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserRole } from '../user.enum';

@Entity('users')
export class User extends BaseEntity {

  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  lastName: string;

  @Column({ unique: true, type: 'varchar' })
  email: string;

  @Column({ type: 'varchar', nullable: true })
  password: string;

  @Column({ enum: UserRole, default: UserRole.Customer })
  role: UserRole;

  @Column({ type: 'varchar', nullable: true })
  birthdate: Date;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => Order, (order) => order.user)
  orders: Order[]
}