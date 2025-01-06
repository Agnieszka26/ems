import { Button, Input, Textarea } from '@ems/common-ui';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Review } from '../../types/review';
// import { Textarea } from 'libs/common-ui/src/lib/molecules/Input/Input';

const LeaveReviewForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Review>();
  const onSubmit: SubmitHandler<Review> = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 sm:grid-cols-2 gap-6"
    >
      <div className="">
        <Input
          label="Rate"
          {...register('points')}
          className="mt-4 "
          type="number"
        />
        <Textarea label={'content'} {...register('content')} />

      </div>
      <div className="flex flex-col gap-4">
        <Input label="Author" {...register('author')} className="mt-4" />

        <Button
          type="submit"
          label={'Submit'}
          className="mt-8 bg-primary text-black shadow-lg rounded-3xl px-8 hover:bg-primary-dark"
        />
      </div>
    </form>
  );
};

export default LeaveReviewForm;
