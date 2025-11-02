'use client';

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

interface ProjectCardProps {
  project: Project;
  language: 'ko' | 'en';
  onViewDetails: (project: Project) => void;
}

export default function ProjectCard({ project, language, onViewDetails }: ProjectCardProps) {
  const t = (ko: string, en: string) => language === 'ko' ? ko : en;
  const title = language === 'ko' ? project.titleKo : project.titleEn;
  const desc = language === 'ko' ? project.descKo : project.descEn;

  return (
    <div className="program-card" style={project.disabled ? { opacity: 0.5, pointerEvents: 'none' } : {}}>
      <div className="program-image" style={project.disabled ? { filter: 'grayscale(100%)' } : {}}>
        <span className="icon" style={{ fontSize: '3rem' }}>{project.icon}</span>
      </div>
      <div className="program-content">
        <h3>{title}</h3>
        <p>{desc}</p>
        <div className="program-links">
          <button 
            onClick={() => onViewDetails(project)}
            className="program-link view-details"
            style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', textDecoration: 'underline' }}
          >
            {t('자세히 보기', 'View Details')}
          </button>
          <a href={project.downloadUrl} target="_blank" className="program-link download-btn">
            <span className="icon">⬇️</span> {t('다운로드', 'Download')}
          </a>
        </div>
      </div>
    </div>
  );
}
