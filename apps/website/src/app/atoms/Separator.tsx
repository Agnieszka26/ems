import { classMerge } from 'libs/common-ui/src/utils/cn';
import React, { ComponentProps } from 'react';
type Props = { color: 'secondary' | 'primary-dark' } & ComponentProps<'div'>;
const Separator = ({ color, className }: Props) => {
  const bg = color === 'secondary' ? `bg-secondary` : `bg-primary-dark`;
  return (
    <div
      className={classMerge(`${bg} h-[2px] w-16 my-8 rounded-sm`, className)}
    ></div>
  );
};

export default Separator;
