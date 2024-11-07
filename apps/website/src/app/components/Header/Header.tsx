import cn from 'classnames';
import { ComponentProps } from 'react';

type Props = { text: string } & ComponentProps<'h2'>;

const Header = ({ text, className, ...props }: Props) => {
  return (
    <h2
      className={cn(
        'text-black-light text-4xl text-center font-bold',
       
        className
      )}
      {...props}
    >
      {text}
    </h2>
  );
};

export default Header;


