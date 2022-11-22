import { Stock } from "src/api/stock/entities/stock.entity";
import { User } from "src/api/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('order')
export class Order {
  @PrimaryGeneratedColumn('increment')
  public id: number;

  @Column()
  stockId: number;

  @Column()
  userId: number;

  @ManyToOne(() => Stock, (stock) => stock.orders)
  @JoinColumn({ name: 'stockId' })
  stock: Stock;

  @ManyToOne(() => User, (user) => user.orders)
  @JoinColumn({ name: 'userId' })
  user: User;

  @CreateDateColumn()
  createdAt: Date;
}