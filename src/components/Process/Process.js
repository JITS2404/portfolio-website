import React from 'react';
import styled from 'styled-components';
import { FiSearch, FiLayers, FiCode, FiCheckSquare, FiTrendingUp, FiArrowRight } from 'react-icons/fi';
import { Section, SectionBadge, SectionTitle } from '../../styles/GlobalComponents';

const ProcessContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
  margin-top: 20px;
  position: relative;

  @media ${(props) => props.theme.breakpoints.lg} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
  }
`;

const StepCard = styled.div`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.95);
  box-shadow: 0 8px 20px -4px rgba(30, 41, 59, 0.04);
  border-radius: 20px;
  padding: 22px 18px;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    background: #FFFFFF;
    border-color: rgba(99, 102, 241, 0.3);
    box-shadow: 0 14px 28px -6px rgba(99, 102, 241, 0.1);
  }
`;

const StepTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const StepIcon = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 12px;
  background: rgba(99, 102, 241, 0.08);
  color: #6366F1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
`;

const StepNumber = styled.span`
  font-size: 18px;
  font-weight: 800;
  color: #CBD5E1;
  letter-spacing: -0.5px;
`;

const StepTitle = styled.h4`
  font-size: 16px;
  font-weight: 700;
  color: #0F172A;
  margin-bottom: 8px;
`;

const StepDesc = styled.p`
  font-size: 12.5px;
  line-height: 1.6;
  color: #64748B;
`;

const Connector = styled.div`
  display: none;
  position: absolute;
  right: -12px;
  top: 50%;
  transform: translateY(-50%);
  color: #CBD5E1;
  z-index: 2;

  @media ${(props) => props.theme.breakpoints.xl} {
    display: ${(props) => (props.isLast ? 'none' : 'block')};
  }
`;

const steps = [
  {
    number: '01',
    icon: <FiSearch />,
    title: 'Discover',
    desc: 'Deep dive into user pain points, dataset integrity, and core business KPI targets.'
  },
  {
    number: '02',
    icon: <FiLayers />,
    title: 'Architecture',
    desc: 'Structure clean schema models, AI pipelines, system boundaries, and API contracts.'
  },
  {
    number: '03',
    icon: <FiCode />,
    title: 'Develop',
    desc: 'Build high-performance React frontends, robust backend logic, and model integrations.'
  },
  {
    number: '04',
    icon: <FiCheckSquare />,
    title: 'Evaluate',
    desc: 'Conduct rigorous validation, benchmark AI output accuracy, and fine-tune latency.'
  },
  {
    number: '05',
    icon: <FiTrendingUp />,
    title: 'Deploy & Scale',
    desc: 'Deploy to cloud environments with automated monitoring, feedback loops, and optimization.'
  }
];

const Process = () => {
  return (
    <Section id="process">
      <SectionBadge>MY PROCESS</SectionBadge>
      <SectionTitle>Engineering Process I Follow</SectionTitle>

      <ProcessContainer>
        {steps.map((step, index) => (
          <StepCard key={index}>
            <StepTop>
              <StepIcon>{step.icon}</StepIcon>
              <StepNumber>{step.number}</StepNumber>
            </StepTop>
            <StepTitle>{step.title}</StepTitle>
            <StepDesc>{step.desc}</StepDesc>
            <Connector isLast={index === steps.length - 1}>
              <FiArrowRight size="1.2rem" />
            </Connector>
          </StepCard>
        ))}
      </ProcessContainer>
    </Section>
  );
};

export default Process;
