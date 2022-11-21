import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Stock } from "./stock.entity";

@Entity('stock_image')
export class StockImage {

  @PrimaryGeneratedColumn('increment')
  public id: number;

  @Column({ nullable: false })
  public url: string

  @ManyToOne(() => Stock, (stock) => stock.stockImages)
  @JoinColumn({ name: 'stock_id' })
  stock: Stock
}