import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { StockService } from '../services/stock.service';
import { CreateProductDto } from '../stock.dto';

@Controller('stock')
export class StockController {
  constructor(
    private stockService: StockService,
  ) { }

  @Post(':id')
  @UseInterceptors(FileInterceptor('file'))
  addImage(@Param('id', ParseIntPipe) id: number, @UploadedFile() file: Express.Multer.File) {
    return this.stockService.addStockImage(id, file);
  }

  @Get()
  findAll() {
    return this.stockService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.stockService.findOne(id)
  }

  @Post()
  create(@Body() body: CreateProductDto) {
    return this.stockService.create(body)
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body: any) {
    return this.stockService.update(id, body)
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.stockService.remove(id)
  }
}
