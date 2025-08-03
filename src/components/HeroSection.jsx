'use client';
import React, { useEffect, useRef } from 'react';

function HeroSection() {
  const redirectInputRef = useRef(null);

  useEffect(() => {
    if (redirectInputRef.current) {
      // Set redirect URL to current host + /thankyou
      redirectInputRef.current.value = window.location.origin + '/thankyou';
    }
  }, []);

  return (
    <section className="py-12 px-6 bg-gradient-to-r from-red-100 via-yellow-50 to-purple-100 text-gray-900">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left Side Text */}
        <div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-red-700 leading-tight">
            German Language Course – Job Guarantee Program
          </h1>
          <ul className="list-disc pl-5 space-y-1 text-sm md:text-base mb-4">
            <li>140 Hrs (100 Hrs Training + 20 Hrs GD + 20 Hrs Exam Prep) for Each Level.</li>
            <li>🎯 Crack Goethe | Telc | ÖSD Exams</li>
            <li>🚀 Join Now & Start Speaking German with Confidence!</li>
          </ul>
          <div className="mt-4 text-sm">
            <span className="text-yellow-600 font-bold">⭐ 4.9</span>
            <span className="ml-2 text-gray-700">(2354 Ratings)</span>
            <span className="ml-2 text-purple-700 font-medium">👨‍🎓 2518 Learners</span>
          </div>
        </div>

        {/* Right Side Form */}
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="bg-white text-black p-6 rounded-xl shadow-lg border border-gray-200 max-w-md w-full"
        >
          {/* Web3Forms config */}
          <input type="hidden" name="access_key" value="3425776e-6842-43e2-b570-3e023846329e" />
          <input type="hidden" name="subject" value="New German Course Brochure Request" />
          {/* Redirect set dynamically */}
          <input
            ref={redirectInputRef}
            type="hidden"
            name="redirect"
            id="redirect-input"
            value=""
          />
          {/* This makes reply-to work in your notification (optional, Web3Forms does this by default) */}
          {/* <input type="hidden" name="replyto" value="" /> */}

          <label className="block mb-2 text-sm font-medium">Download Course Brochure</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-2 border border-gray-300 rounded mb-3 text-sm"
            required
          />
          <div className="flex gap-2 mb-3">
            <select
              name="phoneCode"
              className="w-1/3 p-2 border border-gray-300 rounded text-sm"
              defaultValue="+91"
            >
              <option value="+91">+91</option>
              {/* Add more country codes if needed */}
            </select>
            <input
              type="text"
              name="mobile"
              placeholder="Mobile No *"
              className="w-2/3 p-2 border border-gray-300 rounded text-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-400 to-red-500 text-white py-2 rounded-md hover:from-purple-500 hover:to-red-600 transition-all font-semibold text-sm"
          >
            Send Me Brochure »
          </button>
        </form>
      </div>
    </section>
  );
}

export default HeroSection;
