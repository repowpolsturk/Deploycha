import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Role } from '../roles/model/role.model';
import { CreateRoleDto } from '../roles/dto/create-role.dto';
import { UpdateRoleDto } from '../roles/dto/update-role.dto';

@Injectable()
export class RolesService {
  constructor(
    @InjectModel(Role)
    private roleModel: typeof Role,
  ) {}

  async create(createRoleDto: CreateRoleDto): Promise<Role> {
    return this.roleModel.create(createRoleDto);
  }

  async findAll(): Promise<Role[]> {
    return this.roleModel.findAll();
  }

  async findOne(id: number): Promise<Role> {
    const role = await this.roleModel.findByPk(id);
    if (!role) {
      throw new NotFoundException('Role not found');
    }
    return role;
  }

  async update(id: number, updateRoleDto: UpdateRoleDto): Promise<Role> {
    const role = await this.findOne(id);
    return role.update(updateRoleDto);
  }

  async remove(id: number): Promise<void> {
    const role = await this.findOne(id);
    await role.destroy();
  }
}
