'use client';

import React from 'react';

export default function ThankYouPage() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-200 via-pink-100 to-yellow-100 p-6 text-gray-900">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg text-center">
        <h1 className="text-4xl font-bold text-purple-700 mb-4">Thank You!</h1>
        <p className="text-lg mb-6">
          We have received your request. Please check your email for confirmation and further details.
        </p>
        <p className="text-sm text-gray-600 mb-4">
          If you don't receive an email soon, please check your spam/junk folder or contact us at <a href="mailto:info@germancourseindia.com" className="text-purple-600 underline">info@germancourseindia.com</a>.
        </p>
        <a
          href="/"
          className="inline-block mt-4 bg-purple-600 text-white font-semibold py-2 px-6 rounded hover:bg-purple-700 transition"
        >
          Back to Home
        </a>
      </div>
    </section>
  );
}
