'use client';

import React, { Suspense } from 'react';
import { useGetReviews } from '../utils/hooks/useGetReviews';
import ReviewSection from '../components/Sections/ReviewSection';
import { Loader } from '@ems/common-ui';

const ReviewPage = () => {
  const [state] = useGetReviews();

  return (
    <Suspense fallback={<Loader />}>
      {state.data && <ReviewSection reviews={state.data} />}
    </Suspense>
  );
};

export default ReviewPage;
