'use client';
import React from 'react';

const offerings = [
  {
    title: "Certified Native German Trainers",
    desc: "Learn from native-speaking experts with real exam experience and a focus on real-life communication.",
    color: "bg-red-100",
    textColor: "text-red-900",
  },
  {
    title: "Exam-Focused Curriculum (Goethe | Telc | ÖSD | DSH)",
    desc: "Our programs are specially designed to help you crack all major German language exams with confidence.",
    color: "bg-gray-300",
    textColor: "text-gray-900",
  },
  {
    title: "Customized German for Professionals & Students",
    desc: "We offer tailored training for nursing, IT, hospitality, and study abroad – built for your career goals in Germany.",
    color: "bg-sky-200",
    textColor: "text-sky-900",
  },
  {
    title: "10-in-1 German Mastery Program",
    desc: "📘 Grammar | 🗣️ Speaking | 🧠 Listening | ✍️ Writing | 📖 Reading | 🗂️ Vocabulary | 🧪 Exam Prep | 🎤 Interview Skills | 🎥 Live Practice | 🇩🇪 Cultural Know-how",
    color: "bg-yellow-200",
    textColor: "text-yellow-900",
  },
  {
    title: "Gold Membership Advantage",
    desc: "Enjoy 1-year premium access to recorded sessions, PDFs, mentorship, and exclusive learning tools.",
    color: "bg-purple-300",
    textColor: "text-purple-900",
  },
  {
    title: "Live Projects + Internship & Job Support",
    desc: "Work on real projects, attend weekly job training, and get guaranteed placement support for Germany.",
    color: "bg-red-200",
    textColor: "text-red-900",
  },
];

function Offerings() {
  return (
    <section className="py-12 px-6 bg-white" aria-label="Course Offerings">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
          Why Thousands of Learners Choose German Course India?
        </h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {offerings.map((item, idx) => (
            <div
              key={idx}
              className={`${item.color} ${item.textColor} p-6 rounded-lg shadow hover:shadow-md transition-all`}
            >
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Offerings;
