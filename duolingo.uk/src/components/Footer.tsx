import React from 'react';
import { languages } from '../data/languages';

const Footer: React.FC = () => {
  return (
    <footer id="footer" style={{
      backgroundColor: 'var(--footer-green)',
      color: 'var(--footer-link)',
      fontWeight: 700
    }}>
      <div className="footer-grid" style={{
        maxWidth: '1440px',
        margin: '0 auto',
        padding: '96px 64px 64px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '24px'
      }}>
        <div className="footer-col">
          <h4 style={{ color: 'var(--footer-header)', fontSize: '20px', marginBottom: '24px' }}>About us</h4>
          <ul style={{ listStyle: 'none' }}>
            {['Courses', 'Mission', 'Approach', 'Efficacy', 'Team', 'Careers', 'Brand Guidelines', 'Store', 'Press', 'Investors', 'Contact us'].map(link => (
              <li key={link} style={{ marginBottom: '12px' }}><a href="#" style={{ fontSize: '16px' }}>{link}</a></li>
            ))}
          </ul>
        </div>
        <div className="footer-col">
          <h4 style={{ color: 'var(--footer-header)', fontSize: '20px', marginBottom: '24px' }}>Products</h4>
          <ul style={{ listStyle: 'none' }}>
            {['Duolingo', 'Duolingo for Schools', 'Duolingo English Test', 'Duolingo ABC', 'Duolingo Math', 'Duolingo Music', 'Podcast', 'Super Duolingo'].map(link => (
              <li key={link} style={{ marginBottom: '12px' }}><a href="#" style={{ fontSize: '16px' }}>{link}</a></li>
            ))}
          </ul>
        </div>
        <div className="footer-col">
          <h4 style={{ color: 'var(--footer-header)', fontSize: '20px', marginBottom: '24px' }}>Apps</h4>
          <ul style={{ listStyle: 'none' }}>
            {['Duolingo for iOS', 'Duolingo for Android'].map(link => (
              <li key={link} style={{ marginBottom: '12px' }}><a href="#" style={{ fontSize: '16px' }}>{link}</a></li>
            ))}
          </ul>
        </div>
        <div className="footer-col">
          <h4 style={{ color: 'var(--footer-header)', fontSize: '20px', marginBottom: '24px' }}>Help and support</h4>
          <ul style={{ listStyle: 'none' }}>
            {['Duolingo Help Center', 'English Test Help Center', 'Status'].map(link => (
              <li key={link} style={{ marginBottom: '12px' }}><a href="#" style={{ fontSize: '16px' }}>{link}</a></li>
            ))}
          </ul>
        </div>
        <div className="footer-col">
          <h4 style={{ color: 'var(--footer-header)', fontSize: '20px', marginBottom: '24px' }}>Privacy and terms</h4>
          <ul style={{ listStyle: 'none' }}>
            {['Community Guidelines', 'Terms', 'Privacy', 'Respecting your attention'].map(link => (
              <li key={link} style={{ marginBottom: '12px' }}><a href="#" style={{ fontSize: '16px' }}>{link}</a></li>
            ))}
          </ul>
          <h4 style={{ color: 'var(--footer-header)', fontSize: '20px', margin: '32px 0 24px' }}>Social</h4>
          <ul style={{ listStyle: 'none' }}>
            {['Blog', 'Instagram', 'TikTok', 'Twitter', 'Facebook', 'YouTube'].map(link => (
              <li key={link} style={{ marginBottom: '12px' }}><a href="#" style={{ fontSize: '16px' }}>{link}</a></li>
            ))}
          </ul>
        </div>
      </div>
      <hr style={{ border: 'none', borderTop: '1px solid #A5ED6E', margin: '0 64px' }} />
      <div className="footer-langs" style={{ padding: '40px 64px 64px' }}>
        <h4 style={{ color: 'var(--footer-header)', fontSize: '16px', marginBottom: '24px' }}>Site language:</h4>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
          {languages.slice(0, 28).map(lang => (
            <a key={lang.name} href="#" style={{ fontSize: '14px', color: 'var(--footer-link)', textDecoration: 'none' }}>{lang.name}</a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
