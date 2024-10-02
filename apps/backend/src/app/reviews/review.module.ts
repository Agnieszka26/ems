import { Module } from '@nestjs/common';

import { ReviewsController } from './review.controller';
import { ReviewService } from './review.service';
@Module({
  imports: [],
  controllers: [ReviewsController],
  providers: [ReviewService],
})
export class ReviewsModule {}
