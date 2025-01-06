import React, { ComponentProps } from 'react'
import { Review } from '../../types/review'
type Props = ComponentProps<'div'> &  Review
const TestimonialCard = ({content, points, author}: Props) => {
  return (
    <div className="relative min-w-full mx-auto bg-white rounded-lg shadow-lg p-6 text-center">
      {/* Quote Icon */}
      <div className="text-primary text-8xl leading-none mb-4 absolute top-0 left-0 font-black opacity-50 ">
        &ldquo;
      </div>

      {/* Quote Text */}
      <p className="text-gray-600 text-lg mb-4 z-10">{content}</p>

      {/* Star Rating */}
      <div className="flex justify-center items-center mb-4">
        {[...Array(points)].map((_, index) => (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-yellow-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.118c.969 0 1.371 1.24.588 1.81l-3.34 2.396a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.538 1.118l-3.34-2.396a1 1 0 00-1.176 0l-3.34 2.396c-.783.57-1.838-.197-1.538-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.118a1 1 0 00.95-.69l1.286-3.957z" />
          </svg>
        ))}
      </div>

      {/* Author Info */}
      <h3 className="text-gray-800 font-bold text-lg">{author}</h3>
      {/* <p className="text-gray-500 text-sm">UI Designer, Apple</p> */}
    </div>
  );
}

export default TestimonialCard