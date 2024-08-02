// ErrorPage.js
import React from 'react';

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4 font-custom">404</h1>
        <p className="mb-8 text-opacity-40 text-3xl lg:text-6xl font-custom text-white">Page not found</p>
        <p className="text-white mb-4 font-custom1">
          The page you are looking for might be in another universe.
        </p>
        <button
          className="border hover:bg-white hover:text-black duration-700 text-white font-bold py-2 px-4 mb-4 mt-4 w-1/2 font-custom1"
          onClick={() => window.history.back()}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
