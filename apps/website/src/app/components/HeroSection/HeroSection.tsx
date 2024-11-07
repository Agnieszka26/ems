import { Button, Container } from '@ems/common-ui';
import BackgroundHeroSection from './BackgroundHeroSection';
import Image from "next/image";
import phone from "../../assets/phone.png"
import cloud from "../../assets/cloud.png"
const HeroSection = () => {
  return (
    <section>
      <BackgroundHeroSection />
      <Container>

      <div className="grid grid-cols-[2fr_1fr] items-center justify-center">
        <div className=''>
          <h1 className='font-black text-5xl text-black mb-4'>We Create Powerful <br/> Digital <span className='text-primary-dark'>products.</span></h1>

         <p className=' text-labradorite text-md mb-8 '>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor morbi velit turpis et dolor sit morbi odio id. Aliquam ultricies tortor ac.
         </p>
          <Button
            label={'Get Started'}
            className="bg-primary text-black shadow-lg rounded-3xl px-8 "
            />
        </div>
        <div className='relative'>

        <Image src={phone} alt='phone' className='object-contain ' width={300} height={350} />
        <Image src={cloud} alt='phone' className='absolute bottom-0 left-20 object-contain ' width={300} height={350} />
        </div>
        </div>
            </Container>
    </section>
  );
};

export default HeroSection;
