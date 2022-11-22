import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ContactService } from "../services/contact.service";

@Controller('contacts')
export class ContactController {

  constructor(
    private contactService: ContactService
  ) { }

  @Get()
  findAll() {
    return this.contactService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.contactService.findOne(id)
  }

  @Post()
  create(@Body() body: any) {
    return this.contactService.create(body)
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.contactService.remove(id)
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body: any) {
    return this.contactService.update(id, body)
  }
}