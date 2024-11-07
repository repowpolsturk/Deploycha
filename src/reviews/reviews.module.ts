import { Module } from '@nestjs/common';
import { ReviewsService } from '../reviews/reviews.service';
import { ReviewsController } from '../reviews/reviews.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Review } from '../reviews/model/review.model';

@Module({
  imports: [SequelizeModule.forFeature([Review])],
  controllers: [ReviewsController],
  providers: [ReviewsService],
})
export class ReviewsModule {}
