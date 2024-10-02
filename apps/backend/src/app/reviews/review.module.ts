import { Module } from '@nestjs/common';

import { ReviewsController } from './review.controller';
import { ReviewService } from './review.service';
import { PrismaService } from '../prisma.service';

@Module({
  imports: [],
  controllers: [ReviewsController],
  providers: [ReviewService, PrismaService],
})
export class ReviewsModule {}
