import { Card, Container, Header } from '@ems/common-ui';
import { Review } from '../../../types/reviews';
type Props = {
  reviews: Review[];
};
export const ReviewList = ({ reviews }: Props) => {
  return (
    <Container>
      <Header className="mb-5 mx-auto text-center">Review's List</Header>
      <div className="grid grid-cols-3 gap-4">
        {reviews.map(({ author_: author, content, rate: note, public_id }) => {
          return (
            <Card
              key={content}
              title={author}
              text={content}
              review={{ author, note }}
              href={{ to: public_id, label: 'edit' }}
            />
          );
        })}
      </div>
    </Container>
  );
};
