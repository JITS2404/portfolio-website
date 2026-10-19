import React from 'react';
import { FiArrowUpRight, FiDownload } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi';
import {
  HeroContainer,
  LeftSection,
  GreetingBadge,
  HeroName,
  HeroSubtitle,
  HeroDescription,
  ButtonGroup,
  PrimaryButton,
  SecondaryButton,
  EcosystemSection,
  EcosystemLabel,
  EcosystemPills,
  EcosystemPill,
  VisualSection,
  GlowOrb,
  GlassHeroCard,
  CentralGraphic,
  HoloCircle,
  CoreAvatar
} from './HeroStyles';

const ecosystem = [
  { name: 'React', logo: '/images/react.png' },
  { name: 'Python', logo: '/images/python logo.jpg' },
  { name: 'PostgreSQL', logo: '/images/postgresql.png' },
  { name: 'Supabase', logo: '/images/supabase.jpg' },
  { name: 'Power BI', logo: '/images/powerbi.png' },
  { name: 'Gemini AI', mark: 'G' },
  { name: 'FastAPI', mark: 'API' },
];

const Hero = (props) => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Jerom_Issac_Resume.pdf';
    link.click();
  };

  return (
    <HeroContainer id="home">
      <LeftSection>
        <GreetingBadge>
          <HiSparkles size="1.4rem" />
          HELLO, I'M
        </GreetingBadge>

        <HeroName>Jerom Issac</HeroName>
        <HeroSubtitle>Full-Stack Developer & AI Engineer</HeroSubtitle>

        <HeroDescription>
          I develop intelligent applications that combine modern web technologies with AI/ML capabilities to solve real business problems. Experienced in building scalable systems from concept to deployment.
        </HeroDescription>

        <ButtonGroup>
          <PrimaryButton href="#projects" onClick={props.handleClick}>
            View My Work <FiArrowUpRight size="1.6rem" />
          </PrimaryButton>
          <SecondaryButton 
            href="/resume.pdf" 
            download="Jerom_Issac_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV <FiDownload size="1.5rem" />
          </SecondaryButton>
        </ButtonGroup>

        <EcosystemSection>
          <EcosystemLabel>Core Ecosystem & Technologies</EcosystemLabel>
          <EcosystemPills>
            {ecosystem.map((technology) => (
              <EcosystemPill key={technology.name}>
                <span className="ecosystem-icon" aria-hidden="true">
                  {technology.logo ? (
                    <img src={technology.logo} alt="" />
                  ) : (
                    <span className="ecosystem-mark">{technology.mark}</span>
                  )}
                </span>
                {technology.name}
              </EcosystemPill>
            ))}
          </EcosystemPills>
        </EcosystemSection>
      </LeftSection>

      <VisualSection>
        <GlowOrb />
        <GlassHeroCard>
          <CentralGraphic>
            <HoloCircle />
            <CoreAvatar>
              <span style={{ fontSize: '32px', fontWeight: '800', letterSpacing: '-1px' }}>JI</span>
              <span style={{ fontSize: '11px', fontWeight: '600', opacity: 0.9, marginTop: '4px' }}>ENGINEERING</span>
            </CoreAvatar>
          </CentralGraphic>

          <div style={{ marginTop: '24px', textAlign: 'center', zIndex: 2 }}>
            <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#0F172A', marginBottom: '8px' }}>
              Building Intelligent Products
            </h4>
            <p style={{ fontSize: '13px', lineHeight: 1.8, color: '#64748B' }}>
              Applied AI&nbsp; · &nbsp;Data Systems&nbsp; · &nbsp;Full-Stack Engineering
            </p>
          </div>
        </GlassHeroCard>
      </VisualSection>
    </HeroContainer>
  );
};

export default Hero;