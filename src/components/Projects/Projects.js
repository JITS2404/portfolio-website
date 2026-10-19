import React, { useState, useEffect } from 'react';
import { FiArrowUpRight, FiX, FiCheckCircle, FiLinkedin, FiGithub, FiTrendingUp, FiActivity, FiShield, FiMic } from 'react-icons/fi';
import {
  ProjectsHeader,
  HeaderLeft,
  ViewAllBtn,
  ProjectsGrid,
  ProjectCard,
  CardTop,
  IconBadge,
  PeriodBadge,
  ProjectTitle,
  ProjectCategory,
  ProjectSummary,
  TagContainer,
  TechTag,
  CardFooter,
  DetailsBtn,
  OutLink,
  ModalOverlay,
  ModalContent,
  CloseBtn,
  ModalHeader,
  ModalTitle,
  SectionBlock,
  BulletList,
  InsightBox,
  ModalFooter,
  ModalAction
} from './ProjectsStyles';
import { Section, SectionBadge, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const projectIcons = {
  echelonx: { icon: <FiActivity />, color: '#6366F1', bg: 'rgba(99, 102, 241, 0.1)' },
  edumetric: { icon: <FiTrendingUp />, color: '#3B82F6', bg: 'rgba(59, 130, 246, 0.1)' },
  eoga: { icon: <FiShield />, color: '#10B981', bg: 'rgba(16, 185, 129, 0.1)' },
  cerebra: { icon: <FiMic />, color: '#F59E0B', bg: 'rgba(245, 158, 11, 0.1)' }
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <Section id="projects">
      <ProjectsHeader>
        <HeaderLeft>
          <SectionBadge>FEATURED PROJECTS</SectionBadge>
          <SectionTitle>Selected Engineering Projects</SectionTitle>
        </HeaderLeft>
      </ProjectsHeader>

      <ProjectsGrid>
        {projects.map((p) => {
          const iconMeta = projectIcons[p.id] || { icon: <FiActivity />, color: '#6366F1', bg: 'rgba(99, 102, 241, 0.1)' };
          return (
            <ProjectCard key={p.id} onClick={() => setSelectedProject(p)}>
              <div>
                <CardTop>
                  <IconBadge color={iconMeta.color} bg={iconMeta.bg}>
                    {iconMeta.icon}
                  </IconBadge>
                  <PeriodBadge>{p.period}</PeriodBadge>
                </CardTop>

                <ProjectTitle>{p.title}</ProjectTitle>
                <ProjectCategory>{p.category}</ProjectCategory>
                <ProjectSummary>{p.summary}</ProjectSummary>

                <TagContainer>
                  {p.tags.map((t, idx) => (
                    <TechTag key={idx}>{t}</TechTag>
                  ))}
                </TagContainer>
              </div>

              <CardFooter>
                <DetailsBtn onClick={(e) => { e.stopPropagation(); setSelectedProject(p); }}>
                  View Full Description <FiArrowUpRight />
                </DetailsBtn>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <OutLink 
                    href={p.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FiGithub /> GitHub
                  </OutLink>
                  <OutLink 
                    href={p.linkedinUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FiLinkedin /> LinkedIn
                  </OutLink>
                </div>
              </CardFooter>
            </ProjectCard>
          );
        })}
      </ProjectsGrid>

      {/* Interactive Detail Modal */}
      {selectedProject && (
        <ModalOverlay onClick={() => setSelectedProject(null)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseBtn onClick={() => setSelectedProject(null)} aria-label="Close modal">
              <FiX />
            </CloseBtn>

            <ModalHeader>
              <PeriodBadge style={{ marginBottom: '10px', display: 'inline-block' }}>
                {selectedProject.period}
              </PeriodBadge>
              <ModalTitle>{selectedProject.title}</ModalTitle>
              <ProjectCategory>{selectedProject.category}</ProjectCategory>
              
              <TagContainer style={{ marginTop: '12px', marginBottom: '8px' }}>
                {selectedProject.tags.map((t, idx) => (
                  <TechTag key={idx}>{t}</TechTag>
                ))}
              </TagContainer>
            </ModalHeader>

            <SectionBlock>
              <h4>🧠 The Problem</h4>
              <p>{selectedProject.problem}</p>
            </SectionBlock>

            {selectedProject.solutionPoints && (
              <SectionBlock>
                <h4>⚙️ Architecture & Solution</h4>
                <BulletList>
                  {selectedProject.solutionPoints.map((pt, idx) => (
                    <li key={idx}>{pt}</li>
                  ))}
                </BulletList>
              </SectionBlock>
            )}

            {selectedProject.deliverables && (
              <SectionBlock>
                <h4>📊 What It Delivers</h4>
                <BulletList>
                  {selectedProject.deliverables.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </BulletList>
              </SectionBlock>
            )}

            {selectedProject.results && (
              <SectionBlock>
                <h4>📈 Measured Results & Impact</h4>
                <BulletList>
                  {selectedProject.results.map((res, idx) => (
                    <li key={idx} style={{ fontWeight: '500' }}>{res}</li>
                  ))}
                </BulletList>
              </SectionBlock>
            )}

            {selectedProject.keyInsight && (
              <InsightBox>
                <h5>💡 Key System Insight</h5>
                <p>{selectedProject.keyInsight}</p>
              </InsightBox>
            )}

            <ModalFooter>
              <ModalAction 
                href={selectedProject.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FiGithub /> View on GitHub
              </ModalAction>
              <ModalAction 
                primary 
                href={selectedProject.linkedinUrl} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FiLinkedin /> View on LinkedIn <FiArrowUpRight />
              </ModalAction>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      )}
    </Section>
  );
};

export default Projects;