import { NavbarElement } from '@ems/common-ui';
import { useLocation } from 'react-router-dom';
import { ROUTE } from '../../../routes';

const elements = [
  { href: ROUTE.HOME, label: 'home' },
  { href: ROUTE.REVIEWS, label: 'reviews' },
];

export const Menu = () => {
  const { pathname } = useLocation();
  return (
    <nav className="">
      <ul className="relative flex flex-wrap items-center justify-between py-1 px-4 ">
        {elements.map(({ href, label }) => {
          return (
            <NavbarElement
              key={href}
              href={href}
              label={label}
              isActive={pathname === href}
            />
          );
        })}
      </ul>
    </nav>
  );
};
