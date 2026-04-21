import React from 'react';
import { motion } from 'framer-motion';
import VideoPlayer from './VideoPlayer';

export const SuperDuolingo: React.FC = () => {
  return (
    <section className="super-duolingo" style={{
      backgroundColor: '#121138',
      padding: '186px 80px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '40px'
    }}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="section-video"
        style={{
          width: '530px',
          height: '530px',
          backgroundColor: '#121138',
          borderRadius: '16px',
          overflow: 'hidden'
        }}
      >
        <VideoPlayer src="/hero_bg_3.mp4" className="w-full h-full object-contain" />
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="text"
        style={{ maxWidth: '605px' }}
      >
        <picture>
          <source srcSet="https://d35aaqx5ub95lt.cloudfront.net/images/splash/3a733db6d6873e1a915f70cf72554ce3.svg" type="image/svg+xml" />
          <img 
            src="https://d35aaqx5ub95lt.cloudfront.net/images/splash/dd7453522d3192d4df06d4652508b8bc.svg" 
            alt="Super Duolingo" 
            style={{ width: '100%', maxWidth: '605px', marginBottom: '48px' }}
          />
        </picture>
        <motion.button 
          whileHover={{ scale: 1.05, backgroundColor: '#c8f040' }}
          whileTap={{ scale: 0.95, y: 4 }}
          className="btn"
          style={{
            backgroundColor: 'var(--white)',
            color: 'rgb(0, 4, 55)',
            minWidth: '162px',
            width: 'fit-content',
            boxShadow: '0 4px 0 #88879F'
          }}
        >
          Try 1 week free
        </motion.button>
      </motion.div>
    </section>
  );
};

export const CTA: React.FC = () => {
  return (
    <section className="cta-bottom" style={{
      display: 'flex',
      alignItems: 'flex-end',
      backgroundColor: 'var(--white)',
      overflow: 'hidden'
    }}>
      <div className="cta-side desktop-only" style={{ flex: 1, height: '400px', backgroundColor: 'var(--green)' }} />
      <div className="cta-center" style={{
        maxWidth: '1200px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
      }}>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="cta-top" 
          style={{
            padding: '40px 0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '48px'
          }}
        >
          <h1 style={{
            fontSize: '64px',
            color: 'var(--green)',
            maxWidth: '800px',
            lineHeight: 1.1
          }}>learn a language with duolingo</h1>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95, y: 4 }}
            href="/register" 
            className="btn btn-primary" 
            style={{ width: 'auto', padding: '0 32px', marginBottom: '8px', textDecoration: 'none' }}
          >
            Get started
          </motion.a>
        </motion.div>
        <div className="cta-bottom-video" style={{ width: '100vw', backgroundColor: 'var(--white)' }}>
          <VideoPlayer src="/hero_bg_5.mp4" className="w-full h-full object-contain" />
        </div>
      </div>
      <div className="cta-side desktop-only" style={{ flex: 1, height: '400px', backgroundColor: 'var(--green)' }} />
    </section>
  );
};
