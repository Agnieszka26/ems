import { Card, Container, Header } from '@ems/common-ui';
type Props = {
  reviews: string[];
};
export const ReviewList = ({ reviews }: Props) => {
  return (
    <Container>
      <Header className='mb-5 mx-auto text-center'>Review's List</Header>
      <div className='grid grid-cols-3 gap-4'>

      {reviews.map((review) => {
        return (
          <Card
          key={review}
          title={review}
          text={review + 'x'}
          review={{ author: 'autor', note: 6 }}
          href={{to: "l", label: "edit"}}
          />
        );
      })}
      </div>
    </Container>
  );
};
