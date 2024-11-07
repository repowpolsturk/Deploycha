import { Module } from '@nestjs/common';
import { RolesService } from '../roles/roles.service';
import { RolesController } from '../roles/roles.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Role } from '../roles/model/role.model';

@Module({
  imports: [SequelizeModule.forFeature([Role])],
  controllers: [RolesController],
  providers: [RolesService],
})
export class RolesModule {}
