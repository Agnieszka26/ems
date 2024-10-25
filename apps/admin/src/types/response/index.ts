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
      data:T;
    }
  | {
      //error
      isLoading: false;
      isError: string;
      data: undefined;
    };

export type APIResponse<T> ={
    results: T
}
