'use client';
import React, { useState } from 'react';

const faqData = [
  {
    question: "Who can join this course?",
    answer: "Anyone aged 19 and above can join — whether you're a student, a working professional, a nursing/medical aspirant, or simply a language enthusiast planning a future in Germany. No prior knowledge of German is required!",
  },
  {
    question: "Do I get a certificate after completion?",
    answer: "Yes! You’ll receive a course completion certificate from German Course India.\nWe also provide full exam preparation for globally recognized certifications like:\nGoethe, Telc, ÖSD, TestDaF, and DSH.\nBe confident and exam-ready!",
  },
  {
    question: "What is the course duration for each level?",
    answer: "Each level (A1 to C2) includes 140 hours of structured training, divided as follows:\n✅ 100 Hrs Live Classes\n💬 20 Hrs Group Discussion & Speaking Practice\n📝 20 Hrs Exam Preparation & Mock Tests",
  },
  {
    question: "Do you offer job assistance?",
    answer: "Yes! At German Course India, we provide 100% job placement assistance in both India and Germany.\nOur dedicated placement team helps you explore career opportunities in:\n🇩🇪 Germany – Nursing, Healthcare, Hospitality, and Technical fields\n🇮🇳 India – Teaching, Translation, Tourism, and Corporate roles\n\nWe offer:\n✔️ CV & Interview Prep\n✔️ Weekly Job Alerts\n✔️ Direct Employer Connects\n✔️ Guaranteed Internship Programs",
  },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="py-12 px-6 bg-white" aria-label="Frequently Asked Questions">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-10 text-red-700">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 text-gray-900 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-6 bg-transparent hover:bg-gray-100 transition-colors duration-200 text-left focus:outline-none focus:ring-2 focus:ring-grey-500 focus:ring-opacity-50"
                aria-expanded={activeIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-base md:text-lg font-semibold">{item.question}</span>
                <svg
                  className={`w-6 h-6 transform transition-transform duration-300 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activeIndex === index && (
                <div
                  id={`faq-answer-${index}`}
                  className="px-6 pb-6 text-gray-700 text-sm md:text-base whitespace-pre-line animate-slide-down"
                >
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
            max-height: 0;
          }
          to {
            opacity: 1;
            transform: translateY(0);
            max-height: 500px; /* Adjust based on content */
          }
        }
        .animate-slide-down {
          animation: slide-down 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  );
}

export default FAQ;