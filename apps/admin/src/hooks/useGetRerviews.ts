import { useEffect, useState } from 'react';
import { Review } from '../types/reviews';
export const useGetReviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const fetchReviews = async () => {
    const reviews = await fetch(`http://localhost:3000/api/reviews`)
      .then(async (resp) => {
        const r = await resp.json();
        setReviews(r);
      })
      .catch((error) => console.log('error', error));
    return reviews;
  };
  useEffect(() => {
    fetchReviews();
  }, []);
  return [reviews];
};
