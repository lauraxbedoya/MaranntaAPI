import { Body, Controller, Post } from "@nestjs/common";
import { StockImagesService } from "../services/stock_image.service";

@Controller('api/images')
export class StockImagesController {
  constructor(
    private stockService: StockImagesService
  ) { }

  @Post()
  addImage(@Body() body: any) {
    return this.stockService.addImage(body)
  }
}