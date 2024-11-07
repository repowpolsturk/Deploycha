import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Type } from '../types/model/type.model';
import { CreateTypeDto } from '../types/dto/create-type.dto';
import { UpdateTypeDto } from '../types/dto/update-type.dto';

@Injectable()
export class TypesService {
  constructor(
    @InjectModel(Type)
    private typeModel: typeof Type,
  ) {}

  async create(createTypeDto: CreateTypeDto): Promise<Type> {
    return this.typeModel.create(createTypeDto);
  }

  async findAll(): Promise<Type[]> {
    return this.typeModel.findAll();
  }

  async findOne(id: number): Promise<Type> {
    const type = await this.typeModel.findByPk(id);
    if (!type) {
      throw new NotFoundException('Type not found');
    }
    return type;
  }

  async update(id: number, updateTypeDto: UpdateTypeDto): Promise<Type> {
    const type = await this.findOne(id);
    return type.update(updateTypeDto);
  }

  async remove(id: number): Promise<void> {
    const type = await this.findOne(id);
    await type.destroy();
  }
}
