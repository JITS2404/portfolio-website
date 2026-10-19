import React from 'react';
import { Section, SectionBadge, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: '3+', text: 'Full-stack applications deployed in production environments' },
  { number: '85%', text: 'Average accuracy rate achieved in AI/ML implementations' },
  { number: '75%', text: 'Reduction in manual processes through automation solutions' },
  { number: '200+', text: 'Daily interactions handled by deployed AI systems' }
];

const Acomplishments = () => (
  <Section id="achievements">
    <SectionBadge>IMPACT & METRICS</SectionBadge>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
