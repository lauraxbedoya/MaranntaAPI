import { Body, Controller, Get, Post } from "@nestjs/common";
import { OrderService } from "../services/order.service";

@Controller('orders')
export class OrderController {
  constructor(
    private orderService: OrderService
  ) { }

  @Get()
  findAll() {
    return this.orderService.findAll();
  }

  @Post()
  addImage(@Body() body: any) {
    return this.orderService.create(body)
  }
}