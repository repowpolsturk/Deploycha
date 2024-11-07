import { Module } from '@nestjs/common';
import { CategoriesService } from '../categories/categories.service';
import { CategoriesController } from '../categories/categories.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Category } from '../categories/model/category.model';

@Module({
  imports: [SequelizeModule.forFeature([Category])],
  controllers: [CategoriesController],
  providers: [CategoriesService],
})
export class CategoriesModule {}
