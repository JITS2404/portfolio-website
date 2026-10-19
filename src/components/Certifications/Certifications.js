import React, { useState } from 'react';
import styled from 'styled-components';
import { FiAward, FiCheckCircle, FiExternalLink } from 'react-icons/fi';
import { Section, SectionBadge, SectionTitle, SectionText } from '../../styles/GlobalComponents';
import { certifications } from '../../constants/constants';

const FilterRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 16px 0 28px;
  flex-wrap: wrap;
`;

const FilterPill = styled.button`
  font-size: 13px;
  font-weight: ${(props) => (props.active ? '600' : '500')};
  color: ${(props) => (props.active ? '#0F172A' : '#64748B')};
  background: ${(props) => (props.active ? '#FFFFFF' : 'rgba(255, 255, 255, 0.65)')};
  border: 1px solid ${(props) => (props.active ? '#CBD5E1' : 'rgba(226, 232, 240, 0.8)')};
  box-shadow: ${(props) => (props.active ? '0 4px 12px rgba(30, 41, 59, 0.06)' : 'none')};
  padding: 8px 18px;
  border-radius: 9999px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: #0F172A;
    background: #FFFFFF;
    border-color: #CBD5E1;
  }
`;

const CertGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media ${(props) => props.theme.breakpoints.lg} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
  }
`;

const CertCard = styled.div`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.95);
  box-shadow: 0 8px 20px -4px rgba(30, 41, 59, 0.04), 0 2px 6px -1px rgba(30, 41, 59, 0.02);
  border-radius: 20px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 190px;
  transition: all 0.25s ease;
  position: relative;

  &:hover {
    transform: translateY(-4px);
    background: #FFFFFF;
    border-color: rgba(99, 102, 241, 0.3);
    box-shadow: 0 16px 30px -6px rgba(99, 102, 241, 0.1);
  }
`;

const CardTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
`;

const IssuerBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 11.5px;
  font-weight: 700;
  color: #4338CA;
  background: rgba(99, 102, 241, 0.08);
  border: 1px solid rgba(99, 102, 241, 0.2);
  padding: 4px 12px;
  border-radius: 9999px;
`;

const VerifiedIcon = styled.div`
  color: #10B981;
  font-size: 16px;
  display: flex;
  align-items: center;
`;

const CertTitle = styled.h4`
  font-size: 16.5px;
  font-weight: 700;
  color: #0F172A;
  line-height: 1.35;
  margin-bottom: 12px;
  letter-spacing: -0.01em;
`;

const CardBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  padding-top: 14px;
  border-top: 1px solid rgba(226, 232, 240, 0.8);
  flex-wrap: wrap;
  gap: 8px;
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const CertTag = styled.span`
  font-size: 10.5px;
  font-weight: 600;
  color: #64748B;
  background: rgba(241, 245, 249, 0.9);
  padding: 3px 8px;
  border-radius: 9999px;
`;

const PlaceholderBadge = styled.span`
  font-size: 11px;
  font-weight: 600;
  color: #6366F1;
  display: inline-flex;
  align-items: center;
  gap: 4px;
`;

const categories = [
  'All',
  'AI & Machine Learning',
  'Full-Stack & Cloud',
  'Data & Business Intelligence',
  'UI/UX Design',
  'Security & Engineering'
];

const Certifications = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredCerts = activeCategory === 'All'
    ? certifications
    : certifications.filter((c) => c.category === activeCategory);

  return (
    <Section id="certifications">
      <SectionBadge>CREDENTIALS & KNOWLEDGE</SectionBadge>
      <SectionTitle>Professional Certifications</SectionTitle>
      <SectionText>
        Verified industry certifications across Artificial Intelligence, Full-Stack Architecture, Cloud Systems, and Business Intelligence.
      </SectionText>

      <FilterRow>
        {categories.map((cat, idx) => (
          <FilterPill
            key={idx}
            active={activeCategory === cat}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </FilterPill>
        ))}
      </FilterRow>

      <CertGrid>
        {filteredCerts.map((cert, index) => (
          <CertCard key={index}>
            <div>
              <CardTop>
                <IssuerBadge>
                  <FiAward /> {cert.issuer}
                </IssuerBadge>
                <VerifiedIcon title="Verified Credential">
                  <FiCheckCircle />
                </VerifiedIcon>
              </CardTop>
              <CertTitle>{cert.title}</CertTitle>
            </div>

            <CardBottom>
              <TagList>
                {cert.tags.map((t, idx) => (
                  <CertTag key={idx}>{t}</CertTag>
                ))}
              </TagList>
              <PlaceholderBadge>
                Verified <FiExternalLink size="12px" />
              </PlaceholderBadge>
            </CardBottom>
          </CertCard>
        ))}
      </CertGrid>
    </Section>
  );
};

export default Certifications;

