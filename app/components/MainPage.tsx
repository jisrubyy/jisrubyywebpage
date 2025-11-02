'use client';

import { useState, useEffect } from 'react';
import Header from './Header';
import ProjectCard from './ProjectCard';
import CookieBanner from './CookieBanner';

interface MainPageProps {
  language: 'ko' | 'en';
  setLanguage: (lang: 'ko' | 'en') => void;
  onLogoClick: () => void;
}

const projects = [
  { id: 'project1', icon: '🖥️', titleKo: 'JISMemo', titleEn: 'JISMemo', descKo: 'Windows용 간편한 메모지 프로그램입니다.', descEn: 'Simple memo program for Windows.', downloadUrl: 'https://drive.google.com/file/d/1Eck7dZQaGkAf86rEA6UiZpp5YU_N0F_6/view?usp=sharing', disabled: false },
  { id: 'project2', icon: '🌐', titleKo: '웹 기반 도구', titleEn: 'Web-based Tool', descKo: '브라우저에서 사용할 수 있는 웹 기반 도구입니다.', descEn: 'Web-based tool available in browsers.', downloadUrl: '#', disabled: true },
  { id: 'project3', icon: '📱', titleKo: '모바일 앱', titleEn: 'Mobile App', descKo: 'Android 및 iOS용 모바일 애플리케이션입니다.', descEn: 'Mobile application for Android and iOS.', downloadUrl: '#', disabled: true }
];

export default function MainPage({ language, setLanguage, onLogoClick }: MainPageProps) {
  const [showCookie, setShowCookie] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('cookiesAccepted');
    if (!accepted) setTimeout(() => setShowCookie(true), 1000);
  }, []);

  const t = (ko: string, en: string) => language === 'ko' ? ko : en;

  return (
    <div id="main-page">
      <Header language={language} setLanguage={setLanguage} onLogoClick={onLogoClick} />
      <main>
        <section className="welcome-section">
          <h1 className="welcome-title">{t('Jisrubyy의 프로젝트', "Jisrubyy's Projects")}</h1>
          <p className="welcome-text">{t('다양한 프로젝트와 개발 과정을 기록하고 공유합니다.', 'Recording and sharing various projects and development processes.')}</p>
        </section>

        <section id="projects" className="programs-section">
          <h2 className="section-title">{t('프로젝트 목록', 'Project List')}</h2>
          <div className="programs-grid">
            {projects.map(p => <ProjectCard key={p.id} project={p} language={language} />)}
          </div>
        </section>

        <section id="dev-log" className="dev-log">
          <h3>{t('개발 일지', 'Development Log')}</h3>
          <div className="log-entry">
            <div className="log-date">2025.10.29</div>
            <div className="log-content">{t('최초 릴리즈', 'Initial release')}</div>
          </div>
        </section>

        <section id="about" className="dev-log">
          <h3>{t('제작자 정보', 'About Developer')}</h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <div style={{ flex: '0 0 150px', height: '150px', background: 'linear-gradient(135deg, var(--light-green) 0%, var(--dark-green) 100%)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', color: 'var(--dark-gray)', boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)' }}>
              <span>👤</span>
            </div>
            <div style={{ flex: 1, minWidth: '300px' }}>
              <h4 style={{ color: 'var(--light-green)', fontSize: '1.8rem', marginBottom: '0.5rem' }}>Jisrubyy</h4>
              <p style={{ color: 'var(--white)', fontSize: '1.1rem', marginBottom: '1rem' }}>{t('소프트웨어 개발자', 'Software Developer')}</p>
              <p style={{ lineHeight: 1.8 }}>{t('다양한 프로그램 개발과 웹 기술에 관심이 많습니다. 사용자 경험을 최우선으로 생각하며, 실용적이고 효율적인 솔루션을 만들기 위해 노력하고 있습니다.', 'Interested in various program development and web technologies. I prioritize user experience and strive to create practical and efficient solutions.')}</p>
            </div>
          </div>
        </section>

        <section id="contact" className="dev-log">
          <h3>{t('연락처', 'Contact')}</h3>
          <div style={{ textAlign: 'center', margin: '2rem 0' }}>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem', lineHeight: 1.8 }}>{t('문의사항이 있으시면 아래 이메일로 연락주세요.', 'If you have any inquiries, please contact us via email below.')}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center', marginTop: '2rem' }}>
              <a href="mailto:jisrubyy@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'linear-gradient(135deg, var(--medium-gray) 0%, rgba(52, 73, 94, 0.9) 100%)', padding: '1.5rem 2.5rem', borderRadius: '12px', textDecoration: 'none', color: 'var(--white)', fontSize: '1.2rem', transition: 'var(--transition)', border: '1px solid rgba(26, 188, 156, 0.3)', minWidth: '350px', justifyContent: 'center' }}>
                <span style={{ color: 'var(--light-green)', fontSize: '1.5rem' }}>✉️</span>
                <span>jisrubyy@gmail.com</span>
              </a>
              <a href="mailto:zegtern@kakao.com" style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'linear-gradient(135deg, var(--medium-gray) 0%, rgba(52, 73, 94, 0.9) 100%)', padding: '1.5rem 2.5rem', borderRadius: '12px', textDecoration: 'none', color: 'var(--white)', fontSize: '1.2rem', transition: 'var(--transition)', border: '1px solid rgba(26, 188, 156, 0.3)', minWidth: '350px', justifyContent: 'center' }}>
                <span style={{ color: 'var(--light-green)', fontSize: '1.5rem' }}>✉️</span>
                <span>zegtern@kakao.com</span>
              </a>
            </div>
          </div>
        </section>

        <section id="policy" className="dev-log">
          <h3>{t('정책', 'Policy')}</h3>
          <div style={{ background: 'linear-gradient(135deg, var(--medium-gray) 0%, rgba(52, 73, 94, 0.6) 100%)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(26, 188, 156, 0.3)', lineHeight: 1.8, color: 'var(--white)' }}>
            <h4 style={{ color: 'var(--light-green)', marginTop: 0 }}>{t('개인정보처리방침', 'Privacy Policy')}</h4>
            <p>{t('이 개인정보처리방침은 JISRUBYY가 제공하는 모든 플랫폼(기기) 앱 및 웹(이하 "응용프로그램(또는 본 웹)")에 적용됩니다(이하 "서비스 제공자"). 본 서비스는 "있는 그대로(AS IS)" 제공됩니다.', 'This privacy policy applies to the all JISRUBYY app and web (hereby referred to as "Application(or this web)") for all devices(mobile and all platform, pc , etc) that was created by JISRUBYY (hereby referred to as "Service Provider") all services. This service is intended for use "AS IS".')}</p>
          </div>
        </section>
      </main>

      <footer>
        <div className="developer-info">
          <div className="developer-name">Developer: Jisrubyy</div>
          <div className="contact-info">
            <a href="mailto:jisrubyy@gmail.com">jisrubyy@gmail.com</a>
            <a href="mailto:zegtern@kakao.com">zegtern@kakao.com</a>
          </div>
        </div>
        <div className="copyright">{t('© 2025 ~ Jisrubyy. 모든 권리 보유.', '© 2025 ~ Jisrubyy. All rights reserved.')}</div>
      </footer>

      {showCookie && <CookieBanner language={language} onClose={() => setShowCookie(false)} />}
    </div>
  );
}
