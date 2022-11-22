import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactController } from './controllers/contact.controller';
import { Contact } from './entities/contacts.entity';
import { ContactService } from './services/contact.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Contact])],
  providers: [ContactService],
  controllers: [ContactController],
  exports: [ContactService]
})
export class ContactsModule { }
