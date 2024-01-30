import { Order } from 'src/api/order/entities/order.entity';
import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Categories, Sizes } from '../stock.enum';
import { StockImage } from './stock_image.entity';

@Entity('stock')
export class Stock extends BaseEntity {

  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'enum', enum: Categories, nullable: false })
  categories: Categories;

  @Column({ type: 'varchar', nullable: false })
  reference: string;

  @Column({ type: 'varchar' })
  color: string;

  @Column({
    type: 'enum',
    enum: Sizes,
    default: Sizes.U
  })
  size: Sizes;

  @Column({ name: 'breast_size', type: 'varchar' })
  breastsize: string;

  @Column({ type: 'integer', nullable: false })
  quantity: number;

  @Column({ type: 'integer', nullable: false })
  price: number;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => StockImage, (image) => image.stock)
  stockImages: StockImage[]

  @OneToMany(() => Order, (order) => order.stock)
  orders: Order[]
}