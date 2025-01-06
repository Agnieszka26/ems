import { Review, ReviewForm } from "../../types/review";
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
export const createReview = async (data: ReviewForm)=> {
  console.log('data,rate', data.rate)
    const createdReview = await fetch(`http://localhost:3000/api/reviews`, {
      method: 'POST',
      body: JSON.stringify({
        content: data.content,
        author_: data.author_,
        rate: data.rate,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((resp) =>{
        if(resp.ok){
            return resp.json()
        }
    }).then((responseData) =>{
        return  {
              isLoading: false,
              isError: false,
              data: responseData
            }
    }).catch((error) =>{
        return {
              isLoading: false,
              isError: "Ups, something went wrong :( ",
              data: undefined
    }
    })
    return   createdReview
  
};