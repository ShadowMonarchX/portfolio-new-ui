import { motion } from 'framer-motion';
import React from 'react';
import { motionTiming, sectionFadeUp } from '../constants/motion';

interface SectionTitleProps {
  title: string;
  eyebrow?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, eyebrow = title }) => {
  return (
    <motion.div
      initial={sectionFadeUp.hidden}
      whileInView={sectionFadeUp.visible}
      transition={{ duration: motionTiming.medium }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <p className="text-sm uppercase tracking-[0.25em] text-primary-color font-semibold mb-3">{eyebrow}</p>
      <h2 className="text-3xl md:text-4xl font-bold theme-heading mb-4">{title}</h2>
      <div className="w-20 h-1 bg-primary-color mx-auto" />
    </motion.div>
  );
};

export default SectionTitle;
