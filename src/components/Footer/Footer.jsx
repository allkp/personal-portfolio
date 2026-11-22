import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import useScrollReveal from '../../hooks/useScrollReveal';
import './Footer.css';

const socialLinks = [
  { icon: Github, href: 'https://github.com/allkp', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/lokesh-adireddi', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:lokeshadireddim201@gmail.com', label: 'Email' },
];

const Footer = () => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <footer className={`footer ${isVisible ? 'visible' : ''}`} ref={ref}>
      <div className="footer-content">
        <h3 className="footer-name">Lokesh Adireddi</h3>
        <p className="footer-tagline">
          Java Full Stack Developer - Building Resilient Microservices &amp; Local AI Systems
        </p>

        <div className="footer-socials">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={label !== 'Email' ? '_blank' : undefined}
              rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
              className="footer-social-link"
              aria-label={label}
            >
              <Icon size={20} />
            </a>
          ))}
        </div>

        <p className="footer-copyright">
          &copy; 2026 Lokesh Adireddi. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
