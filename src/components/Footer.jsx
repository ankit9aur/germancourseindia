'use client';
import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10" role="contentinfo">
      <div className="max-w-6xl mx-auto text-center px-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} German Course India. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          Designed for language learners with ❤️ from India.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
