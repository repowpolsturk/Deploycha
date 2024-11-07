import { Module } from '@nestjs/common';
import { QuizzesService } from '../quizzes/quizzes.service';
import { QuizzesController } from '../quizzes/quizzes.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Quiz } from '../quizzes/model/quizzes.model';

@Module({
  imports: [SequelizeModule.forFeature([Quiz])],
  controllers: [QuizzesController],
  providers: [QuizzesService],
})
export class QuizzesModule {}
