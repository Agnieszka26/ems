export type Author = {
  id: 'usrjLYXtc7QRk75Ap';
  email: 'agna.medrek@gmail.com';
  name: 'agnieszka medrek';
};
export class Review {
  id: number;
  public_id: string;
  content: string;
  rate: number;
  author: Author;
}
