'use client';

import { useState } from 'react';
import IntroPage from './components/IntroPage';
import MainPage from './components/MainPage';
import CustomCursor from './components/CustomCursor';

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [language, setLanguage] = useState<'ko' | 'en'>('ko');

  return (
    <>
      <CustomCursor />
      {showIntro ? (
        <IntroPage onEnter={() => setShowIntro(false)} language={language} setLanguage={setLanguage} />
      ) : (
        <MainPage language={language} setLanguage={setLanguage} onLogoClick={() => setShowIntro(true)} />
      )}
    </>
  );
}
