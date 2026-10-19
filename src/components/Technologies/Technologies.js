import React from 'react';
import { DiDatabase, DiReact, DiPython } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      Professional technology stack focused on building intelligent systems and data-driven applications.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Designing clean, responsive interfaces focused on usability, clarity, and performance.<br />
            React · JavaScript · HTML · CSS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiDatabase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End & Data</ListTitle>
          <ListParagraph>
            Building scalable logic layers, APIs, and data pipelines that power intelligent systems.<br />
            Python · Node.js · Supabase · PostgreSQL · REST APIs
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiPython size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>AI & Analytics</ListTitle>
          <ListParagraph>
            Applying machine learning, analytics, and generative AI to support automation and decision intelligence.<br />
            Generative AI · Data Analytics · Power BI · ML Foundations
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
