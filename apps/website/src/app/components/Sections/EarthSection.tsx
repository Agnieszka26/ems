import { Container } from '@ems/common-ui';
import Image from 'next/image';
import earth from '../../assets/earth.png';
import Header from '../Header/Header';
import Separator from '../../atoms/Separator';

const EarthSection = () => {
  return (
    <section className="pt-20 ">
      <Container className="flex justify-between items-start">
        <Image src={earth} alt="earth" />
        <Container className="items-start">
          <Header
            text="Strategic Engineering And Design For International Top Brands"
            className="text-start pt-10 leading-normal"
          />
          <Separator color="secondary" />
          <p className=" text-labradorite text-md text-start  mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi risus
            duis nibh laoreet. Malesuada luctus tincidunt tortor consectetur
            netus facilisi dapibus laoreet orci.
          </p>
        </Container>
      </Container>
    </section>
  );
};

export default EarthSection;
