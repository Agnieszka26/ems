'use client';
import React, { Suspense } from 'react';
import { Review } from '../types/review';
import TestimonialCard from '../components/TestimonialCard/TestimonialCard';
import { Container } from '@ems/common-ui';
import Header from '../components/Header/Header';
import Separator from '../atoms/Separator';
import { useGetReviews } from '../utils/hooks/useGetReviews';
import ReviewSection from '../components/Sections/ReviewSection';

const ReviewPage = () => {
  const reviews = [] as Review[];
    const [state] = useGetReviews();
  return (
    <Suspense fallback={<p>Loading...</p>}>
      {state.data && <ReviewSection reviews={state.data} />}
    </Suspense>
  ); 
};

export default ReviewPage;
