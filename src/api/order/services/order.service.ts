import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Order } from "../entities/order.entity";

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private orderRepo: Repository<Order>
  ) { }

  findAll() {
    return this.orderRepo.find({
      relations: ['user', 'stock']
    })
  }

  async create(body: any) {
    const newOrder = new Order();
    newOrder.userId = body.userId;
    newOrder.stockId = body.stockId;
    return this.orderRepo.save(newOrder);
  }
}