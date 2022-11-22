import { Order } from 'src/api/order/entities/order.entity';
import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Categories, Sizes } from '../stock.enum';
import { StockImage } from './stock_image.entity';

@Entity('stock')
export class Stock extends BaseEntity {

  @PrimaryGeneratedColumn('increment')
  public id: number;

  @Column()
  public style: string;

  @Column()
  public reference: string;

  @Column()
  public color: string;

  @Column({
    type: 'enum',
    enum: Sizes,
    default: Sizes.U
  })
  public size: Sizes;

  @Column({ name: 'breast_size' })
  public breastsize: number;

  @Column()
  public quantity: number;

  @Column()
  public price: number;

  @Column({ type: 'enum', enum: Categories, default: Categories.Otros })
  public categories: Categories;

  @CreateDateColumn({ nullable: true })
  createdDate: Date;

  @OneToMany(() => StockImage, (image) => image.stock)
  stockImages: StockImage[]

  @OneToMany(() => Order, (order) => order.stock)
  orders: Order[]
}