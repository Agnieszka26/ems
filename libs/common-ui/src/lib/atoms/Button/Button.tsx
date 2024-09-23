import React, { ComponentProps } from 'react';
import {classMerge} from "../../../utils/cn"
import '../../../styles.css';
type Props = ComponentProps<'button'> & {
  label: string;
};

export const Button = ({ className, label }: Props) => {
  const buttonClassName = "inline-block font-normal text-center px-3 py-2 leading-normal text-base rounded cursor-pointer bg-blue-500 text-white hover:bg-blue-600 hover:text-gray-200"
  return <button className={classMerge( buttonClassName, className)}>{label}</button>;
};
