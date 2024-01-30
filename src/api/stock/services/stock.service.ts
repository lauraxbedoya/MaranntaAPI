import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { Repository } from 'typeorm';
import { Stock } from '../entities/stock.entity';
import { StockImage } from '../entities/stock_image.entity';
import { CreateProductDto } from '../stock.dto';

@Injectable()
export class StockService {
  constructor(
    @InjectRepository(Stock)
    private stockRepo: Repository<Stock>,
    @InjectRepository(StockImage)
    private imageRepo: Repository<StockImage>,

    private cloudinary: CloudinaryService,
  ) { }

  findAll() {
    return this.stockRepo.find();
  }

  findOne(id: number) {
    return this.stockRepo.findOneBy({ id })
  }

  create(body: CreateProductDto) {
    return this.stockRepo.save(body)
  }

  async update(id: number, body: any) {
    const product = await this.stockRepo.findOneBy({ id });
    this.stockRepo.merge(product, body);
    return this.stockRepo.save(product);
  }

  async remove(id: number) {
    await this.stockRepo.delete(id)
  }

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
