import { motion } from 'framer-motion';
import React from 'react';
import SectionTitle from './SectionTitle';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github?: string;
  demo?: string;
  isGitHubCard?: boolean;
}

const projects: Project[] = [
  {
    title: "Dynamic AI Customer Support API",
    description: "Production-ready AI customer support backend built with FastAPI. It combines retrieval, reranking, confidence validation, JWT auth with RBAC, Redis-backed caching, streaming responses, and an offline ingestion worker with persisted vector artifacts.",
    technologies: ["Python", "FastAPI", "RAG", "Docker", "LLMs"],
    image: "images/1.png",
    github: "https://github.com/ShadowMonarchX/dynamic-ai-customer-support"
  },
  {
    title: "Gemma Local Chatbot",
    description: "Local-first AI chatbot with runtime model switching between Gemma variants and hardware-aware inference routing for Apple Silicon, Intel CPU, and CUDA. Streams responses over SSE and includes a React admin dashboard for runtime metrics, along with prompt-injection detection and rate limiting.",
    technologies: ["Python", "Gemma-4", "FastAPI", "LLMs", "Fine-Tune Models"],
    image: "images/2.png",
    github: "https://github.com/ShadowMonarchX/gemma-chatbot"
  },
  {
    title: "Electric RAG Chatbot",
    description: "Retrieval-Augmented Generation system with multi-format document ingestion, OCR, intelligent chunking, and multi-LLM orchestration. Uses Supabase as a vector database, TF-IDF plus vector-similarity reranking, and a React + Tailwind frontend for chat and document upload.",
    technologies: ["Python", "FastAPI", "RAG", "Sentence Transformers", "LLMs", "Promt Engineering"],
    image: "images/3.png",
    github: "https://github.com/ShadowMonarchX/RAG-Enhanced-Chatbot"
  },
  {
    title: "LLM Fine-Tuning Toolkit",
    description: "Hands-on repository for fine-tuning open-source LLMs such as Mistral and LLaMA 2 using QLoRA and PEFT for memory-efficient training. Includes Jupyter notebooks plus end-to-end scripts for dataset prep, training configuration, evaluation, and deployment.",
    technologies: ["Python", "QLoRA", "PEFT", "Transformers", "Jupyter"],
    image: "images/4.png",
    github: "https://github.com/ShadowMonarchX/Finetuning-LLM-main"
  },
  {
    title: "Django React Auth API",
    description: "Full-stack authentication system with a Django REST Framework backend and React frontend. Uses JWT access and refresh tokens for registration, login, logout, and protected routes, with CORS configured for local development.",
    technologies: ["Django", "Django REST Framework", "djangorestframework-simplejwt", "React", "JWT"],
    image: "images/5.png",
    github: "https://github.com/ShadowMonarchX/Django_react_auth_api"
  },
  {
    title: "GitHub",
    description: "MY GITHUB",
    technologies: [],
    image: "",
    github: "https://github.com/ShadowMonarchX",
    isGitHubCard: true
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <SectionTitle title="My Projects" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`glass-effect theme-surface rounded-2xl overflow-hidden shadow-xl ${project.isGitHubCard ? 'cursor-pointer' : ''}`}
            >
              {project.isGitHubCard ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-full min-h-[400px] flex items-center justify-center theme-surface-solid hover:bg-[var(--theme-surface-strong)] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-color"
                  aria-label="Visit my GitHub profile"
                >
                  <svg className="w-12 h-12 theme-heading" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span className="theme-heading text-xl font-medium pl-2">Visit My GitHub</span>
                </a>
              ) : (
                <>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(15,23,42,0.72)] to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-white/20 text-white text-sm rounded-full backdrop-blur-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="theme-text-muted mb-4">{project.description}</p>
                    <div className="flex justify-between items-center">
                      {project.github && (
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center theme-text-muted hover:text-primary-color transition-colors duration-300"
                        >
                          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                          </svg>
                          GitHub
                        </motion.a>
                      )}
                      {project.demo && (
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary"
                        >
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          Live Demo
                        </motion.a>
                      )}
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
