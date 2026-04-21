import React from 'react';
import { motion } from 'framer-motion';
import VideoPlayer from './VideoPlayer';

interface FeatureSectionProps {
  title: string;
  description: string;
  linkText?: string;
  linkHref?: string;
  videoSrc: string;
  reversed?: boolean;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ 
  title, description, linkText, linkHref, videoSrc, reversed 
}) => {
  return (
    <section className={`section-content ${reversed ? 'section-reversed' : ''}`} style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '102px',
      padding: '96px 80px',
      maxWidth: '1200px',
      margin: '0 auto',
      flexDirection: reversed ? 'row-reverse' : 'row'
    }}>
      <motion.div 
        initial={{ opacity: 0, x: reversed ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="text"
        style={{ maxWidth: '480px' }}
      >
        <h2 style={{
          fontSize: '48px',
          lineHeight: '1.1',
          color: reversed ? 'var(--green)' : 'var(--green)',
          marginBottom: '24px'
        }}>{title}</h2>
        <p style={{
          color: 'var(--gray-light)',
          fontSize: '18px',
          lineHeight: '1.6'
        }}>
          {description}
          {linkText && linkHref && (
            <> <a href={linkHref} style={{ color: 'var(--blue)', fontWeight: 700 }}>{linkText}</a></>
          )}
        </p>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, x: reversed ? -50 : 50 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="section-video"
        style={{
          width: '530px',
          height: '530px',
          backgroundColor: 'var(--white)',
          borderRadius: '16px',
          overflow: 'hidden'
        }}
      >
        <VideoPlayer src={videoSrc} className="w-full h-full object-contain" />
      </motion.div>
    </section>
  );
};

export default FeatureSection;
