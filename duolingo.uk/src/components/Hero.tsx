import React from 'react';
import { motion } from 'framer-motion';
import HlsPlayer from './HlsPlayer';

const Hero: React.FC = () => {
  return (
    <section className="hero" style={{
      paddingTop: '70px',
      minHeight: 'calc(100vh - 74px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '80px',
      padding: '48px 80px',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.8, x: -50 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="hero-video-container"
        style={{
          width: '424px',
          height: '424px',
          aspectRatio: '1',
          backgroundColor: 'var(--white)',
          borderRadius: '16px',
          overflow: 'hidden'
        }}
      >
        <HlsPlayer 
          src="https://stream.mux.com/ze00dOwsh5muXXj01EWSfdilcHjcGqlznBuFR5GEYlZe00.m3u8"
          className="w-full h-full object-contain"
        />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="hero-content"
        style={{
          maxWidth: '400px',
          textAlign: 'center'
        }}
      >
        <h1 style={{
          fontSize: '32px',
          lineHeight: '1.3',
          color: 'var(--gray-text)',
          marginBottom: '40px'
        }}>
          The free, fun, and effective way to learn a language!
        </h1>
        <div className="hero-btns" style={{
          maxWidth: '330px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
          <motion.a 
            href="/register" 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98, y: 4 }}
            className="btn btn-primary"
            style={{ width: '100%', textDecoration: 'none' }}
          >
            Get started
          </motion.a>
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98, y: 4 }}
            className="btn btn-secondary"
            style={{ width: '100%' }}
          >
            I already have an account
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
