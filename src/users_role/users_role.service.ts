import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UsersRole } from '../users_role/model/users_role.model';
import { CreateUsersRoleDto } from '../users_role/dto/create-users_role.dto';
import { UpdateUsersRoleDto } from '../users_role/dto/update-users_role.dto';

@Injectable()
export class UsersRoleService {
  constructor(
    @InjectModel(UsersRole)
    private usersRoleModel: typeof UsersRole,
  ) {}

  async create(createUsersRoleDto: CreateUsersRoleDto): Promise<UsersRole> {
    return this.usersRoleModel.create(createUsersRoleDto);
  }

  async findAll(): Promise<UsersRole[]> {
    return this.usersRoleModel.findAll();
  }

  async findOne(id: number): Promise<UsersRole> {
    const usersRole = await this.usersRoleModel.findByPk(id);
    if (!usersRole) {
      throw new NotFoundException('UsersRole not found');
    }
    return usersRole;
  }

  async update(id: number, updateUsersRoleDto: UpdateUsersRoleDto): Promise<UsersRole> {
    const usersRole = await this.findOne(id);
    return usersRole.update(updateUsersRoleDto);
  }

  async remove(id: number): Promise<void> {
    const usersRole = await this.findOne(id);
    await usersRole.destroy();
  }
}
