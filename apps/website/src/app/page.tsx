'use client';
import DetailSection from './components/Sections/DetailSection';
import HeroSection from './components/HeroSection/HeroSection';
import EarthSection from './components/Sections/EarthSection';
import LeaveReviewSection from './components/Sections/LeaveReviewSection';

export default function Page() {
  return (
    <main>
      <HeroSection />
      <DetailSection />
      <EarthSection />
      <LeaveReviewSection />
    </main>
  );
}
