import React from 'react';
import styled from 'styled-components';
import { FiArrowUpRight, FiLayers, FiCpu, FiTrendingUp, FiCheckCircle } from 'react-icons/fi';
import { Section, SectionBadge } from '../../styles/GlobalComponents';

const AboutWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 48px;
  align-items: flex-start;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.95);
  box-shadow: 0 15px 35px -5px rgba(30, 41, 59, 0.05), 0 5px 15px -3px rgba(30, 41, 59, 0.03);
  border-radius: 32px;
  padding: 44px;
  margin: 20px 0;

  @media ${(props) => props.theme.breakpoints.lg} {
    grid-template-columns: 1fr;
    gap: 36px;
    padding: 32px 24px;
  }
`;

const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
`;

const AboutTitle = styled.h2`
  font-size: 36px;
  font-weight: 800;
  line-height: 1.25;
  color: #0F172A;
  margin-bottom: 28px;
  letter-spacing: -0.02em;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 28px;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-top: 8px;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div`
  background: rgba(255, 255, 255, 0.85);
  border: 1px solid rgba(226, 232, 240, 0.8);
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  transition: all 0.25s ease;
  box-shadow: 0 4px 12px rgba(30, 41, 59, 0.03);

  &:hover {
    transform: translateY(-2px);
    border-color: #CBD5E1;
    box-shadow: 0 8px 20px rgba(30, 41, 59, 0.06);
  }
`;

const StatIcon = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 12px;
  background: rgba(99, 102, 241, 0.08);
  color: #6366F1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  margin-bottom: 4px;
`;

const StatValue = styled.span`
  font-size: 26px;
  font-weight: 800;
  color: #0F172A;
  line-height: 1;
`;

const StatLabel = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: #64748B;
`;

const RightCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const BioText = styled.p`
  font-size: 15px;
  line-height: 1.75;
  color: #334155;
  margin-bottom: 16px;

  &:last-of-type {
    margin-bottom: 28px;
  }

  strong {
    color: #0F172A;
    font-weight: 600;
  }
`;

const ActionRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const LearnMoreBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #0F172A;
  color: #FFFFFF !important;
  font-size: 13px;
  font-weight: 600;
  padding: 10px 22px;
  border-radius: 9999px;
  transition: all 0.25s ease;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.12);

  &:hover {
    background: #1E293B;
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(15, 23, 42, 0.2);
  }
`;

const AboutMe = () => {
  return (
    <Section id="about">
      <SectionBadge>ABOUT ME</SectionBadge>
      <AboutWrapper>
        <LeftCol>
          <AboutTitle>
            Designing with Intent, <br />
            Engineering with Purpose
          </AboutTitle>

          <StatsGrid>
            <StatCard>
              <StatIcon><FiLayers /></StatIcon>
              <StatValue>3+</StatValue>
              <StatLabel>Deployed Full-Stack Apps</StatLabel>
            </StatCard>

            <StatCard>
              <StatIcon><FiCpu /></StatIcon>
              <StatValue>85%</StatValue>
              <StatLabel>AI/ML Model Accuracy</StatLabel>
            </StatCard>

            <StatCard>
              <StatIcon><FiTrendingUp /></StatIcon>
              <StatValue>75%</StatValue>
              <StatLabel>Workflow Bottleneck Cut</StatLabel>
            </StatCard>

            <StatCard>
              <StatIcon><FiCheckCircle /></StatIcon>
              <StatValue>200+</StatValue>
              <StatLabel>Daily AI System Inquiries</StatLabel>
            </StatCard>
          </StatsGrid>
        </LeftCol>

        <RightCol>
          <div>
            <BioText>
              <strong>I build AI-enabled, data-driven systems</strong> that help organizations make better decisions, automate workflows, and turn complex data into practical business outcomes.
            </BioText>
            
            <BioText>
              My background spans applied data science, full-stack development, and business analytics, which allows me to work comfortably across technical and non-technical contexts. Rather than focusing on isolated models or features, I design end-to-end solutions—from data ingestion and analytics to intelligent application layers that stakeholders actually use.
            </BioText>
            
            <BioText>
              My approach is pragmatic and system-oriented: understand the problem, structure the data, apply the right level of intelligence, and deliver solutions that scale. I value clean architecture, explainable outputs, and technology that supports real-world use rather than theoretical complexity.
            </BioText>

            <BioText>
              Currently, I’m focused on applied AI, data science for business, and intelligent application development, and I’m open to opportunities where I can contribute to building decision-ready systems, analytics platforms, and AI-powered products.
            </BioText>
          </div>

          <ActionRow>
            <LearnMoreBtn href="#experience">
              Explore Journey <FiArrowUpRight size="1.4rem" />
            </LearnMoreBtn>
          </ActionRow>
        </RightCol>
      </AboutWrapper>
    </Section>
  );
};

export default AboutMe;