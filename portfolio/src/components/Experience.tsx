import { motion } from 'framer-motion';
import React from 'react';
import SectionTitle from './SectionTitle';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    title: "AI Engineer",
    company: "Innoventix Solutions",
    period: "Nov 2025 - Present",
    description: [
      "Project: WeShape Live Platform — Developed and deployed a real-time AI-powered face matching platform using Python, FastAPI, and InsightFace, enabling scalable and low-latency identity verification.",
      "Implemented image validation, duplicate detection, face quality assessment, blur detection, and quality scoring pipelines, improving recognition accuracy, dataset quality, and overall system reliability.",
      "Project: Speech-to-Speech Translation System — Designed and developed a multilingual Speech-to-Speech Translation pipeline (STT → MT → TTS) supporting real-time voice translation across multiple languages.",
      "Integrated OpenAI Whisper Large V3 for Speech-to-Text, Google MADLAD-400-3B for machine translation, and OmniVoice for natural Text-to-Speech synthesis.",
      "Optimized inference on AWS EC2 g4dn.xlarge and local NVIDIA RTX 3060 GPUs using ONNX Runtime and INT8 quantization, reducing latency and improving deployment efficiency.",
      "Managed model storage and distribution using Hugging Face Buckets, hosting translation, speech recognition, and synthesis models for scalable deployment and version-controlled model management."
    ],
    technologies: ["Python", "FastAPI", "InsightFace", "OpenAI Whisper", "MADLAD-400", "OmniVoice", "ONNX Runtime", "AWS EC2", "NVIDIA RTX 3060", "Hugging Face"]
  },
  {
    title: "Software Engineer Intern",
    company: "Agendeas Solution",
    period: "Jan 2025 - Jun 2025",
    description: [
      "Developed backend features, automation tools, and RESTful APIs using Python, improving operational efficiency and enabling seamless system integrations.",
      "Enhanced application reliability, scalability, and performance through code optimization, debugging, testing, and collaborative software development practices."
    ],
    technologies: ["Python", "REST APIs", "Automation", "Debugging", "Testing"]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <SectionTitle title="Work Experience" />

        <div className="relative">
          {/* Decorative weaving lines */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path
                d="M0,20 Q25,0 50,20 T100,20"
                stroke="rgba(var(--primary-color-rgb), 0.1)"
                strokeWidth="0.5"
                fill="none"
                className="animate-draw"
              />
              <path
                d="M0,40 Q75,20 100,40"
                stroke="rgba(var(--primary-color-rgb), 0.1)"
                strokeWidth="0.5"
                fill="none"
                className="animate-draw"
              />
              <path
                d="M0,60 Q25,80 50,60 T100,60"
                stroke="rgba(var(--primary-color-rgb), 0.1)"
                strokeWidth="0.5"
                fill="none"
                className="animate-draw"
              />
              <path
                d="M0,80 Q75,60 100,80"
                stroke="rgba(var(--primary-color-rgb), 0.1)"
                strokeWidth="0.5"
                fill="none"
                className="animate-draw"
              />
            </svg>
          </div>

          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-color rounded-full z-10 shadow-lg"></div>

                {/* Thread connectors */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-0.5 h-24 bg-gradient-to-b from-primary-color/50 to-transparent ${index % 2 === 0 ? 'top-full' : 'bottom-full'
                  }`}></div>
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-0.5 h-24 bg-gradient-to-b from-transparent to-primary-color/50 ${index % 2 === 0 ? 'bottom-full' : 'top-full'
                  }`}></div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}>
                  <div className="glass-effect rounded-2xl p-8 shadow-xl bg-white/80 backdrop-blur-sm">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-2">{exp.title}</h3>
                        <p className="text-xl text-primary-color font-medium">{exp.company}</p>
                      </div>
                      <div className="mt-4 md:mt-0">
                        <span className="px-4 py-2 bg-primary-color/15 text-primary-color rounded-full text-sm font-semibold">
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        {exp.description.map((item, i) => (
                          <motion.li
                            key={`${exp.company}-${i}`}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                          >
                            {item}
                          </motion.li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 mt-6">
                        {exp.technologies.map((tech, i) => (
                          <motion.span
                            key={`${exp.company}-${tech}`}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm font-medium shadow-sm"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
