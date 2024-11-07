import { Module } from '@nestjs/common';
import { UsersRoleService } from '../users_role/users_role.service';
import { UsersRoleController } from '../users_role/users_role.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersRole } from '../users_role/model/users_role.model';

@Module({
  imports: [SequelizeModule.forFeature([UsersRole])],
  controllers: [UsersRoleController],
  providers: [UsersRoleService],
})
export class UsersRoleModule {}
