import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Sizes } from '../stock.enum';

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

  @CreateDateColumn({ nullable: true })
  createdDate: Date;
}