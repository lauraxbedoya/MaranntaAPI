import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Stock } from '../entities/stock.entity';

@Injectable()
export class StockService {
  constructor(
    @InjectRepository(Stock)
    private stockRepo: Repository<Stock>
  ) { }

  findAll() {
    return this.stockRepo.find();
  }

  findOne(id: number) {
    return this.stockRepo.findOneBy({ id })
  }

  create(body: any) {
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
}
