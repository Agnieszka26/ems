import { Header, PageContainer } from '@ems/common-ui';
import { ReviewList } from '../components/ReviewList/ReviewList';

const ReviewsPage = () => {
  return (
    <PageContainer>
      <ReviewList reviews={['review1', 'review2']} />
    </PageContainer>
  );
};

export default ReviewsPage;
