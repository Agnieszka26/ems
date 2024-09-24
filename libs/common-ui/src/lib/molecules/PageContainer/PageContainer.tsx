import { ComponentProps } from 'react';
import { classMerge } from '../../../utils/cn';

type Props = ComponentProps<'main'>;

export const PageContainer = ({ children, className }: Props) => {
  return (
    <main className={classMerge('container mx-auto max-w-5xl', className)}>
      {children}
    </main>
  );
};
