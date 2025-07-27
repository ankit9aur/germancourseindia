'use client';
import React from 'react';

function LocationSection() {
  return (
    <section className="bg-white py-12 px-4 md:px-8 text-center" id="visit-center">
      <h2 className="text-2xl md:text-4xl font-bold text-red-600 mb-4">Visit Our Center</h2>
      <p className="text-gray-800 max-w-xl mx-auto mb-6">
        German Nurses Hub, 4th Floor, Shiv Sagar Complex, Shramdaan Marg,<br />
        near S.K. Govt. Hospital Sikar, Sakpura Mohlla, Sikar, Rajasthan 332001
      </p>

      {/* Embedded Google Map */}
      <div className="relative overflow-hidden rounded-lg shadow-md max-w-3xl mx-auto mb-6">
        <iframe
          title="German Nurses Hub Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3521.9981809327277!2d75.14858187527599!3d27.61368527627256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396ca5c50e4cf5df%3A0x95a6e063af8237c1!2sGerman%20Nurses%20Hub!5e0!3m2!1sen!2sin!4v1722063380493!5m2!1sen!2sin"
          width="100%"
          height="350"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-[350px] border-none"
        ></iframe>
      </div>

      {/* CTA Button */}
      <a
        href="https://www.google.com/maps/place/German+Nurses+Hub/@27.6136853,75.1485819,17z"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-red-500 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-red-600 transition"
      >
        View on Google Maps
      </a>
    </section>
  );
}

export default LocationSection;
