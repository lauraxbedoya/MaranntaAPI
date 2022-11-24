import { Controller, Param, ParseIntPipe, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { StockImagesService } from "../services/stock_image.service";

@Controller('stock_images')
export class StockImagesController {
  constructor(
    private stockService: StockImagesService
  ) { }

  @Post(':id')
  @UseInterceptors(FileInterceptor('file'))
  addImage(@Param('id', ParseIntPipe) id: number, @UploadedFile() file: Express.Multer.File) {
    return this.stockService.addStockImage(id, file);
  }
}