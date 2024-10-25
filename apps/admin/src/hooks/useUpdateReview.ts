import { useState } from 'react';
import { State } from '../types/response';
import { Review } from '../types/reviews';

export const useUpdateReviews = () => {
  const [state, setState] = useState<State<Review>>({
    data: undefined,
    isLoading: true,
    isError: false,
  });

  const updateReviews = async (
    id: string,
    body: {
      content?: string;
      rate?: number;
      author?: string;
      isAccepted?: 'true' | 'false';
    }
  ) => {

    const review = await fetch(`http://localhost:3000/api/reviews/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        }
      })
      .then((responseData) => {
        setState({
          data: responseData as Review,
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
    return review;
  };

  //   useEffect(() => {
  //     updateReviews();
  //   }, []);
  return { state, updateReviews };
};
