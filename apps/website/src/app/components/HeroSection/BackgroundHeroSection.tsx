import React from 'react'
import Image from 'next/image';
import background from '../../assets/background.png';
import AnimateBubble from '../AnimateBubbe/AnimateBubble';
import star from "../../assets/star.png"
import { Container } from '@ems/common-ui';
import "./HeroSection.css"
const BackgroundHeroSection = () => {
  return (
    <div>   <Image
    src={background}
    alt={'background'}
    className="absolute top-0 left-0 w-screen -z-50 h-[789px] "
  />
  <Container>

<Image src={star}  alt="star1" className="absolute top-2/3 left-1/4 rotate-slowly" />
<Image src={star}  alt="star2" className="absolute top-32 left-2/4 opacity-15 rotate-slowly" />
<Image src={star}  alt="star3" className="absolute top-24 right-2/4 opacity-20 rotate-slowly" />
<Image src={star}  alt="star4" className="absolute top-32 left-1/5 opacity-45 rotate-slowly" />
  </Container>
  <AnimateBubble
    sizeX={40}
    sizeY={40}
    className="absolute top-1/3 right-5"
  />
  <AnimateBubble
    sizeX={80}
    sizeY={80}
    className="absolute top-1/4 left-5"
  />
  <AnimateBubble
    sizeX={120}
    sizeY={120}
    className="absolute top-1/3 right-0"
  /></div>
  )
}

export default BackgroundHeroSection
