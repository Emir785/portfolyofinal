import React, { useState, useEffect } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

function App() {
  const [text, setText] = useState('');
  const fullText = "Hoşgeldiniz, ben bir yazılımcıyım";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-links">
          <a href="#home">Ana Sayfa</a>
          <a href="#about">Ben Kimim?</a>
          <a href="#skills">Neler Yapabilirim?</a>
          <a href="#portfolio">Portfolyo</a>
          <a href="#contact">İletişim</a>
        </div>
      </nav>

      <section id="home" className="hero">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>{text}</h1>
        </motion.div>
      </section>

      <section id="about" className="about">
        <h2>Ben Kimim?</h2>
        <p>
          Ben Emir Kocadanlı. Çanakkale'de yaşıyorum. Balıkesir Üniversitesi'nde Bilgisayar Mühendisliği 2. sınıf öğrencisiyim. 
          Oyun geliştirme ve mobil uygulama geliştirme üzerine çalışıyorum. Aynı zamanda modern web teknolojilerine ilgim dolayısıyla 
          react ile çalışıyorum. Kendimi geliştirmeye açık bir Bilgisayar Mühendisi adayıyım.
        </p>
      </section>

      <section id="skills" className="skills">
        <h2>Neler Yapabilirim?</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <h3>Unity ile Oyun Geliştirme</h3>
          </div>
          <div className="skill-card">
            <h3>Flutter & Dart ile Mobil Uygulama Geliştirme</h3>
          </div>
        </div>
      </section>

      <section id="portfolio" className="portfolio">
        <h2>Portfolyo</h2>
        <div className="portfolio-grid">
          <div className="portfolio-item">
            <h3>Öğrenci Kayıt Uygulaması</h3>
          </div>
          <div className="portfolio-item">
            <h3>Egekaf Gamejam Oyun Geliştirme</h3>
          </div>
          <div className="portfolio-item">
            <h3>BAÜN Teknokent Oyun Geliştirme</h3>
          </div>
          <div className="portfolio-item">
            <h3>İngilizce Öğrenme Uygulaması</h3>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>İletişim</h2>
        <form className="contact-form">
          <input type="text" placeholder="Ad Soyad" required />
          <input type="email" placeholder="Mail" required />
          <textarea placeholder="İçerik" required></textarea>
          <button type="submit">Gönder</button>
        </form>
      </section>

      <footer className="footer">
        <div className="social-links">
          <a href="https://github.com/Emir785" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
