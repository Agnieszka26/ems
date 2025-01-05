import { Container } from '@ems/common-ui';
import Image, { StaticImageData } from 'next/image';
import image1 from '../../assets/mobileAppDevelopment1.svg';
import image2 from '../../assets/mobileAppDevelopment2.svg';
import image3 from '../../assets/mobileAppDevelopment3.svg';
import Header from '../Header/Header';
import Separator from '../../atoms/Separator';
const details = [
  {
    image: image1,
    text: 'Lorem ipsumllentesque accumsan. Nec pellentesque eget.',
    title: ' Mobile Apps',
  },
  {
    image: image2,
    text: 'Lorem ipsum dolor sit amet. Nec pellentesque eget.',
    title: ' Website Apps',
  },
  {
    image: image3,
    text: ' In dictum mauris non pellentesque accumsan. Nec pellentesque eget.',
    title: 'UI UX Design',
  },
];

const PresentationCard = ({
  title,
  text,
  image,
}: {
  title: string;
  text: string;
  image: StaticImageData;
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl px-7 py-5 ">
      <Image src={image} alt="image" className='mx-auto'/>
      <h3 className={'text-black-light text-2xl text-center font-bold my-4'}>
        {title}
      </h3>

      <p className=" text-labradorite text-sm  text-center mx-auto">
        {text}
      </p>
    </div>
  );
};
function DetailSection() {
  return (
    <section className="pt-56 ">
      <Container>
        <Header text=" Special Expertise from Us" />
        <Separator color="primary-dark" className='mx-auto'/>
        <p className=" text-labradorite text-md mb-8 text-center w-3/4 mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue et
          pharetra dolor pharetra, convallis turpis euismod ultrices. Netus nisl
          pretium sapien egestas vestibulum felis. Nisi orci.
        </p>
        <div className="grid grid-cols-3 gap-[28px]">
          {details.map(({ text, title, image }) => {
            return (
              <PresentationCard
                key={title}
                text={text}
                title={title}
                image={image}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default DetailSection;
