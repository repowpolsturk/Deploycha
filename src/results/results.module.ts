import { Module } from '@nestjs/common';
import { ResultsService } from '../results/results.service';
import { ResultsController } from '../results/results.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Result } from '../results/model/result.model';

@Module({
  imports: [SequelizeModule.forFeature([Result])],
  controllers: [ResultsController],
  providers: [ResultsService],
})
export class ResultsModule {}
