import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { StockService } from '../services/stock.service';

@Controller('stock')
export class StockController {
  constructor(
    private stockService: StockService
  ) { }

  @Get()
  findAll() {
    return this.stockService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.stockService.findOne(id)
  }

  @Post()
  create(@Body() body: any) {
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
