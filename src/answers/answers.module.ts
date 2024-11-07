import { Module } from '@nestjs/common';
import { AnswersService } from '../answers/answers.service';
import { AnswersController } from '../answers/answers.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Answer } from '../answers/model/answer.model';

@Module({
  imports: [SequelizeModule.forFeature([Answer])],
  controllers: [AnswersController],
  providers: [AnswersService],
})
export class AnswersModule {}
