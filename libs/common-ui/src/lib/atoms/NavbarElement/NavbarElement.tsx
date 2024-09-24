import React, { ComponentProps } from 'react';
import { Link } from 'react-router-dom';
import { classMerge } from '../../../utils/cn';

type Props = ComponentProps<'li'> & {
  href: string;
  label: string;
  isActive?: boolean;
};

export const NavbarElement = ({ href, label, isActive, className }: Props) => {
  const active = isActive && 'text-blue-600';
  const navbarElementClassName = classMerge(
    'block py-2 px-4 text-gray-700',
    className,
    active
  );

  return (
    <li className={classMerge(navbarElementClassName)}>
      <Link to={href}>
        {label}
        {isActive && <span className="sr-only">(current)</span>}
      </Link>
    </li>
  );
};

