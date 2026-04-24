import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <motion.nav
      initial={{ y: -70 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', damping: 20, stiffness: 100 }}
      className="navbar"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '70px',
        backgroundColor: 'var(--white)',
        borderBottom: '1px solid var(--border-color)',
        zIndex: 100
      }}
    >
      <div className="inner" style={{
        height: '100%',
        maxWidth: '1440px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 24px'
      }}>
        <a href="https://duolingo.com" className="logo">
          <img
            src="https://d35aaqx5ub95lt.cloudfront.net/images/splash/f92d5f2f7d56636846861c458c0d0b6c.svg"
            alt="Duolingo"
            style={{ width: '179px', height: '42px' }}
          />
        </a>
        <motion.button
          whileHover={{ backgroundColor: 'rgba(0,0,0,0.05)' }}
          className="lang-selector"
          style={{
            color: 'var(--nav-text)',
            fontWeight: 700,
            fontSize: '16px',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 12px',
            borderRadius: '12px'
          }}
        >
          <span className="desktop-only" style={{ display: 'inline' }}>Site language: English</span>
          <img
            src="https://d35aaqx5ub95lt.cloudfront.net/images/splash/c6eae48dd48246c89e415b89f9e55282.svg"
            width="14"
            height="14"
            alt="arrow"
          />
        </motion.button>
      </div>
    </motion.nav>
  );
};


export default Navbar;
