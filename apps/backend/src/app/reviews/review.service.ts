import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateReviewDto } from './create-review.dto';
import { UpdateReviewDto } from './update-review.dto';
import { Review } from './review.entity';

@Injectable()
export class ReviewService {

  async getReviews(page?: number, offset?: number): Promise<Review[]> {
return []
  }
  async getReview(id: Review['id']): Promise<Review> {
return {id, content: "", rate: 9}
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
