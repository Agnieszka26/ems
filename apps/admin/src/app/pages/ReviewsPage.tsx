import {  ErrorMessage, Loader, PageContainer } from '@ems/common-ui';
import { useGetReviews } from '../../hooks/useGetRerviews';
import { ReviewList } from '../components/ReviewList/ReviewList';


const ReviewsPage = () => {
  const [state] = useGetReviews();
  return (
    <PageContainer>
      {state.isLoading && <Loader />}
      {state.isError &&  <ErrorMessage message={state.isError}/>}
      {state.data && <ReviewList reviews={state.data} />}
    </PageContainer>
  );
};

export default ReviewsPage;
