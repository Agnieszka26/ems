import { Container } from '@ems/common-ui';
import Image from 'next/image';
import earth from '../../assets/earth.png';
import Header from '../Header/Header';

type Props = {};

const EarthSection = (props: Props) => {
  return (
    <section className="py-56 ">
      <Container className="flex justify-between items-center">
        <Image src={earth} alt="earth" />
        <Header
          text="strategic engineering and design
for international top brands"
          className="text-start"
        />
        <div className="bg-secondary h-[2px] w-20 mx-auto my-8 rounded-sm"></div>
        <p className=" text-labradorite text-md mb-8 text-center w-3/4 mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi risus
          duis nibh laoreet. Malesuada luctus tincidunt tortor consectetur netus
          facilisi dapibus laoreet orci.
        </p>
      </Container>
    </section>
  );
};

export default EarthSection;
