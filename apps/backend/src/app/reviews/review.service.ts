import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateReviewDto } from './create-review.dto';
import { UpdateReviewDto } from './update-review.dto';
import { Review } from './review.entity';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ReviewService {
  constructor(private prisma: PrismaService) {}
  async getReviews(page?: number, offset?: number): Promise<Review[]> {
    await this.prisma.review.findMany();
    return await this.prisma.review.findMany();
  }
  async getReview(id: Review['id']): Promise<Review> {
    const review = await this.prisma.review.findUnique({ where: { id: +id } });
    if (!review) {
      throw new NotFoundException('Review Not Found');
    }
    return review;
  }
  createReview(createReviewDto: CreateReviewDto) {
    //TODO:
    // reviews.push(createReviewDto);
    return createReviewDto;
  }
  updateReview(id: Review['id'], updateReviewDto: UpdateReviewDto) {
    //TODO:
    // reviews. ... (createReviewDto);
    return updateReviewDto;
  }
  deleteReview(id: Review['id']) {
    return null;
  }
}
