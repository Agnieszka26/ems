import { useEffect, useState } from 'react';
import { State } from '../types/response';
import { Review } from '../types/reviews';
export const useGetReviews = () => {
  const [state, setState] = useState<State<Review[]>>({
    data: undefined,
    isLoading: true,
    isError: false,
  });

  const fetchReviews = async () => {
    const reviews = await fetch(`http://localhost:3000/api/reviews`)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        }
      })
      .then((responseData) => {
        setState({
          data: responseData as Review[],
          isLoading: false,
          isError: false,
        });
      })
      .catch((error) => {
        setState({
          data: undefined,
          isLoading: false,
          isError: error.message,
        });
      });
    return reviews;
  };
  useEffect(() => {
    fetchReviews();
  }, []);
  return [state];
};
