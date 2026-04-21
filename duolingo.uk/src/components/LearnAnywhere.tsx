import React from 'react';
import { motion } from 'framer-motion';
import HlsPlayer from './HlsPlayer';

const LearnAnywhere: React.FC = () => {
  return (
    <>
      <div className="gradient-bar" style={{
        width: '100%',
        height: '150px',
        background: 'linear-gradient(to bottom, #ffffff, #DBF3FF)'
      }} />
      <section className="learn-anywhere" style={{
        position: 'relative',
        backgroundColor: '#ddf0fa',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '60px 40px 120px',
        overflow: 'hidden'
      }}>
        <div className="video-bg" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          backgroundColor: '#ddf0fa'
        }}>
          <HlsPlayer 
            src="https://stream.mux.com/6xLBelbJrZGw00K2jPsZtGm8pkftvfezQ8rdAmHL9HoM.m3u8" 
            className="w-full h-full object-cover" 
          />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="learn-anywhere-content" 
          style={{
            position: 'relative',
            zIndex: 1,
            textAlign: 'center',
            maxWidth: '800px'
          }}
        >
          <h2 style={{
            fontSize: '48px',
            color: 'rgb(1, 45, 82)',
            marginBottom: '48px',
            lineHeight: 1.15
          }}>learn anytime,<br />anywhere</h2>
          
          <div className="store-btns" style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center'
          }}>
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.05, backgroundColor: '#f0f0f0' }}
              whileTap={{ scale: 0.95 }}
              className="store-btn"
              style={{
                backgroundColor: 'var(--white)',
                border: '2px solid #CFCFCF',
                borderRadius: '12px',
                padding: '10px 20px',
                boxShadow: '0 4px 0 #CFCFCF',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                textAlign: 'left',
                textDecoration: 'none'
              }}
            >
              <img src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_154356_13de5dda-6dfe-4f54-b3e2-251301254578.png&w=1280&q=85" alt="App Store" style={{ width: '28px', height: '28px' }} />
              <div>
                <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--gray-text)', display: 'block' }}>Download on the</span>
                <span style={{ fontSize: '16px', fontWeight: 700, color: 'var(--gray-text)', display: 'block' }}>App Store</span>
              </div>
            </motion.a>
            
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.05, backgroundColor: '#f0f0f0' }}
              whileTap={{ scale: 0.95 }}
              className="store-btn"
              style={{
                backgroundColor: 'var(--white)',
                border: '2px solid #CFCFCF',
                borderRadius: '12px',
                padding: '10px 20px',
                boxShadow: '0 4px 0 #CFCFCF',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                textAlign: 'left',
                textDecoration: 'none'
              }}
            >
              <img src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_154325_6e98dcdb-51ba-446a-8c52-2d2f2675a575.png&w=1280&q=85" alt="Google Play" style={{ width: '28px', height: '28px' }} />
              <div>
                <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--gray-text)', display: 'block' }}>Get it on</span>
                <span style={{ fontSize: '16px', fontWeight: 700, color: 'var(--gray-text)', display: 'block' }}>Google Play</span>
              </div>
            </motion.a>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default LearnAnywhere;
