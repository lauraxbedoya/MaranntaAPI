import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { StockController } from './controllers/stock.controller';
import { Stock } from './entities/stock.entity';
import { StockImage } from './entities/stock_image.entity';
import { StockService } from './services/stock.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Stock, StockImage])],
  controllers: [StockController],
  providers: [StockService, CloudinaryService]
})
export class StockModule { }
