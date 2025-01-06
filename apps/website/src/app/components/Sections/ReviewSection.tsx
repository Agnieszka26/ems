import { Button, Container } from '@ems/common-ui';
import React from 'react';
import Header from '../Header/Header';
import Separator from '../../atoms/Separator';
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import { useRouter } from 'next/navigation';
import { Review } from '../../types/review';
type Props = {
  reviews: Review[];
};
const ReviewSection = ({ reviews }: Props) => {
  const router = useRouter();
  
  return (
    <section className="pt-20 ">
      <Container className="flex justify-between items-start">
        <Container className="items-start">
          <Header
            text="Our Latest Reviews"
            className="text-start pt-10 leading-normal"
          />
          <Separator color="secondary" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map(({ author, content, rate, Created }) => {
              return (
                <TestimonialCard
                  key={author + rate}
                  content={content}
                  rate={rate}
                  author={author}
                  Created={Created}
                />
              );
            })}
          </div>
          <div className="sm:col-span-2 flex justify-end">
            <Button
              label="View All"
              className="bg-primary text-black shadow-lg rounded-3xl px-8 hover:bg-primary-dark  mt-4"
              onClick={() => router.push('/reviews')}
            />
          </div>
        </Container>
      </Container>
    </section>
  );
};

export default ReviewSection;
