import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignInLink = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      navigate('/our-presentation');
      window.scrollTo({ top: 0, left: 0 });
    }, 2000);
  };

  return (
    <div>
      {isLoading ? (
        // Full-screen loading container
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
          <div className="flex flex-col items-center justify-center space-y-2">
            <div className="w-10 h-10 border-t-4 border-b-4 border-[#DF319A] rounded-full animate-spin"></div>
            <span className="text-[#DF319A] text-lg font-semibold">
              Authenticating Trekuartista's profile... Please wait.
            </span>
          </div>
        </div>
      ) : (
        <Link
          to="/our-presentation"
          onClick={handleClick}
          className="text-base font-custom1 underline underline-offset-8 hover:text-[#DF319A] hover:scale-125 hover:duration-200 hover:ease-linear"
        >
          Sign In <i className="fas fa-user mx-1"></i>
        </Link>
      )}
    </div>
  );
};

export default SignInLink;
