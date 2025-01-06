import React from 'react';

type Props = {
  showToast: boolean;
  message?: string;
};

export const Toast = ({
  showToast,
  message = 'This is a simple toast notification.',
}: Props) => {
  return (
    <div className="relative">
      {showToast && (
        <div className="fixed bottom-4 right-4 bg-gray-800 text-white text-sm rounded-lg shadow-lg px-4 py-3">
          <p>{message}</p>
        </div>
      )}
    </div>
  );
};
