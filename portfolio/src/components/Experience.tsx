import { motion, useReducedMotion } from 'framer-motion';
import React from 'react';
import SectionTitle from './SectionTitle';

interface ExperienceProject {
  name: string;
  summary: string;
  responsibilities: string[];
  achievements: string[];
  techStack: string[];
  impact?: string[];
}

interface ExperienceItem {
  title: string;
  company: string;
  employmentType: string;
  period: string;
  location?: string;
  companyDescription: string;
  logoInitials: string;
  description: string[];
  technologies: string[];
  projects: ExperienceProject[];
}

const experiences: ExperienceItem[] = [
  {
    title: 'AI Engineer',
    company: 'Innoventix Solutions',
    employmentType: 'Full Time',
    period: 'Nov 2025 - Present',
    location: 'Remote',
    companyDescription: 'Building production AI systems focused on identity verification, speech translation, and deployable inference pipelines.',
    logoInitials: 'IS',
    description: [
      'Led delivery of production AI workflows across computer vision and speech systems, shipping reliable services that can run in real-world deployment settings.',
      'Worked closely on model integration, inference optimization, and backend orchestration to keep systems low-latency, observable, and maintainable.',
    ],
    technologies: ['Python', 'FastAPI', 'InsightFace', 'ONNX Runtime', 'Whisper', 'MADLAD-400', 'OmniVoice', 'AWS', 'Hugging Face'],
    projects: [
      {
        name: 'WeShape Live Platform',
        summary: 'Real-time face matching and verification platform for scalable identity checks.',
        responsibilities: [
          'Designed the end-to-end verification flow and API surface.',
          'Implemented image validation, face quality scoring, blur detection, and duplicate handling.',
          'Integrated InsightFace-based embedding pipelines for fast matching.',
        ],
        achievements: [
          'Improved recognition reliability through quality gating before inference.',
          'Reduced noisy inputs with validation and deduplication checks.',
        ],
        techStack: ['Python', 'FastAPI', 'InsightFace', 'OpenCV'],
        impact: ['Low-latency verification', 'Higher dataset quality', 'More stable production pipeline'],
      },
      {
        name: 'Speech-to-Speech Translation System',
        summary: 'Multilingual STT → MT → TTS pipeline for streaming voice translation.',
        responsibilities: [
          'Built the speech translation flow from transcription through synthesis.',
          'Integrated Whisper Large V3, MADLAD-400-3B, and OmniVoice into a single pipeline.',
          'Optimized local and cloud inference paths for GPU-backed deployment.',
        ],
        achievements: [
          'Reduced end-to-end latency with ONNX Runtime and INT8 quantization.',
          'Supported real-time voice translation across multiple languages.',
        ],
        techStack: ['Python', 'Whisper Large V3', 'MADLAD-400-3B', 'OmniVoice', 'ONNX Runtime', 'AWS EC2', 'RTX 3060'],
        impact: ['Faster inference', 'GPU-efficient deployment', 'Real-time streaming support'],
      },
    ],
  },
  {
    title: 'Software Engineer Intern',
    company: 'Agendeas Solution',
    employmentType: 'Internship',
    period: 'Jan 2025 - Jun 2025',
    location: 'Remote',
    companyDescription: 'Worked on backend services, automation, and API reliability for internal product workflows.',
    logoInitials: 'AS',
    description: [
      'Supported backend delivery by building REST APIs, automations, and workflow improvements for day-to-day operations.',
      'Contributed to code quality through debugging, testing, and iterative fixes across feature work and maintenance tasks.',
    ],
    technologies: ['Python', 'REST APIs', 'Automation', 'Debugging', 'Testing'],
    projects: [
      {
        name: 'Backend Feature Delivery',
        summary: 'Implemented API and automation work for internal system integration.',
        responsibilities: [
          'Built backend endpoints and automation utilities.',
          'Improved operational flows through reusable service logic.',
          'Worked with the team on testing and bug fixes.',
        ],
        achievements: [
          'Improved reliability through cleaner API behavior.',
          'Helped streamline repeated manual processes.',
        ],
        techStack: ['Python', 'REST APIs', 'Automation'],
        impact: ['Better maintainability', 'Cleaner integrations', 'Faster internal workflows'],
      },
    ],
  },
];

const ExperienceMeta: React.FC<{ item: ExperienceItem }> = ({ item }) => (
  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between mb-6">
    <div className="flex items-start gap-4">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-surface-strong)] text-lg font-semibold text-[var(--theme-heading)] shadow-sm">
        {item.logoInitials}
      </div>
      <div>
        <h3 className="text-2xl font-semibold theme-heading mb-1">{item.title}</h3>
        <p className="text-xl text-primary-color font-medium">{item.company}</p>
        <p className="theme-text-muted mt-2 max-w-xl">{item.companyDescription}</p>
      </div>
    </div>
    <div className="flex flex-col gap-2 md:items-end">
      <span className="px-4 py-2 bg-primary-color/15 text-primary-color rounded-full text-sm font-semibold w-fit">
        {item.employmentType}
      </span>
      <span className="theme-text-muted text-sm">{item.period}</span>
      {item.location ? <span className="theme-text-muted text-sm">{item.location}</span> : null}
    </div>
  </div>
);

const ExperienceProjectCard: React.FC<{ project: ExperienceProject }> = ({ project }) => (
  <div className="rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-surface-solid)] p-5 shadow-sm">
    <div className="space-y-4">
      <div>
        <h4 className="text-lg font-semibold theme-heading">{project.name}</h4>
        <p className="theme-text-muted mt-1">{project.summary}</p>
      </div>

      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-primary-color font-semibold mb-2">Responsibilities</p>
        <ul className="space-y-2 theme-text-muted list-disc list-inside">
          {project.responsibilities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-primary-color font-semibold mb-2">Key Achievements</p>
        <ul className="space-y-2 theme-text-muted list-disc list-inside">
          {project.achievements.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-primary-color font-semibold mb-2">Tech Stack</p>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span key={tech} className="px-3 py-1 theme-chip rounded-full text-sm font-medium">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {project.impact?.length ? (
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-primary-color font-semibold mb-2">Impact</p>
          <div className="flex flex-wrap gap-2">
            {project.impact.map((item) => (
              <span key={item} className="px-3 py-1 rounded-full text-sm font-medium bg-primary-color/10 text-primary-color">
                {item}
              </span>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  </div>
);

const TimelineNode: React.FC = () => (
  <div className="absolute left-1/2 top-10 z-10 h-4 w-4 -translate-x-1/2 rounded-full bg-primary-color shadow-lg" />
);

const Experience: React.FC = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <SectionTitle title="Work Experience" />

        <div className="relative">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,20 Q25,0 50,20 T100,20" stroke="rgba(var(--primary-color-rgb), 0.1)" strokeWidth="0.5" fill="none" className="animate-draw" />
              <path d="M0,40 Q75,20 100,40" stroke="rgba(var(--primary-color-rgb), 0.1)" strokeWidth="0.5" fill="none" className="animate-draw" />
              <path d="M0,60 Q25,80 50,60 T100,60" stroke="rgba(var(--primary-color-rgb), 0.1)" strokeWidth="0.5" fill="none" className="animate-draw" />
              <path d="M0,80 Q75,60 100,80" stroke="rgba(var(--primary-color-rgb), 0.1)" strokeWidth="0.5" fill="none" className="animate-draw" />
            </svg>
          </div>

          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-[var(--theme-border)]" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.article
                key={exp.company}
                initial={reduceMotion ? { opacity: 1 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className={`relative flex items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <TimelineNode />
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="glass-effect theme-surface rounded-3xl p-8 shadow-xl">
                    <ExperienceMeta item={exp} />

                    <div className="grid gap-6">
                      <div>
                        <p className="text-sm uppercase tracking-[0.2em] text-primary-color font-semibold mb-3">Overview</p>
                        <ul className="space-y-2 theme-text-muted list-disc list-inside">
                          {exp.description.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <p className="text-sm uppercase tracking-[0.2em] text-primary-color font-semibold mb-3">Tech Stack</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span key={tech} className="px-3 py-1 theme-chip rounded-full text-sm font-medium">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <p className="text-sm uppercase tracking-[0.2em] text-primary-color font-semibold">Project Highlights</p>
                        <div className="grid gap-4">
                          {exp.projects.map((project) => (
                            <ExperienceProjectCard key={project.name} project={project} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
