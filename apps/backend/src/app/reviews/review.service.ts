import { Injectable } from '@nestjs/common';
import { tableReviews } from '../../config';
import { CreateReviewDto } from './create-review.dto';
import { Review } from './review.entity';
import { UpdateReviewDto } from './update-review.dto';

@Injectable()
export class ReviewService {
  async getReviews(page?: number, offset?: number): Promise<Review[]> {
    return new Promise((resolve, reject) => {
      const reviews: Review[] = [];

      tableReviews
        .select({
          maxRecords: 3,
          view: 'Grid view',
        })
        .eachPage(
          (records, fetchNextPage) => {
            records.forEach((record) => {
              const review = {
                id: record.id,
                public_id: record.getId(),
                ...record.fields,
              } as any as Review;

              reviews.push(review);
            });
            fetchNextPage();
          },
          (err) => {
            if (err) {
              reject(err);
            } else {
              resolve(reviews);
            }
          }
        );
    });
  }
  async getReview(public_id: Review['public_id']): Promise<Review> {
    return new Promise((resolve, reject) => {
      tableReviews.find(public_id, (err, record) => {
        if (err) {
          console.error(err);
          reject(err);
          return;
        }

        const review = {
          id: record.id,
          public_id: record.getId(),
          ...record.fields,
        } as any as Review;

        console.log('review', review.public_id);

        resolve(review);
      });
    });
  }
  createReview({ content, author, rate }: CreateReviewDto) {
    tableReviews.create(
      [
        {
          fields: {
            content,
            author,
            rate,
          },
        },
      ],
      function (err, records) {
        if (err) {
          console.error(err);
          return;
        }
        records.forEach(function (record) {
          console.log(record.getId());
        });
      }
    );

    return { content, author, rate };
  }
  updateReview(
    id: Review['public_id'],
    { content, author, rate }: UpdateReviewDto
  ) {
    tableReviews.update(
      [
        {
          id,
          fields: {
            content,
            author,
            rate,
          },
        },
      ],
      function (err, records) {
        if (err) {
          console.error(err);
          return;
        }
        records.forEach(function (record) {
          console.log(record.getId());
        });
      }
    );

    return { content, author, rate };
  }
  deleteReview(id: Review['public_id']) {
    tableReviews.destroy([id], function (err, deletedRecords) {
      if (err) {
        console.error(err);
        return;
      }
      console.log('Deleted', deletedRecords.length, 'records');
    });
    return null;
  }
}
