'use client';
import React from 'react';

const offerings = [
  {
    title: "Native Experienced Trainers",
    desc: "Learn from the Certified Native German Trainers",
    color: "bg-red-100",
    textColor: "text-red-900",
  },
  {
    title: "Customized German Language",
    desc: "One of a Kind Customized German Language Course",
    color: "bg-gray-300",
    textColor: "text-gray-900",
  },
  {
    title: "Comprehensive Curriculum",
    desc: "Curriculum designed as per the DSH, the TestDaF, and the Goethe-Institut Examination",
    color: "bg-sky-200",
    textColor: "text-sky-900",
  },
  {
    title: "10 in 1 program",
    desc: "Access to T.P.I.C.P.E.B.H.M Features of the German Language Course",
    color: "bg-yellow-200",
    textColor: "text-yellow-900",
  },
  {
    title: "Gold Membership",
    desc: "Get a 1-Year Gold Membership of Language Academy",
    color: "bg-purple-300",
    textColor: "text-purple-900",
  },
  {
    title: "Live Projects",
    desc: "Live Projects + Guaranteed Internship + Weekly Job Support + Recorded Videos + Monthly Bootcamp Sessions",
    color: "bg-red-200",
    textColor: "text-red-900",
  },
];

function Offerings() {
  return (
    <section className="py-12 px-6 bg-white" aria-label="Course Offerings">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
          Why Choose Our German Course?
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
