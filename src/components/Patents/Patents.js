import React from 'react';
import styled from 'styled-components';
import { FiAward, FiFileText, FiCheckCircle, FiAlertCircle, FiCpu, FiCompass } from 'react-icons/fi';
import { Section, SectionBadge, SectionTitle, SectionText } from '../../styles/GlobalComponents';
import { patents } from '../../constants/constants';

const PatentsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 28px;
  margin-top: 16px;
`;

const PatentCard = styled.div`
  background: rgba(255, 255, 255, 0.82);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.95);
  box-shadow: 0 12px 30px -6px rgba(30, 41, 59, 0.06), 0 4px 10px -2px rgba(30, 41, 59, 0.02);
  border-radius: 26px;
  padding: 36px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    background: rgba(255, 255, 255, 0.96);
    border-color: rgba(99, 102, 241, 0.3);
    box-shadow: 0 20px 40px -8px rgba(99, 102, 241, 0.12);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 24px 20px;
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 16px;
  border-bottom: 1px solid rgba(226, 232, 240, 0.8);
  padding-bottom: 20px;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
`;

const PatentIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: ${(props) => props.bg || 'rgba(99, 102, 241, 0.1)'};
  color: ${(props) => props.color || '#6366F1'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  flex-shrink: 0;
`;

const TitleInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const PatentHeading = styled.h3`
  font-size: 22px;
  font-weight: 800;
  color: #0F172A;
  margin-bottom: 6px;
  line-height: 1.25;
  letter-spacing: -0.015em;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 19px;
  }
`;

const JurisdictionText = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: #64748B;
`;

const BadgesRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`;

const PatentNumberBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 700;
  color: #4338CA;
  background: rgba(99, 102, 241, 0.08);
  border: 1px solid rgba(99, 102, 241, 0.2);
  padding: 6px 14px;
  border-radius: 9999px;
  font-family: ${props => props.theme.fonts.mono};
`;

const StatusBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 600;
  color: #059669;
  background: rgba(16, 185, 129, 0.08);
  border: 1px solid rgba(16, 185, 129, 0.2);
  padding: 6px 14px;
  border-radius: 9999px;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;

  @media ${(props) => props.theme.breakpoints.lg} {
    grid-template-columns: 1fr;
    gap: 18px;
  }
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.bg || 'rgba(248, 250, 252, 0.8)'};
  border: 1px solid rgba(226, 232, 240, 0.9);
  border-radius: 18px;
  padding: 20px;
  gap: 8px;

  h4 {
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    color: ${(props) => props.titleColor || '#0F172A'};
    display: flex;
    align-items: center;
    gap: 8px;
  }

  p {
    font-size: 13.5px;
    line-height: 1.65;
    color: #334155;
  }
`;

const CardBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  padding-top: 10px;
`;

const TagsGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const TagChip = styled.span`
  font-size: 11px;
  font-weight: 600;
  color: #475569;
  background: rgba(241, 245, 249, 0.9);
  padding: 4px 10px;
  border-radius: 9999px;
  border: 1px solid rgba(226, 232, 240, 0.8);
`;

const IssueNotice = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: #64748B;
`;

const patentIcons = [
  { icon: <FiCpu />, color: '#6366F1', bg: 'rgba(99, 102, 241, 0.1)' },
  { icon: <FiCompass />, color: '#06B6D4', bg: 'rgba(6, 182, 212, 0.1)' }
];

const Patents = () => {
  return (
    <Section id="patents">
      <SectionBadge>INTELLECTUAL PROPERTY</SectionBadge>
      <SectionTitle>Published Patents & Inventions</SectionTitle>
      <SectionText>
        Published Indian Patent Applications focused on state-based bio-informatics architectures and multi-criteria emergency healthcare decision systems.
      </SectionText>

      <PatentsGrid>
        {patents.map((item, index) => {
          const iconMeta = patentIcons[index % patentIcons.length];
          return (
            <PatentCard key={item.id}>
              <CardHeader>
                <HeaderLeft>
                  <PatentIcon color={iconMeta.color} bg={iconMeta.bg}>
                    {iconMeta.icon}
                  </PatentIcon>
                  <TitleInfo>
                    <PatentHeading>{item.title}</PatentHeading>
                    <JurisdictionText>{item.jurisdiction}</JurisdictionText>
                  </TitleInfo>
                </HeaderLeft>

                <BadgesRow>
                  <PatentNumberBadge>
                    <FiFileText /> App No: {item.appNumber}
                  </PatentNumberBadge>
                  <StatusBadge>
                    <FiCheckCircle /> {item.status} · {item.date}
                  </StatusBadge>
                </BadgesRow>
              </CardHeader>

              <ContentGrid>
                <Block bg="rgba(254, 242, 242, 0.6)" titleColor="#991B1B">
                  <h4><FiAlertCircle /> The Problem</h4>
                  <p>{item.problem}</p>
                </Block>

                <Block bg="rgba(238, 242, 255, 0.6)" titleColor="#3730A3">
                  <h4><FiCheckCircle /> The Solution</h4>
                  <p>{item.solution}</p>
                </Block>

                <Block bg="rgba(240, 253, 244, 0.6)" titleColor="#166534">
                  <h4><FiAward /> How It Is Solved</h4>
                  <p>{item.howItIsSolved}</p>
                </Block>
              </ContentGrid>

              <CardBottom>
                <TagsGroup>
                  {item.tags.map((t, idx) => (
                    <TagChip key={idx}>{t}</TagChip>
                  ))}
                </TagsGroup>
                <IssueNotice>Officially published by the Indian Patent Office (IPO)</IssueNotice>
              </CardBottom>
            </PatentCard>
          );
        })}
      </PatentsGrid>
    </Section>
  );
};

export default Patents;

