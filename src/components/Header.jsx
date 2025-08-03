'use client';
import React, { useState, useRef, useEffect } from 'react';

const MODAL_TYPES = {
  demo: {
    title: 'Book a Free Demo',
    actionText: 'Book Demo',
    subject: 'New Demo Request'
  },
  call: {
    title: 'Get a Quick Call Back',
    actionText: 'Request Call',
    subject: 'New Callback Request'
  }
};

function Header() {
  const [open, setOpen] = useState(false);
  const [modalType, setModalType] = useState('demo');
  const redirectInputRef = useRef(null);

  // Set the dynamic redirect endpoint
  useEffect(() => {
    if (redirectInputRef.current) {
      redirectInputRef.current.value = window.location.origin + '/thankyou';
    }
  }, [open]);

  // Open modal for given type
  const openModal = (type) => {
    setModalType(type);
    setOpen(true);
  };

  // Close modal on Esc key or overlay click
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') setOpen(false);
    }
    if (open) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open]);

  return (
    <>
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
          <button
            className="bg-purple-200 text-sm px-4 py-1 rounded hover:bg-purple-300 transition-all"
            onClick={() => openModal('demo')}
          >
            Book Free Demo
          </button>
          <button
            className="bg-purple-300 text-sm px-4 py-1 rounded hover:bg-purple-400 transition-all"
            onClick={() => openModal('call')}
          >
            Get Quick Call Back
          </button>
        </div>
      </header>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 flex z-50 items-center justify-center bg-black bg-opacity-40">
          {/* Overlay for closing modal */}
          <div className="absolute inset-0" onClick={() => setOpen(false)}></div>
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8 w-full max-w-sm sm:max-w-md z-10 relative my-8 max-h-[90vh] overflow-y-auto">
            {/* Close button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-4 text-xl text-gray-500 hover:text-gray-800"
              aria-label="Close"
            >×</button>
            <h2 className="text-2xl font-semibold mb-4 text-purple-700 text-center">
              {MODAL_TYPES[modalType].title}
            </h2>
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="space-y-4"
            >
              {/* Web3Forms config */}
              <input type="hidden" name="access_key" value="3425776e-6842-43e2-b570-3e023846329e" />
              <input type="hidden" name="subject" value={MODAL_TYPES[modalType].subject} />
              <input ref={redirectInputRef} type="hidden" name="redirect" value="" />
              <input type="hidden" name="form_type" value={modalType} />

              <label className="block">
                <span className="text-sm">Your Name</span>
                <input
                  type="text"
                  name="name"
                  className="w-full p-2 border rounded mt-1"
                  required
                  autoFocus
                />
              </label>
              <label className="block">
                <span className="text-sm">Mobile Number</span>
                <input
                  type="text"
                  name="mobile"
                  placeholder="e.g. 9876543210"
                  className="w-full p-2 border rounded mt-1"
                  required
                  pattern="[0-9]{10,}"
                />
              </label>
              <label className="block">
                <span className="text-sm">Email Address</span>
                <input
                  type="email"
                  name="email"
                  className="w-full p-2 border rounded mt-1"
                  required
                />
              </label>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-400 to-red-500 text-white py-2 rounded-md hover:from-purple-500 hover:to-red-600 transition-all font-semibold text-sm"
              >
                {MODAL_TYPES[modalType].actionText}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
