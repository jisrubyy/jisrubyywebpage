'use client';


import Header from './Header';

interface ProjectDetail {
  id: string;
  icon: string;
  titleKo: string;
  titleEn: string;
  descKo: string;
  descEn: string;
  detailDescKo: string;
  detailDescEn: string;
  version: string;
  downloadUrl: string;
  screenshots: string[];
  features: { ko: string; en: string }[];
  changelog: { version: string; date: string; changes: { ko: string; en: string }[] }[];
}

interface Project {
  id: string;
  icon: string;
  titleKo: string;
  titleEn: string;
  descKo: string;
  descEn: string;
  downloadUrl: string;
  disabled: boolean;
}

interface ProjectDetailPageProps {
  project: Project;
  language: 'ko' | 'en';
  setLanguage: (lang: 'ko' | 'en') => void;
  onBack: () => void;
  onLogoClick: () => void;
}

const projectDetails: { [key: string]: ProjectDetail } = {
  project1: {
    id: 'project1',
    icon: '🖥️',
    titleKo: 'JISMemo',
    titleEn: 'JISMemo',
    descKo: 'Windows용 간편한 메모지 프로그램입니다.',
    descEn: 'Simple memo program for Windows.',
    detailDescKo: 'JISMemo는 Windows 환경에서 사용할 수 있는 간편하고 직관적인 메모 프로그램입니다. 빠른 메모 작성과 효율적인 관리 기능을 제공하여 일상적인 업무나 개인적인 기록을 손쉽게 관리할 수 있습니다.',
    detailDescEn: 'JISMemo is a simple and intuitive memo program for Windows environment. It provides quick memo writing and efficient management features to easily manage daily work or personal records.',
    version: 'v1.3.0',
    downloadUrl: 'https://drive.google.com/file/d/1gidL0Orm3KHQZmCRHMGQgqVmQ_5glRD-/view?usp=sharing',
    screenshots: [],
    features: [
      { ko: '간편한 메모 작성 및 편집', en: 'Easy memo writing and editing' },
      { ko: '자동 저장 기능', en: 'Auto-save functionality' },
      { ko: '다양한 폰트 및 색상 지원', en: 'Various fonts and colors support' },
      { ko: '검색 및 필터링 기능', en: 'Search and filtering features' },
      { ko: '가벼운 시스템 리소스 사용', en: 'Lightweight system resource usage' }
    ],
    changelog: [
      {
        version: 'v1.3.0',
        date: '2025-11-06',
        changes: [
          { ko: '텍스트/이미지 붙여넣기 기능 개선', en: 'Improved text/image paste functionality' },
          { ko: '여러 이미지 지원 및 개별 삭제', en: 'Multiple image support and individual deletion' },
          { ko: 'UI 크기 및 폰트 개선', en: 'UI size and font improvements' },
          { ko: '스크롤바 추가', en: 'Added scrollbar' },
          { ko: '기본 언어 영문 설정', en: 'Default language set to English' },
          { ko: '각종 버그 수정', en: 'Various bug fixes' }
        ]
      },
      {
        version: 'v1.2.0',
        date: '2025-10-29',
        changes: [
          { ko: '최초 릴리즈', en: 'Initial release' }
        ]
      }
    ]
  },
  project2: {
    id: 'project2',
    icon: '🌐',
    titleKo: '웹 기반 도구',
    titleEn: 'Web-based Tool',
    descKo: '브라우저에서 사용할 수 있는 웹 기반 도구입니다.',
    descEn: 'Web-based tool available in browsers.',
    detailDescKo: '개발 중인 웹 기반 도구입니다. 브라우저에서 직접 사용할 수 있는 다양한 유틸리티 기능을 제공할 예정입니다.',
    detailDescEn: 'Web-based tool under development. Will provide various utility functions that can be used directly in browsers.',
    version: 'v0.1.0 (개발중)',
    downloadUrl: '#',
    screenshots: [],
    features: [
      { ko: '브라우저 기반 실행', en: 'Browser-based execution' },
      { ko: '크로스 플랫폼 지원', en: 'Cross-platform support' },
      { ko: '실시간 데이터 처리', en: 'Real-time data processing' }
    ],
    changelog: [
      {
        version: 'v0.1.0',
        date: '개발중',
        changes: [
          { ko: '프로젝트 기획 및 설계', en: 'Project planning and design' }
        ]
      }
    ]
  },
  project3: {
    id: 'project3',
    icon: '📱',
    titleKo: '모바일 앱',
    titleEn: 'Mobile App',
    descKo: 'Android 및 iOS용 모바일 애플리케이션입니다.',
    descEn: 'Mobile application for Android and iOS.',
    detailDescKo: '개발 예정인 모바일 애플리케이션입니다. Android와 iOS 플랫폼을 모두 지원할 예정입니다.',
    detailDescEn: 'Mobile application planned for development. Will support both Android and iOS platforms.',
    version: 'v0.0.1 (계획중)',
    downloadUrl: '#',
    screenshots: [],
    features: [
      { ko: 'Android/iOS 지원', en: 'Android/iOS support' },
      { ko: '네이티브 성능', en: 'Native performance' },
      { ko: '오프라인 기능', en: 'Offline functionality' }
    ],
    changelog: [
      {
        version: 'v0.0.1',
        date: '계획중',
        changes: [
          { ko: '프로젝트 계획 수립', en: 'Project planning' }
        ]
      }
    ]
  }
};

export default function ProjectDetailPage({ project, language, setLanguage, onBack, onLogoClick }: ProjectDetailPageProps) {
  const t = (ko: string, en: string) => language === 'ko' ? ko : en;
  const projectDetail: ProjectDetail | {
      id: string;
      icon: string;
      titleKo: string;
      titleEn: string;
      descKo: string;
      descEn: string;
      downloadUrl: string;
      disabled: boolean;
      detailDescKo: string;
      detailDescEn: string;
      version: string;
      screenshots: never[];
      features: never[];
      changelog: never[]
  } = projectDetails[project.id] || {
    ...project,
    detailDescKo: project.descKo,
    detailDescEn: project.descEn,
    version: 'v1.0.0',
    screenshots: [],
    features: [],
    changelog: []
  };

  const handleNavigate = (section: string) => {
    onBack(); // 메인 페이지로 돌아가기
    // 약간의 지연 후 해당 섹션으로 스크롤
    setTimeout(() => {
      if (section === 'home') {
        window.scrollTo(0, 0);
      } else {
        document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div id="project-detail-page">
      <Header language={language} setLanguage={setLanguage} onLogoClick={onLogoClick} onNavigate={handleNavigate} />
      
      <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <button 
          onClick={onBack}
          style={{
            background: 'var(--medium-gray)',
            border: '1px solid var(--light-green)',
            color: 'var(--white)',
            padding: '0.5rem 1rem',
            borderRadius: '8px',
            cursor: 'pointer',
            marginBottom: '2rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          ← {t('뒤로 가기', 'Back')}
        </button>

        <div className="project-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{projectDetail.icon}</div>
          <h1 style={{ color: 'var(--light-green)', marginBottom: '1rem' }}>
            {language === 'ko' ? projectDetail.titleKo : projectDetail.titleEn}
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--white)', marginBottom: '2rem' }}>
            {language === 'ko' ? projectDetail.detailDescKo : projectDetail.detailDescEn}
          </p>
          
          <div className="download-section" style={{ marginBottom: '2rem' }}>
            <div style={{ marginBottom: '1rem', color: 'var(--light-green)', fontSize: '1.1rem' }}>
              {t('현재 버전:', 'Current Version:')} {projectDetail.version}
            </div>
            <a 
              href={projectDetail.downloadUrl}
              target="_blank"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'linear-gradient(135deg, var(--light-green) 0%, var(--dark-green) 100%)',
                color: 'var(--dark-gray)',
                padding: '1rem 2rem',
                borderRadius: '12px',
                textDecoration: 'none',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                opacity: projectDetail.downloadUrl === '#' ? 0.5 : 1,
                pointerEvents: projectDetail.downloadUrl === '#' ? 'none' : 'auto'
              }}
            >
              <span>⬇️</span>
              {t('다운로드', 'Download')} {projectDetail.version}
            </a>
          </div>
        </div>

        <div className="project-content" style={{ display: 'grid', gap: '3rem' }}>
          <section className="features-section">
            <h2 style={{ color: 'var(--light-green)', marginBottom: '1.5rem' }}>
              {t('주요 기능', 'Key Features')}
            </h2>
            <div style={{ 
              background: 'linear-gradient(135deg, var(--medium-gray) 0%, rgba(52, 73, 94, 0.6) 100%)',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid rgba(26, 188, 156, 0.3)'
            }}>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {projectDetail.features.map((feature, index) => (
                  <li key={index} style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '1rem', 
                    marginBottom: '1rem',
                    color: 'var(--white)'
                  }}>
                    <span style={{ color: 'var(--light-green)' }}>✓</span>
                    {language === 'ko' ? feature.ko : feature.en}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="changelog-section">
            <h2 style={{ color: 'var(--light-green)', marginBottom: '1.5rem' }}>
              {t('개발 일지', 'Development Log')}
            </h2>
            <div style={{ 
              background: 'linear-gradient(135deg, var(--medium-gray) 0%, rgba(52, 73, 94, 0.6) 100%)',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid rgba(26, 188, 156, 0.3)'
            }}>
              {projectDetail.changelog.map((log, index) => (
                <div key={index} style={{ marginBottom: index < projectDetail.changelog.length - 1 ? '2rem' : 0 }}>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '1rem', 
                    marginBottom: '1rem',
                    paddingBottom: '0.5rem',
                    borderBottom: '1px solid rgba(26, 188, 156, 0.3)'
                  }}>
                    <h3 style={{ color: 'var(--light-green)', margin: 0 }}>{log.version}</h3>
                    <span style={{ color: 'var(--white)', opacity: 0.8 }}>{log.date}</span>
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {log.changes.map((change, changeIndex) => (
                      <li key={changeIndex} style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '1rem', 
                        marginBottom: '0.5rem',
                        color: 'var(--white)'
                      }}>
                        <span style={{ color: 'var(--light-green)' }}>•</span>
                        {language === 'ko' ? change.ko : change.en}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}