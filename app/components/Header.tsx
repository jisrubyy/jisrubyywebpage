'use client';

import Image from 'next/image';

interface HeaderProps {
  language: 'ko' | 'en';
  setLanguage: (lang: 'ko' | 'en') => void;
  onLogoClick: () => void;
}

export default function Header({ language, setLanguage, onLogoClick }: HeaderProps) {
  const t = (ko: string, en: string) => language === 'ko' ? ko : en;

  return (
    <header>
      <div className="logo" onClick={onLogoClick} style={{ cursor: 'pointer' }}>
        <Image className="brand-logo brand-logo--header" src="/Resources/JISRUBYY Logo1.png" alt="Jisrubyy Logo" width={150} height={42} />
        <span className="sr-only">Jisrubyy Dev</span>
      </div>
      <nav>
        <ul>
          <li><button onClick={() => window.scrollTo(0, 0)} className="nav-link">{t('홈', 'Home')}</button></li>
          <li><button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="nav-link">{t('프로젝트', 'Projects')}</button></li>
          <li><button onClick={() => document.getElementById('dev-log')?.scrollIntoView({ behavior: 'smooth' })} className="nav-link">{t('개발일지', 'Dev Log')}</button></li>
          <li><button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="nav-link">{t('제작자 정보', 'About')}</button></li>
          <li><button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="nav-link">{t('연락처', 'Contact')}</button></li>
          <li><button onClick={() => document.getElementById('policy')?.scrollIntoView({ behavior: 'smooth' })} className="nav-link">{t('정책', 'Policy')}</button></li>
        </ul>
      </nav>
      <button className="language-switch" onClick={() => setLanguage(language === 'ko' ? 'en' : 'ko')}>
        {language === 'ko' ? 'EN' : 'KO'}
      </button>
    </header>
  );
}
