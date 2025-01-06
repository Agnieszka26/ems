'use client';
import DetailSection from './components/Sections/DetailSection';
import HeroSection from './components/HeroSection/HeroSection';
import EarthSection from './components/Sections/EarthSection';
import LeaveReviewSection from './components/Sections/LeaveReviewSection';
import ReviewSection from './components/Sections/ReviewSection';
import { Suspense, useEffect } from 'react';
import { useGetReviews } from './utils/hooks/useGetReviews';

export default function Page() {
  const [state] = useGetReviews();
  return (
    <main>
      <HeroSection />
      <DetailSection />
      <EarthSection />
      <Suspense fallback={<>Loading...</>}>
        {state.data && <ReviewSection reviews={state.data.slice(0,3)} />}
      </Suspense>
      <LeaveReviewSection />
    </main>
  );
}
