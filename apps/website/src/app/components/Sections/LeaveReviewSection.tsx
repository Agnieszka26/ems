import { Container } from '@ems/common-ui';
import Header from '../Header/Header';
import Separator from '../../atoms/Separator';
import LeaveReviewForm from '../Forms/LeaveReviewForm';

const LeaveReviewSection = () => {
  return (
    <section className="pt-20 pb-20">
      <Container >
        <Header text="Leave Review" className="text-center pt-10 leading-normal" />
        <Separator color="primary-dark" className='mx-auto' />
       <LeaveReviewForm />
      </Container>
    </section>
  );
};

export default LeaveReviewSection;
