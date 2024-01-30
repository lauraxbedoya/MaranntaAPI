import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { CreateUserAdminDto, CreateUserDto } from '../user.dto';
import { UserRole } from '../user.enum';

@Controller('api/users')
export class UserController {
  constructor(private userService: UserService) { }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.userService.findOne(id)
  }

  @Get()
  findByEmail(@Body() email: string) {
    return this.userService.findByEmail(email)
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.userService.remove(id)
  }

  @Post('admin')
  createUserAdmin(@Body() body: CreateUserAdminDto) {
    return this.userService.createUserAdmin({ ...body, role: UserRole.Admin });
  }

  @Post()
  create(@Body() body: CreateUserDto) {
    return this.userService.create({ ...body, role: UserRole.Customer });
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body: any) {
    return this.userService.update(id, body)
  }

  @Post()
  addUser(@Body() body: any) {
    return this.userService.createOrder(body)
  }
}
