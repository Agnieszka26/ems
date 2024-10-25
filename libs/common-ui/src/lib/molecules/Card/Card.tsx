import { ComponentProps } from 'react';
import { Paragraph } from '../../atoms';
import { Button } from '../../atoms/Button/Button';
type Label = 'decline' | 'accept' | 'edit';
type Props = ComponentProps<'div'> & {
  text: string;
  title?: string;
  img?: string;
  href?: { handleOnClick: () => void; label: Label }[];
  review?: {
    author: string;
    note: number;
  };
};

export const Card = ({
  img,
  title,
  text,
  href,
  review,

  ...props
}: Props) => {
  return (
    <div
      className="flex flex-col relative bg-white rounded border border-gray-200 shadow max-w-xl"
      {...props}
    >
      {img && (
        <img src={img} className=" w-full rounded-t" alt={title + ' image'} />
      )}
      <div className="flex-auto p-5">
        {review && (
          <div className="flex gap-4">
            <Paragraph className="mb-3 ">{` ${review.author}`}</Paragraph>
            <Paragraph className="mb-3 ">{` ${review.note}`}</Paragraph>
          </div>
        )}
        {title && (
          <Paragraph className="mb-3 text-xl">{`title: ${title}`}</Paragraph>
        )}
        <Paragraph>{text}</Paragraph>
        <div className="flex gap-4">
          {href &&
            href.map(({ label, handleOnClick }) => {
              return (
                <Button key={label} label={label} onClick={handleOnClick} />
              );
            })}
        </div>
      </div>
    </div>
  );
};
