import { Button, Input, Textarea, Toast } from '@ems/common-ui';
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ReviewForm } from '../../types/review';
import { createReview } from '../../utils/actions/createReview';

const LeaveReviewForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ReviewForm>();

  const [success, setSuccess] = useState(false);

  const onSubmit: SubmitHandler<ReviewForm> = async (data) => {
    const review = await createReview(data);
    if (review.data) {
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 sm:grid-cols-2 gap-6"
    >
      <div>
        <Input
          label="Rate"
          {...register('rate', {
            required: 'this field is required',
            min: {
              value: 1,
              message: 'Number must be at least 1',
            },
            max: {
              value: 6,
              message: 'Number must be at most 6',
            },
          })}
          className="mt-4 "
          type="number"
          error={errors.rate?.message}
        />
        <Textarea
          label={'content'}
          error={errors.content?.message}
          {...register('content', {
            required: 'this field is required',
            minLength: {
              value: 10,
              message: 'Text must be at least 10 characters long',
            },
          })}
        />
      </div>
      <div className="flex flex-col gap-4">
        <Input
          label="Author"
          {...register('author_', {
            required: 'this field is required',
            minLength: {
              value: 3,
              message: 'Your name must be at least 3 characters long',
            },
          })}
          className="mt-4"
          error={errors.author_?.message}
        />

        <Button
          type="submit"
          label={'Submit'}
          className="mt-8 bg-primary text-black shadow-lg rounded-3xl px-8 hover:bg-primary-dark"
        />

        <Toast
          showToast={success}
          message="Udało się dodać Twoją recenzję, poczekaj, aż ją zweryfikujemy, żeby była dostępna"
        />
      </div>
    </form>
  );
};

export default LeaveReviewForm;
