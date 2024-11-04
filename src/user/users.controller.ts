import { Controller, Get, Post, Body, Delete, Param, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './users.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: { name: string, email: string, password: string }): Promise<Users> {
    return this.usersService.createUser(createUserDto.name, createUserDto.email, createUserDto.password);
  }

  @Get()
  async findAll(): Promise<Users[]> {
    return this.usersService.findAll();
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
    console.log(`Attempting to delete user with id: ${id}`);
    return this.usersService.deleteUser(id);
  }
}