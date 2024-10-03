import { IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateReviewDto {
  @IsString()
  content: string;
  @IsNumber()
  @IsPositive()
  rate: number;
  @IsString()
  author_: string;
  @IsString()
  isAccepted: boolean
}
