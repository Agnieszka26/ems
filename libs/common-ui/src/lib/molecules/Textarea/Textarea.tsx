import React, { ComponentProps, forwardRef, Ref, useId } from 'react';
import { Label } from '../../atoms/Label';

type Props = {
  label: string;
  name: string;
  error?: string | undefined;
};
export const Textarea = forwardRef(
  (
    {
      onChange,
      name,
      value,
      label,
      className,
      error,
      ...rest
    }: Pick<
      ComponentProps<'textarea'>,
      'value' | 'className' | 'onChange' | 'aria-label' | 'ref'
    > &
      Props,
    ref: Ref<HTMLTextAreaElement>
  ) => {
    const id = useId();
    const inputClassName =
      'block w-full py-2 px-3 text-base font-normal leading-normal text-gray-700 bg-white border border-gray-400 rounded';

    return (
      <div className={className}>
        <Label id={id}> {label}</Label>

        <textarea
          className={inputClassName}
          name={name}
          ref={ref}
          id={id}
          defaultValue={value}
          onChange={onChange}
          {...rest}
        />
        <p className="text-red-700 text-xs">{error}</p>
      </div>
    );
  }
);
