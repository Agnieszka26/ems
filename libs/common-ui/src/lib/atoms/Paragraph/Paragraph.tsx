import React, { ComponentProps } from 'react';
import '../../../styles.css';
import { classMerge } from '../../../utils/cn';
type Props = ComponentProps<'p'> & {
  children: string;
};

export const Paragraph = ({ className, children }: Props) => {
  const paragraphClassName = '';
  return (
    <p className={classMerge(paragraphClassName, className)}>{children}</p>
  );
};
