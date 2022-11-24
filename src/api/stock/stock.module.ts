import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { StockController } from './controllers/stock.controller';
import { StockImagesController } from './controllers/stock_image.controller';
import { Stock } from './entities/stock.entity';
import { StockImage } from './entities/stock_image.entity';
import { StockService } from './services/stock.service';
import { StockImagesService } from './services/stock_image.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Stock, StockImage])],
  controllers: [StockController, StockImagesController],
  providers: [StockService, StockImagesService, CloudinaryService]
})
export class StockModule { }
