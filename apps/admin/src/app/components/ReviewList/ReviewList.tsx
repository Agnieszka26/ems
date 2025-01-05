import { Card, Container, Header } from '@ems/common-ui';
import { useUpdateReviews } from '../../../hooks/useUpdateReview';
import { Review } from '../../../types/reviews';
import { useEffect, useState } from 'react';
type Props = {
  reviews: Review[];
};

export const ReviewList = ({ reviews }: Props) => {
  const { state, updateReviews } = useUpdateReviews();
  const [success, setSuccess] = useState<boolean>(false)
  const handleEdit = async (id: string, body: any) => {
    updateReviews(id, body);
  };
// useEffect(()=>{})
  return (
    <Container>
      <Header className="mb-5 mx-auto text-center">Review's List</Header>
      <div className="grid grid-cols-3 gap-4">
        {reviews.map(
          ({ author_: author, content, rate: note, public_id, isAccepted }) => {
            return (
              <Card
                key={content + author}
                text={content}
                review={{ author, note }}
                href={[
                  {
                    label: 'edit',
                    handleOnClick: async () =>
                      await handleEdit(public_id, { content: 'whats my name' }),
                  },
                  {
                    label: isAccepted === 'true' ? 'decline' : 'accept',
                    handleOnClick:
                      isAccepted === 'true'
                        ? () =>
                            updateReviews(public_id, { isAccepted: 'false' })
                        : () =>
                            updateReviews(public_id, { isAccepted: 'true' }),
                  },
                ]}
              />
            );
          }
        )}
      </div>
    </Container>
  );
};
