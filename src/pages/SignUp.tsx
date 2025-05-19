
import React from 'react';
import { SignUp as ClerkSignUp } from '@clerk/clerk-react';

const SignUpPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-blue-700 mb-2">CompliMate</h1>
          <p className="text-gray-600">
            Get started with your compliance management journey.
          </p>
        </div>
        <div className="mt-8">
          <ClerkSignUp />
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
