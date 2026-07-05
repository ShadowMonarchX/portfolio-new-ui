import { motion } from 'framer-motion';
import React from 'react';
import SectionTitle from './SectionTitle';

const Certifications: React.FC = () => {
  const certifications = [
    {
      name: "AWS Cloud Technical Essentials",
      issuer: "AWS / Coursera",
      date: "Feb 2025",
      link: "https://coursera.org/verify/2ZWEI3HO6RZM",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      )
    },
    {
      name: "Inheritance and Data Structures in Java",
      issuer: "University of Pennsylvania / Coursera",
      date: "Sep 2023",
      link: "https://coursera.org/verify/SRTBPHT74E5Q",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2l9 7-9 7-9-7 9-7zM12 22l9-7v-5l-9 7-9-7v5l9 7z" />
        </svg>
      )
    },
    {
      name: "Exploratory Data Analysis for Machine Learning",
      issuer: "IBM / Coursera",
      date: "Aug 2024",
      link: "https://coursera.org/verify/6FMQGQDRJ9PY",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z" />
        </svg>
      )
    },
    {
      name: "Python (Basic)",
      issuer: "HackerRank",
      date: "Jan 2025",
      link: "#",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      name: "Intro to Machine Learning",
      issuer: "Kaggle",
      date: "Jun 2025",
      link: "#",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z" />
        </svg>
      )
    },
    {
      name: "Intermediate Machine Learning",
      issuer: "Kaggle",
      date: "Jun 2025",
      link: "#",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z" />
        </svg>
      )
    },
    {
      name: "The LLM Course: Fundamentals of LLMs",
      issuer: "Hugging Face",
      date: "Jun 2025",
      link: "#",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      name: "The MCP Course: Fundamentals of MCP",
      issuer: "Hugging Face",
      date: "Jun 2025",
      link: "#",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
  ];

  return (
    <section id="certifications" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <SectionTitle title="Certifications" />

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect theme-surface rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full focus:outline-none focus:ring-2 focus:ring-primary-color rounded-2xl"
                aria-label={`${cert.name} certificate`}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary-color/10 flex items-center justify-center flex-shrink-0">
                    {cert.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold theme-heading mb-1">{cert.name}</h3>
                    <p className="theme-text-muted">{cert.issuer}</p>
                    <p className="text-sm theme-text-muted mt-1">{cert.date}</p>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section >
  );
};

export default Certifications;
