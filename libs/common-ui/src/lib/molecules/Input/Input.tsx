import React, { ComponentProps, forwardRef, Ref, useId } from 'react';
import { Label } from '../../atoms/Label';

type Props = {
  label: string;
  name: string;
  error?: string | undefined;
};
export const Input = forwardRef(
  (
    {
      onChange,
      name,
      value,
      label,
      type,
      className,
      ...rest
    }: Pick<
      ComponentProps<'input'>,
      'value' | 'className' | 'onChange' | 'aria-label' | 'type' | 'ref'
    > &
      Props,
    ref: Ref<HTMLInputElement>
  ) => {
    const id = useId();
    const inputClassName =
      'block w-full py-2 px-3 text-base font-normal leading-normal text-gray-700 bg-white border border-gray-400 rounded';

    return (
      <div className={className}>
        <Label id={id}> {label}</Label>

        <input
          className={inputClassName}
          name={name}
          ref={ref}
          type={type}
          id={id}
          defaultValue={value}
          onChange={onChange}
          {...rest}
        />
      </div>
    );
  }
);
