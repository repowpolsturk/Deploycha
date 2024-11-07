import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { TypesService } from './types.service';
import { CreateTypeDto } from '../types/dto/create-type.dto';
import { UpdateTypeDto } from '../types/dto/update-type.dto';
import { Type } from '../types/model/type.model';

@Controller('types')
export class TypesController {
  constructor(private readonly typesService: TypesService) {}

  @Post()
  async create(@Body() createTypeDto: CreateTypeDto): Promise<Type> {
    return this.typesService.create(createTypeDto);
  }

  @Get()
  async findAll(): Promise<Type[]> {
    return this.typesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Type> {
    return this.typesService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateTypeDto: UpdateTypeDto,
  ): Promise<Type> {
    return this.typesService.update(id, updateTypeDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    await this.typesService.remove(id);
  }
}
