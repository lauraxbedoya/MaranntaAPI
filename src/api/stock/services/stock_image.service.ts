import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CloudinaryService } from "src/cloudinary/cloudinary.service";
import { Repository } from "typeorm";
import { Stock } from "../entities/stock.entity";
import { StockImage } from "../entities/stock_image.entity";

@Injectable()
export class StockImagesService {
  constructor(
    @InjectRepository(StockImage) private imageRepo: Repository<StockImage>,
    @InjectRepository(Stock) private stockRepo: Repository<Stock>,
    private cloudinary: CloudinaryService
  ) { }

  async addStockImage(stockId: number, file: Express.Multer.File) {
    const stock = await this.stockRepo.findOneBy({ id: stockId });
    if (!stock) {
      throw new NotFoundException("stock not founded");
    }

    const fileResp = await this.uploadImageToCloudinary(file);

    const newImage = new StockImage();
    newImage.stock = stock;
    newImage.url = fileResp.secure_url;
    return this.imageRepo.save(newImage);
  }

  private async uploadImageToCloudinary(file: Express.Multer.File) {
    return await this.cloudinary.uploadImage(file, 'Marannta/stock').catch(() => {
      throw new BadRequestException('Invalid file type.');
    });
  }
}