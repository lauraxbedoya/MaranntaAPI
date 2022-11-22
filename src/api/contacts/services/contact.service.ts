import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Contact } from "../entities/contacts.entity";

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(Contact)
    private contactRepo: Repository<Contact>
  ) { }

  findAll() {
    return this.contactRepo.find();
  }

  findOne(id: number) {
    return this.contactRepo.findOneBy({ id })
  }

  create(body: any) {
    return this.contactRepo.save(body)
  }

  async remove(id: number): Promise<void> {
    await this.contactRepo.delete(id)
  }

  async update(id: number, body: any) {
    const user = await this.contactRepo.findOneBy({ id });
    this.contactRepo.merge(user, body);
    return this.contactRepo.save(user);
  }
}