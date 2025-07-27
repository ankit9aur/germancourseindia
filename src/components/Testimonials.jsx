'use client';
import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    name: "Neha Kumari",
    content: "I started with zero German knowledge, and today I’m working as a nurse in Germany. Thank you, German Course India!",
    color: "bg-red-100",
    text: "text-red-900",
  },
  {
    name: "Ankush Sinha",
    content: "After completing B2, I secured a job as a translator in a reputed MNC in Bangalore. Highly recommend their training!",
    color: "bg-purple-100",
    text: "text-purple-900",
  },
  {
    name: "Meenakshi Yadav",
    content: "Thanks to German Course India, I cracked the Goethe A1 exam with ease. The mock tests and practice sessions were very helpful.",
    color: "bg-yellow-100",
    text: "text-yellow-900",
  },
  {
    name: "Simran Kaur",
    content: "I am now working in a German hospital as a registered nurse. All credit goes to this institute for their strong language foundation and placement help.",
    color: "bg-blue-100",
    text: "text-blue-900",
  },
  {
    name: "Mohit Rana",
    content: "The curriculum is so well-designed that I cleared TELC B1 and got placed in the tourism sector in Germany.",
    color: "bg-green-100",
    text: "text-green-900",
  },
  {
    name: "Priya Solanki",
    content: "Classes are flexible and the trainers are supportive. I was able to learn German while continuing my studies.",
    color: "bg-red-100",
    text: "text-red-900",
  },
  {
    name: "Rashmi Mishra",
    content: "Their B2 preparation helped me get my teaching certification approved in Germany. Now I teach German to school students!",
    color: "bg-purple-100",
    text: "text-purple-900",
  },
  {
    name: "Deepak Thakur",
    content: "Excellent support from faculty and staff. I’m currently working as a German-speaking customer care executive in Pune.",
    color: "bg-yellow-100",
    text: "text-yellow-900",
  },
  {
    name: "Riya Patel",
    content: "I got selected in a hospital in Hamburg. Their job placement team made the entire process smooth.",
    color: "bg-blue-100",
    text: "text-blue-900",
  },
  {
    name: "Sandeep Rawat",
    content: "Cracked C1 in my first attempt! Their mock tests and live speaking sessions helped me boost my confidence.",
    color: "bg-green-100",
    text: "text-green-900",
  },
  {
    name: "Ritu Chauhan",
    content: "Very beginner-friendly course. Within 3 months, I was able to have basic conversations in German.",
    color: "bg-red-100",
    text: "text-red-900",
  },
  {
    name: "Ankit Joshi",
    content: "After finishing A2, I applied for a part-time job in a travel agency. Knowing German gave me an edge.",
    color: "bg-purple-100",
    text: "text-purple-900",
  },
  {
    name: "Poonam Sharma",
    content: "They helped me prepare for the Goethe exam and guided me for the nursing job interview in Germany.",
    color: "bg-yellow-100",
    text: "text-yellow-900",
  },
  {
    name: "Kavita Meena",
    content: "Highly recommend this institute if you're looking for job placement after language learning.",
    color: "bg-blue-100",
    text: "text-blue-900",
  },
  {
    name: "Vikram Singh",
    content: "Great platform for nurses. I got placement assistance and guidance for the embassy process as well.",
    color: "bg-green-100",
    text: "text-green-900",
  },
  {
    name: "Niharika Jain",
    content: "The grammar explanations are so simple and effective. I cleared B1 and started working in tourism.",
    color: "bg-red-100",
    text: "text-red-900",
  },
  {
    name: "Rajeev Kumar",
    content: "I joined the course during my graduation. Today I am a certified German language trainer. Thank you GCI!",
    color: "bg-purple-100",
    text: "text-purple-900",
  },
  {
    name: "Megha Thakur",
    content: "They focus on both speaking and writing skills. This helped me pass my exam with confidence.",
    color: "bg-yellow-100",
    text: "text-yellow-900",
  },
  {
    name: "Saurabh Joshi",
    content: "Now I work as a German language interpreter for a multinational logistics company.",
    color: "bg-blue-100",
    text: "text-blue-900",
  },
  {
    name: "Preeti Sehgal",
    content: "After completing B2, I got a job offer from a medical institute in Berlin.",
    color: "bg-green-100",
    text: "text-green-900",
  },
  {
    name: "Shubham Rathi",
    content: "They provide real-time doubt sessions, speaking practice, and grammar tricks. Truly helpful for fast learners.",
    color: "bg-red-100",
    text: "text-red-900",
  },
  {
    name: "Tanya Mishra",
    content: "I’m now studying in Germany after completing my B1 at German Course India. Great journey!",
    color: "bg-purple-100",
    text: "text-purple-900",
  },
  {
    name: "Raman Gill",
    content: "The online class quality is just like offline. Their support team is always ready to help.",
    color: "bg-yellow-100",
    text: "text-yellow-900",
  },
  {
    name: "Alisha Khan",
    content: "Thanks to their intensive training, I received my Goethe B2 certificate and got placed as a nurse.",
    color: "bg-blue-100",
    text: "text-blue-900",
  },
  {
    name: "Kiran Chauhan",
    content: "I loved how every level had separate trainers focusing on reading, writing, and speaking.",
    color: "bg-green-100",
    text: "text-green-900",
  },
  {
    name: "Nikita Sharma",
    content: "The best part is their placement support. I got hired for a teaching position in Delhi after my course.",
    color: "bg-red-100",
    text: "text-red-900",
  },
  {
    name: "Abhishek Singh",
    content: "Flexible timing and clear concepts. Now I handle German clients at my company confidently.",
    color: "bg-purple-100",
    text: "text-purple-900",
  },
  {
    name: "Pooja Negi",
    content: "Affordable fees, high-quality training, and full support until job placement.",
    color: "bg-yellow-100",
    text: "text-yellow-900",
  },
  {
    name: "Rahul Bhatia",
    content: "Even after completing the course, they kept helping me with visa documentation and job search.",
    color: "bg-blue-100",
    text: "text-blue-900",
  },
  {
    name: "Jaspreet Kaur",
    content: "I recommend GCI to every nurse aiming to work in Germany. Their placement system is very strong.",
    color: "bg-green-100",
    text: "text-green-900",
  },
  {
    name: "Anjali Verma",
    content: "German Course India made my dream come true. I now work in a reputed German hospital.",
    color: "bg-red-100",
    text: "text-red-900",
  },
  {
    name: "Naveen Rajput",
    content: "I cleared Goethe A2 and cracked an interview at a travel company. Thank you!",
    color: "bg-purple-100",
    text: "text-purple-900",
  },
  {
    name: "Sanya Dube",
    content: "I got full training for B1 along with cultural tips, speaking sessions, and job readiness workshops.",
    color: "bg-yellow-100",
    text: "text-yellow-900",
  },
];

function Testimonials() {
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState(null); // Track slide direction: 'next' or 'prev'

  const handleNext = () => {
    setDirection('next');
    setStartIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection('prev');
    setStartIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Reset direction after animation completes
  useEffect(() => {
    if (direction) {
      const timer = setTimeout(() => setDirection(null), 600); // Match animation duration
      return () => clearTimeout(timer);
    }
  }, [direction]);

  // Get indices for the three testimonials to display
  const indices = [
    startIndex % testimonials.length,
    (startIndex + 1) % testimonials.length,
    (startIndex + 2) % testimonials.length,
  ];

  // Animation classes based on direction
  const getAnimationClass = (i) => {
    if (!direction) return '';
    if (direction === 'next') {
      return i === 1
        ? 'animate-slide-in-from-right'
        : 'animate-slide-in-from-right-secondary';
    }
    if (direction === 'prev') {
      return i === 1
        ? 'animate-slide-in-from-left'
        : 'animate-slide-in-from-left-secondary';
    }
    return '';
  };

  return (
    <section className="py-12 px-6 bg-white" aria-label="Student Testimonials">
      <style jsx>{`
        @keyframes slide-in-from-right {
          from {
            transform: translateX(100%) scale(0.8);
            opacity: 0;
          }
          to {
            transform: translateX(0) scale(1);
            opacity: 1;
          }
        }
        @keyframes slide-in-from-right-secondary {
          from {
            transform: translateX(100%) scale(0.8);
            opacity: 0;
          }
          to {
            transform: translateX(0) scale(0.9);
            opacity: 0.3;
          }
        }
        @keyframes slide-in-from-left {
          from {
            transform: translateX(-100%) scale(0.8);
            opacity: 0;
          }
          to {
            transform: translateX(0) scale(1);
            opacity: 1;
          }
        }
        @keyframes slide-in-from-left-secondary {
          from {
            transform: translateX(-100%) scale(0.8);
            opacity: 0;
          }
          to {
            transform: translateX(0) scale(0.9);
            opacity: 0.3;
          }
        }
        .animate-slide-in-from-right {
          animation: slide-in-from-right 0.6s ease-out forwards;
        }
        .animate-slide-in-from-right-secondary {
          animation: slide-in-from-right-secondary 0.6s ease-out forwards;
        }
        .animate-slide-in-from-left {
          animation: slide-in-from-left 0.6s ease-out forwards;
        }
        .animate-slide-in-from-left-secondary {
          animation: slide-in-from-left-secondary 0.6s ease-out forwards;
        }
      `}</style>
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-10 text-red-700">
          What Our Students Say
        </h2>
        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-0 md:-left-12 top-1/2 transform -translate-y-1/2 bg-transparent hover:bg-gray-100 text-gray-800 p-2 rounded-full z-10"
            aria-label="Previous testimonials"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Testimonials */}
          <div className="flex items-center justify-center w-full">
            {indices.map((index, i) => (
              <div
                key={index}
                className={`${
                  i === 1 ? 'w-full md:w-1/3' : 'hidden md:block w-1/4'
                } mx-2 ${i !== 1 ? 'opacity-30 transform scale-90 translate-y-4' : ''} ${getAnimationClass(i)}`}
              >
                <div
                  className={`${testimonials[index].color} ${testimonials[index].text} p-6 rounded-xl shadow ${
                    i === 1 ? 'hover:shadow-lg' : ''
                  } transition-all text-left`}
                >
                  <p className={`italic ${i === 1 ? 'text-base md:text-lg' : 'text-sm'} mb-4`}>
                    “{testimonials[index].content}”
                  </p>
                  <p className={`font-semibold ${i === 1 ? 'text-base' : 'text-sm'}`}>
                    — {testimonials[index].name}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-0 md:-right-12 top-1/2 transform -translate-y-1/2 bg-transparent hover:bg-gray-100 text-gray-800 p-2 rounded-full z-10"
            aria-label="Next testimonials"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;