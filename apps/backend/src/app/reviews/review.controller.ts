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
import {   ReviewService } from './review.service';
import { Review } from './review.entity';
import { CreateReviewDto } from './create-review.dto';
import { UpdateReviewDto } from './update-review.dto';
import HttpExceptionFilter from '../filters/http-exception-filter';
//można w kontrolerze ale też można w metodze
@UseFilters(new HttpExceptionFilter)
@Controller('reviews') // http://localhost:3002/api/reviews
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewService) {
    // this.reviewsService = new reviewsService() -> to się dzieje automatycznie, nie trzeba tego pisać
  }

  @Get()
  async getReviews(@Query() query) {
    const { page, offset } = query;
    return this.reviewsService.getReviews(page, offset);
  }
  @Get(':id')
  async getReview(@Param('id') id: string) {
    return this.reviewsService.getReview(+id);
  }
  @Delete(':id')
  async deleteReview(@Param('id') id: number) {
    await this.reviewsService.deleteReview(+id);
    return {};
  }
  @Post()
  async createReview(@Body() createReviewDto: CreateReviewDto ) {
    return this.reviewsService.createReview(createReviewDto);
  }
  @Patch()
  async updateReview(@Param('id') id: number, @Body() updateReviewDto: UpdateReviewDto){
    return this.reviewsService.updateReview(id, updateReviewDto )
  }
}
