"use client";
import React from "react";
import { Briefcase, Rocket, Building } from "lucide-react";

// dummy exprince data for this Content
const experiences = [
  {
    title: "Founder & CEO",
    company: "Habib Consulting Group",
    date: "2008 - Present",
    description: [
      "Established a leading consulting firm specializing in business strategy.",
      "Delivered tailored solutions to over 50 multinational companies.",
      "Built a team of 15+ consultants and expanded operations to multiple regions.",
    ],
    icon: <Building className="text-orange-400 text-2xl" />,
  },
  {
    title: "Business Consultant",
    company: "Habib Consulting Group",
    date: "2012 - 2015",
    description: [
      "Advised Fortune 500 companies on market strategies.",
      "Led a $10M market entry project in Southeast Asia.",
      "Developed and implemented training programs for senior executives.",
    ],
    icon: <Briefcase className="text-green-400 text-2xl" />,
  },
  {
    title: "Entrepreneur & Co-Founder",
    company: "Tech Innovations LLC",
    date: "2006 - 2012",
    description: [
      "Co-founded a tech startup focused on developing AI-driven solutions.",
      "Secured $2M in seed funding.",
      "Scaled the team to 20 professionals, successfully exiting via acquisition.",
    ],
    icon: <Rocket className="text-blue-400 text-2xl" />,
  },
];

const ExperienceContent = () => {
  return (
    <div className="max-w-5xl mx-auto py-12 px-6 relative">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-100">
        Professional Experience
      </h2>
      <div className="relative flex flex-col items-center">
        <div className="absolute w-1 bg-primary h-full left-1/2 transform -translate-x-1/2 hidden md:block"></div>
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`relative w-full flex flex-col-reverse gap-12 items-center md:flex-row mb-12  ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}>
            <div className="w-full md:w-1/2 px-4 md:px-8 text-center md:text-left">
              <div className="bg-[#48494D33] py-8 p-4 rounded-lg shadow-lg  relative">
                <p className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-gray-300 px-3 py-1 text-sm rounded-lg border border-gray-700">
                  {exp.title}
                </p>
                <p className="text-sm text-gray-400">{exp.date}</p>
                <h3 className="text-2xl font-semibold text-gray-100">
                  {exp.title}
                </h3>
                <h4 className="text-lg font-medium text-primary">
                  {exp.company}
                </h4>
                <ul className="mt-2 text-gray-300 list-disc pl-5">
                  {exp.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 border-4 border-gray-700 mx-4 mt-6 md:mt-0">
              {exp.icon}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceContent;
