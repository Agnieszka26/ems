import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseFilters,
} from '@nestjs/common';
import HttpExceptionFilter from '../filters/http-exception-filter';
import { CreateReviewDto } from './create-review.dto';
import { ReviewService } from './review.service';
import { UpdateReviewDto } from './update-review.dto';

@UseFilters(new HttpExceptionFilter())
@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewService) { }

  @Get()
  async getReviews(@Query() query) {
    const { page, offset } = query;
    return this.reviewsService.getReviews(page, offset);
  }
  @Get(':id')
  async getReview(@Param('id') id: string) {
    return this.reviewsService.getReview(id);
  }
  @Delete(':id')
  async deleteReview(@Param('id') id: string) {
    await this.reviewsService.deleteReview(id);
    return {};
  }
  @Post()
  async createReview(@Body() createReviewDto: CreateReviewDto) {
    return this.reviewsService.createReview(createReviewDto);
  }
  @Patch()
  async updateReview(
    @Param('id') id: string,
    @Body() updateReviewDto: UpdateReviewDto
  ) {
    return this.reviewsService.updateReview(id, updateReviewDto);
  }
}
