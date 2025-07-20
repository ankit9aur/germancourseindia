'use client';
import React from 'react';

const testimonials = [
  {
    name: "Priya Sharma",
    content: "The A1 to B2 training was extremely helpful. The trainers are supportive and really push you to speak fluently.",
    color: "bg-red-100",
    text: "text-red-900",
  },
  {
    name: "Rohit Mehra",
    content: "After completing C1, I cracked the Goethe certification! Thank you for the structured curriculum and mock sessions.",
    color: "bg-purple-100",
    text: "text-purple-900",
  },
  {
    name: "Aarti Verma",
    content: "Loved the flexibility of class timings and the real-time doubt solving sessions. Highly recommend this course.",
    color: "bg-yellow-100",
    text: "text-yellow-900",
  },
];

function Testimonials() {
  return (
    <section className="py-12 px-6 bg-white" aria-label="Student Testimonials">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-10 text-red-700">
          What Our Students Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className={`${testimonial.color} ${testimonial.text} p-6 rounded-xl shadow hover:shadow-lg transition-all text-left`}
            >
              <p className="italic text-sm md:text-base mb-4">
                “{testimonial.content}”
              </p>
              <p className="font-semibold text-sm md:text-base">— {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
