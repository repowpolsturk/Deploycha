import { Module } from '@nestjs/common';
import { QuestionsService } from '../questions/questions.service';
import { QuestionsController } from '../questions/questions.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Question } from '../questions/model/question.model';

@Module({
  imports: [SequelizeModule.forFeature([Question])],
  controllers: [QuestionsController],
  providers: [QuestionsService],
})
export class QuestionsModule {}
