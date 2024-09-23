import React, { ComponentProps } from 'react';
import '../../../styles.css';
import { classMerge } from '../../../utils/cn';

type Props = ComponentProps<'h1'> & {
  children: string | undefined;
};

export const Header = ({ children, className }: Props) => {
  const headerClassName = 'mx-auto px-6 text-xl';
  return (
    <h1 className={classMerge(headerClassName,  className)}>{children}</h1>
  );
};


