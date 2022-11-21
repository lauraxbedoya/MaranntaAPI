import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Stock } from "../entities/stock.entity";
import { StockImage } from "../entities/stock_image.entity";

@Injectable()
export class StockImagesService {
  constructor(
    @InjectRepository(StockImage) private imageRepo: Repository<StockImage>,
    @InjectRepository(Stock) private stockRepo: Repository<Stock>
  ) { }

  async addImage(data: any) {
    const stock = await this.stockRepo.findOneBy({ id: data.stockId });
    if (!stock) {
      throw new NotFoundException("stock not founded");
    }
    const newImage = new StockImage();
    newImage.stock = stock;
    newImage.url = data.url;
    return this.imageRepo.save(newImage);
  }
}