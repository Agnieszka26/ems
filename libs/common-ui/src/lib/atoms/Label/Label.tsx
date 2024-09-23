import React, { FC, type ComponentProps } from 'react';
import { classMerge } from '../../../utils/cn';
type Props = ComponentProps<'label'> & {
  children: string[];
};

export const Label: FC<Props> = ({ className, id, children }) => {
  const labelClassName = 'inline-block mb-2';
  return (
    <label htmlFor={id} className={classMerge(labelClassName, className)}>
      <span>{children}</span>
    </label>
  );
};
