'use client';

import { useState } from 'react';
import Image from 'next/image';

interface IntroPageProps {
  onEnter: () => void;
  language: 'ko' | 'en';
  setLanguage: (lang: 'ko' | 'en') => void;
}

export default function IntroPage({ onEnter, language, setLanguage }: IntroPageProps) {
  const [isHidden, setIsHidden] = useState(false);

  const handleEnter = () => {
    setIsHidden(true);
    setTimeout(onEnter, 800);
  };

  const toggleLanguage = () => setLanguage(language === 'ko' ? 'en' : 'ko');

  return (
    <div id="intro-page" className={isHidden ? 'hidden' : ''}>
      <button className="language-switch" onClick={toggleLanguage} style={{ position: 'absolute', top: '2rem', right: '2rem', zIndex: 1001 }}>
        {language === 'ko' ? 'EN' : 'KO'}
      </button>
      <div className="intro-content">
        <div className="intro-logo">
          <Image className="brand-logo brand-logo--intro" src="/Resources/JISRUBYY Logo1.png" alt="Jisrubyy Logo" width={340} height={340} priority style={{ width: 'auto', height: 'auto', maxWidth: '340px' }} />
          <span className="sr-only">Jisrubyy</span>
        </div>
        <p className="intro-subtitle">{language === 'ko' ? 'Jisrubyy 웹페이지에 오신 것을 환영합니다' : 'Welcome to Jisrubyy Website'}</p>
        <button className="enter-btn" onClick={handleEnter}>{language === 'ko' ? '입장하기' : 'Enter'}</button>
      </div>
    </div>
  );
}
