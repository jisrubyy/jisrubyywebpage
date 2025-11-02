'use client';

interface CookieBannerProps {
  language: 'ko' | 'en';
  onClose: () => void;
}

export default function CookieBanner({ language, onClose }: CookieBannerProps) {
  const t = (ko: string, en: string) => language === 'ko' ? ko : en;

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    onClose();
  };

  const handleDecline = () => {
    localStorage.setItem('cookiesAccepted', 'false');
    onClose();
  };

  return (
    <div className="cookie-banner show">
      <div className="cookie-text">
        {t('이 웹사이트는 최적의 경험을 제공하기 위해 쿠키를 사용합니다. 계속 탐색하면 쿠키 사용에 동의하는 것으로 간주됩니다.', 'This website uses cookies to ensure you get the best experience. By continuing to browse, you agree to our use of cookies.')}
      </div>
      <div className="cookie-buttons">
        <button className="cookie-btn accept-btn" onClick={handleAccept}>{t('동의함', 'Accept')}</button>
        <button className="cookie-btn decline-btn" onClick={handleDecline}>{t('거부', 'Decline')}</button>
      </div>
    </div>
  );
}
