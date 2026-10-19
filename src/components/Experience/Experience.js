import React from 'react';
import styled from 'styled-components';
import { FiBriefcase, FiCalendar, FiMapPin, FiDownload } from 'react-icons/fi';
import { Section, SectionBadge, SectionTitle } from '../../styles/GlobalComponents';

const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 16px;
  position: relative;
`;

const ExperienceCard = styled.div`
  background: rgba(255, 255, 255, 0.78);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.95);
  box-shadow: 0 10px 25px -5px rgba(30, 41, 59, 0.05), 0 4px 8px -2px rgba(30, 41, 59, 0.02);
  border-radius: 24px;
  padding: 32px;
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    background: rgba(255, 255, 255, 0.95);
    border-color: rgba(99, 102, 241, 0.25);
    box-shadow: 0 16px 32px -8px rgba(99, 102, 241, 0.1);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 24px 20px;
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
  flex-wrap: wrap;
  gap: 12px;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
`;

const CompanyIcon = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 14px;
  background: rgba(99, 102, 241, 0.08);
  color: #6366F1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  flex-shrink: 0;
`;

const TitleInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const JobTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: #0F172A;
  margin-bottom: 4px;
  line-height: 1.3;
`;

const CompanyName = styled.h4`
  font-size: 15px;
  font-weight: 600;
  color: #6366F1;
`;

const MetaInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`;

const DurationBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 600;
  color: #0F172A;
  background: rgba(241, 245, 249, 0.9);
  padding: 6px 14px;
  border-radius: 9999px;
  border: 1px solid rgba(226, 232, 240, 0.8);
`;

const LocationBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 500;
  color: #64748B;
`;

const Responsibilities = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-left: 60px;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding-left: 0;
  }
`;

const ResponsibilityItem = styled.li`
  font-size: 14.5px;
  line-height: 1.7;
  color: #334155;
  position: relative;
  padding-left: 20px;

  &::before {
    content: '•';
    color: #6366F1;
    font-size: 20px;
    position: absolute;
    left: 0;
    top: -3px;
  }
`;

const DownloadBanner = styled.div`
  margin-top: 36px;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(16px);
  border: 1px dashed rgba(203, 213, 225, 0.9);
  border-radius: 20px;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;

  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
    text-align: center;
  }
`;

const BannerText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  h4 {
    font-size: 16px;
    font-weight: 700;
    color: #0F172A;
  }

  p {
    font-size: 13px;
    color: #64748B;
  }
`;

const DownloadBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #0F172A;
  color: #FFFFFF;
  font-size: 13px;
  font-weight: 600;
  padding: 10px 22px;
  border-radius: 9999px;
  border: none;
  cursor: pointer;
  transition: all 0.25s ease;
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.12);

  &:hover {
    background: #1E293B;
    transform: translateY(-2px);
    box-shadow: 0 8px 18px rgba(15, 23, 42, 0.2);
  }
`;

const Experience = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Jerom_Issac_Resume.pdf';
    link.click();
  };

  return (
    <Section id="experience">
      <SectionBadge>CAREER JOURNEY</SectionBadge>
      <SectionTitle>Professional Experience</SectionTitle>

      <ExperienceContainer>
        <ExperienceCard>
          <CardHeader>
            <HeaderLeft>
              <CompanyIcon>
                <FiBriefcase />
              </CompanyIcon>
              <TitleInfo>
                <JobTitle>AI Application Developer</JobTitle>
                <CompanyName>Rathinam Group of Institutions</CompanyName>
              </TitleInfo>
            </HeaderLeft>

            <MetaInfo>
              <LocationBadge>
                <FiMapPin /> Coimbatore, India
              </LocationBadge>
              <DurationBadge>
                <FiCalendar /> Aug 2025 - Feb 2026
              </DurationBadge>
            </MetaInfo>
          </CardHeader>

          <Responsibilities>
            <ResponsibilityItem>
              AI-enabled internal applications replaced manual workflows and reduced operational turnaround time by 35–40%, improving how information was accessed and processed across teams.
            </ResponsibilityItem>
            <ResponsibilityItem>
             Built end-to-end generative AI assistants integrated with organizational data sources, enabling natural language query interfaces for executive stakeholders and reducing report generation time by 60%.
            </ResponsibilityItem>
            <ResponsibilityItem>
              Business requirements were discussed directly with executive stakeholders and translated into practical system logic rather than theoretical designs.
            </ResponsibilityItem>
             <ResponsibilityItem>
              Designed and deployed KPI decision intelligence systems processing 10K+ data points monthly, providing real-time performance visibility and predictive analytics for strategic planning.
             </ResponsibilityItem>
          </Responsibilities>
        </ExperienceCard>

        <ExperienceCard>
          <CardHeader>
            <HeaderLeft>
              <CompanyIcon>
                <FiBriefcase />
              </CompanyIcon>
              <TitleInfo>
                <JobTitle>Data Analytics - Digital Learning & Professional Society</JobTitle>
                <CompanyName>Rathinam Technical Campus</CompanyName>
              </TitleInfo>
            </HeaderLeft>

            <MetaInfo>
              <LocationBadge>
                <FiMapPin /> Coimbatore, India
              </LocationBadge>
              <DurationBadge>
                <FiCalendar /> Jan 2025 – July 2025
              </DurationBadge>
            </MetaInfo>
          </CardHeader>

          <Responsibilities>
            <ResponsibilityItem>
              Academic datasets were cleaned, analyzed, and visualized using Python and Power BI, improving reporting accuracy and insight reliability by 25–30%.
            </ResponsibilityItem>
            <ResponsibilityItem>
              Analyzed data using Python and Power BI, improving reporting accuracy by 28%, and built dashboards and automated reporting workflows.           
            </ResponsibilityItem>
            <ResponsibilityItem>
              Developed performance tracking and predictive-analysis workflows contributing to a 15% improvement in reported academic outcomes.
            </ResponsibilityItem>
            <ResponsibilityItem>
              Consolidated multi-source data and established standardized KPI frameworks for structured decision support.
            </ResponsibilityItem>
          </Responsibilities>
        </ExperienceCard>

        <DownloadBanner>
          <BannerText>
            <h4>Looking for my complete career & academic background?</h4>
            <p>Download the official curriculum vitae for in-depth credentials and references.</p>
          </BannerText>
          <DownloadBtn 
            as="a" 
            href="/resume.pdf" 
            download="Jerom_Issac_Resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FiDownload /> Download Full CV
          </DownloadBtn>
        </DownloadBanner>
      </ExperienceContainer>
    </Section>
  );
};

export default Experience;