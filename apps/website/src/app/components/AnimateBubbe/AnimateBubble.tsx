import React, { ComponentProps } from 'react'
import bubble from "../../assets/bubble.png"
import Image from 'next/image'
import './AnimateBubble.css';
import {classMerge} from "../../../../../../libs/common-ui/src/utils/cn";
//movingUpShrink
type Props = ComponentProps<'img'> & {sizeX: number, sizeY: number}

function AnimateBubble({sizeX, sizeY, className}: Props) {
  return (
   <Image src={bubble} alt="bubble" width={sizeX} height={sizeY} className={classMerge(`movingUpShrink`,"-z-30", className)}/>
  )
}

export default AnimateBubble
