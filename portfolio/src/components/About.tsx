import { motion } from 'framer-motion';
import React from 'react';
import SectionTitle from './SectionTitle';

const About: React.FC = () => {
  const skills = [
    { name: 'Python', level: 90, color: '#4B8BBE' },
    { name: 'Machine Learning', level: 85, color: '#38B2AC' },
    { name: 'PyTorch', level: 80, color: '#EE4C2C' },
    { name: 'Model Evaluation/Experimentation', level: 80, color: '#F6AD55' },
    { name: 'SQL', level: 75, color: '#F29111' },
    { name: 'LangChain/LangGraph', level: 75, color: '#61DAFB' },
    { name: 'Transformers/LoRA', level: 75, color: '#FF6B6B' },
    { name: 'MLOps (Monitoring)', level: 70, color: '#805AD5' },
    { name: 'Docker', level: 70, color: '#2496ED' },
    { name: 'Cloud (AWS/GCP)', level: 70, color: '#4299E1' },
    { name: 'Vector DBs (Pinecone/FAISS)', level: 60, color: '#48BB78' },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <SectionTitle title="About Me" />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-effect rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Who I Am</h3>
              <p className="text-gray-600 mb-4">
                I live in that sweet spot where models, infra, and product meet. I've built everything from RAG systems that actually work (not just sound fancy in decks) to training and evaluation pipelines that hold up outside a notebook, to deployment stacks running on cloud infra that doesn't randomly catch fire. I think like a researcher, build like an engineer, and ship like someone who's on call for it.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I love owning problems end-to-end — experimenting with architectures, wiring up the pipelines that train and serve them, and keeping the whole thing observable and reproducible in production. Whether it's chasing a research idea to see if it actually generalizes or hardening a pipeline so it survives 3am traffic spikes, I'm obsessed with turning wild ideas into systems that hold up under real load.
                <br />
                <br />
                TL;DR: I can push the research forward, build the systems that carry it, and make sure it stays alive once it's live.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glass-effect rounded-xl p-4 shadow-lg"
              >
                <div className="text-3xl font-bold text-primary-color mb-2">1+</div>
                <div className="text-gray-600">Years Experience</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glass-effect rounded-xl p-4 shadow-lg"
              >
                <div className="text-3xl font-bold text-primary-color mb-2">3+</div>
                <div className="text-gray-600">Production Deployments</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glass-effect rounded-xl p-4 shadow-lg"
              >
                <div className="text-3xl font-bold text-primary-color mb-2">6+</div>
                <div className="text-gray-600">Personal Projects</div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-effect rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Skills</h3>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="h-2 rounded-full"
                        style={{ width: `${skill.level}%`, backgroundColor: skill.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-effect rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Education</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary-color/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-color" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Bachelor of Technology</h4>
                    <p className="text-gray-600">Computer Engineering</p>
                    <p className="text-sm text-gray-500">2022 - 2026</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
