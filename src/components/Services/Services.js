import React from 'react';
import styled from 'styled-components';
import { FiArrowUpRight, FiCpu, FiCode, FiBarChart2, FiZap } from 'react-icons/fi';
import { Section, SectionBadge, SectionTitle } from '../../styles/GlobalComponents';

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 16px;

  @media ${(props) => props.theme.breakpoints.lg} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled.div`
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.95);
  border-radius: 24px;
  padding: 28px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 250px;
  position: relative;
  transition: all 0.3s ease;
  box-shadow: 0 10px 25px -5px rgba(30, 41, 59, 0.05);

  &:hover {
    transform: translateY(-4px);
    background: rgba(255, 255, 255, 0.95);
    border-color: rgba(99, 102, 241, 0.3);
    box-shadow: 0 16px 32px -6px rgba(99, 102, 241, 0.12);
  }
`;

const CardTop = styled.div`
  display: flex;
  flex-direction: column;
`;

const IconBadge = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 14px;
  background: ${(props) => props.bg || 'rgba(99, 102, 241, 0.1)'};
  color: ${(props) => props.color || '#6366F1'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  margin-bottom: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.03);
`;

const ServiceHeading = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: #0F172A;
  margin-bottom: 10px;
  line-height: 1.3;
`;

const ServiceText = styled.p`
  font-size: 13.5px;
  line-height: 1.6;
  color: #64748B;
`;

const CardBottom = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const ArrowLink = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(241, 245, 249, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #475569;
  font-size: 14px;
  transition: all 0.2s ease;

  ${ServiceCard}:hover & {
    background: #0F172A;
    color: #FFFFFF;
    transform: translate(2px, -2px);
  }
`;

const servicesData = [
  {
    icon: <FiCpu />,
    color: '#8B5CF6',
    bg: 'rgba(139, 92, 246, 0.12)',
    title: 'AI & Agentic Systems',
    description: 'Developing intelligent applications, autonomous agentic workflows, and LLM integrations with prompt engineering and decision intelligence.'
  },
  {
    icon: <FiCode />,
    color: '#3B82F6',
    bg: 'rgba(59, 130, 246, 0.12)',
    title: 'Full-Stack Development',
    description: 'Crafting responsive, high-performance web applications using React, modern JavaScript, Node.js, and robust RESTful API architectures.'
  },
  {
    icon: <FiBarChart2 />,
    color: '#06B6D4',
    bg: 'rgba(6, 182, 212, 0.12)',
    title: 'Data Science & Analytics',
    description: 'Cleaning, analyzing, and visualizing complex datasets with Python, Pandas, NumPy, and building interactive, decision-ready Power BI dashboards.'
  },
  {
    icon: <FiZap />,
    color: '#F59E0B',
    bg: 'rgba(245, 158, 11, 0.12)',
    title: 'Decision Intelligence',
    description: 'Structuring automated KPI frameworks, predictive analytics models, and scalable database systems that eliminate business workflow bottlenecks.'
  }
];

const Services = () => {
  return (
    <Section id="services">
      <SectionBadge>WHAT I DO</SectionBadge>
      <SectionTitle>Services & Expertise</SectionTitle>
      
      <ServicesGrid>
        {servicesData.map((item, index) => (
          <ServiceCard key={index}>
            <CardTop>
              <IconBadge color={item.color} bg={item.bg}>
                {item.icon}
              </IconBadge>
              <ServiceHeading>{item.title}</ServiceHeading>
              <ServiceText>{item.description}</ServiceText>
            </CardTop>
            <CardBottom>
              <ArrowLink>
                <FiArrowUpRight />
              </ArrowLink>
            </CardBottom>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </Section>
  );
};

export default Services;

