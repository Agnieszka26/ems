import { ComponentProps } from 'react';
import { Paragraph } from '../../atoms';
import { LinkButton } from '../../atoms/Button/Button';

type Props = ComponentProps<'div'> & {
  title: string;
  text: string;
  img?: string;
  href?: { to: string; label: string };
  review?: {
    author: string;
    note: number;
  };
};

export const Card = ({ img, title, text, href, review, ...props }: Props) => {
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
        <Paragraph className="mb-3 text-xl">{`title: ${title}`}</Paragraph>
        <Paragraph>{text}</Paragraph>

        {href && <LinkButton label={href.label} to={href.to} />}
      </div>
    </div>
  );
};
