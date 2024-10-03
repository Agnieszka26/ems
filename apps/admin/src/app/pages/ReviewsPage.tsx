import { PageContainer } from '@ems/common-ui';
import { useGetReviews } from '../../hooks/useGetRerviews';
import { ReviewList } from '../components/ReviewList/ReviewList';

const ReviewsPage = () => {
  const [reviews] = useGetReviews();
  return (
    <PageContainer>
      <ReviewList reviews={reviews} />
    </PageContainer>
  );
};

export default ReviewsPage;
