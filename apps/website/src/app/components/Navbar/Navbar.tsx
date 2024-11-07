import { Container } from '@ems/common-ui';
import Link from 'next/link';
import { ComponentProps } from 'react';

type Props = ComponentProps<'nav'>;

const Navbar = ({ className }: Props) => {
  return (
    <div className={'p-4 bg-sky-100/50 shadow-xl'}>
        <nav>
      <Container className={'flex justify-between items-center'}>

        <Link href="/" className="text-primary-dark font-bold">
          TECH-WORLD
        </Link>
        <Link href="/">Theme</Link>
      </Container>
        </nav>
    </div>
  );
};

export default Navbar;
