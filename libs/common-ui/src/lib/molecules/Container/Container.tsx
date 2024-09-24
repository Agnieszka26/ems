import React, { ComponentProps, ReactNode } from 'react';
import { classMerge } from '../../../utils/cn';

type Props = ComponentProps<'div'> & {
  children: ReactNode;
};

export const Container = ({ className, children }: Props) => {
  return (
    <div className={classMerge('container mx-auto px-6 max-w-5xl', className)}>
      {children}
    </div>
  );
};

