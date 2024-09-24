import { ComponentProps } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import '../../../styles.css';
import { classMerge } from '../../../utils/cn';
type Props = ComponentProps<'button'> & {
  label: string;
};
type LinkButtonProps = Props & LinkProps;

const buttonClassName =
  'inline-block font-normal text-center px-3 py-2 leading-normal text-base rounded cursor-pointer bg-blue-500 text-white hover:bg-blue-600 hover:text-gray-200';
  
export const Button = ({ onClick, className, label }: Props) => {
  return (
    <button
      onClick={onClick}
      className={classMerge(buttonClassName, className)}
    >
      {label}
    </button>
  );
};

export const LinkButton = ({ to, className, label }: LinkButtonProps) => {
  return (
    <button className={classMerge(buttonClassName, className)}>
      <Link to={to}>{label}</Link>
    </button>
  );
};
