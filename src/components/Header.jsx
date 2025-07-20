'use client';
import React from 'react';

function Header() {
  return (
    <header
      className="flex justify-between items-center px-6 py-4 shadow bg-white z-10 sticky top-0"
      role="banner"
    >
      {/* Logo */}
      <a href="/" aria-label="German Course India">
        <img
          src="logo.png"
          alt="German Course India Logo"
          className="h-10 w-auto"
          loading="lazy"
        />
      </a>

      {/* CTA Buttons */}
      <div className="space-x-3">
        <button className="bg-purple-200 text-sm px-4 py-1 rounded hover:bg-purple-300 transition-all">
          Book Free Demo
        </button>
        <button className="bg-purple-300 text-sm px-4 py-1 rounded hover:bg-purple-400 transition-all">
          Get Quick Call Back
        </button>
      </div>
    </header>
  );
}

export default Header;
