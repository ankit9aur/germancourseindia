'use client';
import React, { useState } from 'react';

const faqData = [
  {
    question: "Who can join this course?",
    answer: "Anyone above the age of 16, including students, professionals, or language enthusiasts, can enroll.",
  },
  {
    question: "Do I get a certificate after completion?",
    answer: "Yes, you’ll receive a course completion certificate. We also prepare you for Goethe/TestDaF/DSH certifications.",
  },
  {
    question: "What is the course duration for each level?",
    answer: "Each level takes approximately 66 hours — including 45 hours of training, 11 hours of group discussion, and 10 hours of exam prep.",
  },
  {
    question: "Do you offer job assistance?",
    answer: "Yes, our placement team will help you find suitable jobs post-course in translation, tourism, and teaching sectors.",
  },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="py-12 px-6 bg-white" aria-label="Frequently Asked Questions">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="border rounded-md shadow-sm">
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-4 bg-gray-100 hover:bg-gray-200 transition-all text-left"
                aria-expanded={activeIndex === index}
              >
                <span className="font-medium">{item.question}</span>
                <span>{activeIndex === index ? '−' : '+'}</span>
              </button>
              {activeIndex === index && (
                <div className="p-4 text-gray-700 bg-white border-t">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
