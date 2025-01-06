import { useEffect, useState,  } from 'react';
import { Review } from "../../types/review";
export type State<T> =
  | {
      //pending
      isLoading: true;
      isError: false;
      data: undefined;
    }
  | {
      //fullfilled
      isLoading: false;
      isError: false;
      data: T;
    }
  | {
      //error
      isLoading: false;
      isError: string;
      data: undefined;
    };

export type APIResponse<T> = {
  results: T;
};

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
       const data = responseData.map((data) => {return {...data, author: data.author_}})
        setState({
          data: data as Review[],
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
