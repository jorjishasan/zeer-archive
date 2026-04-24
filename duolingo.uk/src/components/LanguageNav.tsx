import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { languages } from '../data/languages';

const LanguageNav: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="lang-nav" style={{
      width: '100%',
      borderTop: '2px solid var(--border-color)',
      borderBottom: '2px solid var(--border-color)',
      backgroundColor: 'var(--white)',
      height: '74px'
    }}>
      <div className="lang-nav-inner" style={{
        maxWidth: '1056px',
        margin: '0 auto',
        height: '100%',
        display: 'grid',
        gridTemplateColumns: '14px 1fr 14px',
        alignItems: 'center',
        gap: '30px',
        padding: '0 24px'
      }}>
        <button className="scroll-btn left" onClick={() => scroll('left')} style={{ width: '14px', height: '14px' }}>
          <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 14 14' fill='none'%3E%3Cpath d='M9 3L5 7L9 11' stroke='%23afafaf' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E" alt="left" />
        </button>

        <div
          ref={scrollRef}
          className="lang-list-container"
          style={{
            overflowX: 'auto',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.05
                }
              }
            }}
            className="lang-list"
            style={{
              display: 'flex',
              gap: '24px',
              width: 'max-content',
              alignItems: 'center'
            }}
          >
            {languages.map((lang) => (
              <motion.a
                key={lang.name}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  show: { opacity: 1, scale: 1 }
                }}
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(0,0,0,0.05)' }}
                href="#"
                className="lang-item"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '8px 12px',
                  borderRadius: '12px',
                  whiteSpace: 'nowrap',
                  fontWeight: 700,
                  fontSize: '15px',
                  color: 'var(--gray-light)',
                  textTransform: 'uppercase',
                  textDecoration: 'none'
                }}
              >
                <img src={`https://d35aaqx5ub95lt.cloudfront.net/vendor/${lang.flag}`} alt={lang.name} style={{ width: '36px', height: '27.77px' }} />
                <span>{lang.name}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>

        <button className="scroll-btn right" onClick={() => scroll('right')} style={{ width: '14px', height: '14px', transform: 'rotate(180deg)' }}>
          <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 14 14' fill='none'%3E%3Cpath d='M9 3L5 7L9 11' stroke='%23afafaf' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E" alt="right" />
        </button>
      </div>
    </nav>
  );
};

export default LanguageNav;
