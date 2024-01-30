import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import * as bcrypt from 'bcrypt';
import { CreateUserAdminDto } from '../user.dto';


@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) { }

  findAll() {
    return this.userRepo.find();
  }

  findOne(id: number) {
    return this.userRepo.findOneBy({ id });
  }

  findByEmail(email: string) {
    return this.userRepo.findOneBy({ email });
  }

  async remove(id: number): Promise<void> {
    await this.userRepo.delete(id);
  }

  async createUserAdmin(body: CreateUserAdminDto) {
    const saltOrRounds = 10;
    const password = body.password;
    const hash = await bcrypt.hash(password, saltOrRounds);

    return this.userRepo.save({ ...body, password: hash })
  }

  async create(user: Partial<User>) {
    let hash = null;
    if (user.password) {
      const saltOrRounds = 10;
      const password = user.password;
      hash = await bcrypt.hash(password, saltOrRounds);
    }
    return this.userRepo.save({ ...user, password: hash });
  }

  async update(id: number, body: any) {
    const user = await this.userRepo.findOneBy({ id });
    this.userRepo.merge(user, body);
    return this.userRepo.save(user);
  }

  createOrder(body: any) {
    const user = this.userRepo.create(body);
    return this.userRepo.save(user)
  }
}