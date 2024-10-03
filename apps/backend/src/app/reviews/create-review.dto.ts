import { IsNumber, IsPositive, IsString } from 'class-validator';
import { Author } from './review.entity';

export class CreateReviewDto {
  @IsString()
  content: string;
  @IsNumber()
  @IsPositive()
  rate: number;
  author: Author;
}
