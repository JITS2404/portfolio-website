import React, { useState } from 'react';
import {
  FilterRow,
  FilterPill,
  TechGrid,
  TechCard,
  IconContainer,
  TechLabel,
  CategoryTag
} from './TechStackStyles';
import { Section, SectionBadge, SectionTitle, SectionText } from '../../styles/GlobalComponents';

const categories = [
  'All',
  'AI & ML',
  'Frontend',
  'Backend & APIs',
  'Databases',
  'Data Analytics',
  'Tools & Workflow'
];

const allTechData = [
  // Programming & Core
  { name: 'Python', category: 'Backend & APIs', logo: '/images/python logo.jpg', accent: '#3776AB', group: 'Languages' },
  { name: 'JavaScript', category: 'Frontend', logo: '/images/js.png', accent: '#F7DF1E', group: 'Languages' },
  { name: 'SQL', category: 'Databases', logo: '/images/sql.png', accent: '#336791', group: 'Languages' },
  
  // Frontend
  { name: 'React', category: 'Frontend', logo: '/images/react.png', accent: '#61DAFB', group: 'Frontend' },
  { name: 'HTML5', category: 'Frontend', logo: '/images/html.png', accent: '#E34F26', group: 'Frontend' },
  { name: 'CSS3', category: 'Frontend', logo: '/images/css.png', accent: '#1572B6', group: 'Frontend' },
  
  // Backend & APIs
  { name: 'Node.js', category: 'Backend & APIs', logo: '/images/node.png', accent: '#339933', group: 'Backend' },
  { name: 'Express.js', category: 'Backend & APIs', logo: '/images/ex.png', accent: '#000000', group: 'Backend' },
  { name: 'FastAPI', category: 'Backend & APIs', mark: 'API', accent: '#009688', group: 'Backend' },
  { name: 'REST APIs', category: 'Backend & APIs', logo: '/images/REST.png', accent: '#FF6B35', group: 'Backend' },
  
  // Databases
  { name: 'PostgreSQL', category: 'Databases', logo: '/images/postgresql.png', accent: '#336791', group: 'Databases' },
  { name: 'Supabase', category: 'Databases', logo: '/images/supabase.jpg', accent: '#3ECF8E', group: 'Databases' },
  { name: 'pgAdmin', category: 'Databases', mark: 'pg', accent: '#336791', group: 'Databases' },
  
  // Data Analytics & Viz
  { name: 'Power BI', category: 'Data Analytics', logo: '/images/powerbi.png', accent: '#F2C811', group: 'Analytics' },
  { name: 'Pandas', category: 'Data Analytics', logo: '/images/pandas.png', accent: '#150458', group: 'Analytics' },
  { name: 'NumPy', category: 'Data Analytics', logo: '/images/numpy.png', accent: '#013243', group: 'Analytics' },
  { name: 'Jupyter', category: 'Data Analytics', logo: '/images/jupyter.png', accent: '#F37626', group: 'Analytics' },
  { name: 'Matplotlib', category: 'Data Analytics', mark: 'MPL', accent: '#11557C', group: 'Analytics' },
  
  // AI, ML & GenAI
  { name: 'Generative AI', category: 'AI & ML', logo: '/images/gen ai.png', accent: '#8B5CF6', group: 'AI' },
  { name: 'Gemini API', category: 'AI & ML', mark: 'G', accent: '#4285F4', group: 'AI' },
  { name: 'Agentic AI', category: 'AI & ML', logo: '/images/agentic ai.png', accent: '#10B981', group: 'AI' },
  { name: 'Prompt Eng.', category: 'AI & ML', logo: '/images/prompt eng.png', accent: '#6366F1', group: 'AI' },
  { name: 'TensorFlow', category: 'AI & ML', logo: '/images/tensorflow.png', accent: '#FF6F00', group: 'AI' },
  { name: 'OpenCV', category: 'AI & ML', logo: '/images/opencv.png', accent: '#00D4AA', group: 'AI' },
  
  // Tools & Workflow
  { name: 'Git', category: 'Tools & Workflow', logo: '/images/git.png', accent: '#F05032', group: 'Tools' },
  { name: 'GitHub', category: 'Tools & Workflow', logo: '/images/github.png', accent: '#181717', group: 'Tools' },
  { name: 'Postman', category: 'Tools & Workflow', logo: '/images/piostman.png', accent: '#FF6C37', group: 'Tools' },
  { name: 'Streamlit', category: 'Tools & Workflow', mark: 'S', accent: '#FF4B4B', group: 'Tools' }
];

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredTech = activeCategory === 'All'
    ? allTechData
    : allTechData.filter(item => item.category === activeCategory);

  return (
    <Section id="tech">
      <SectionBadge>TOOLS & SKILLS</SectionBadge>
      <SectionTitle>Technologies I Use</SectionTitle>
      <SectionText>
        Carefully selected tools, frameworks, and modern technologies powering intelligent full-stack applications and predictive data platforms.
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

      <TechGrid>
        {filteredTech.map((tech, index) => (
          <TechCard key={index} accent={tech.accent}>
            <IconContainer accent={tech.accent}>
              {tech.logo ? (
                <img src={tech.logo} alt={`${tech.name} logo`} />
              ) : (
                <span>{tech.mark}</span>
              )}
            </IconContainer>
            <TechLabel>{tech.name}</TechLabel>
            <CategoryTag>{tech.group}</CategoryTag>
          </TechCard>
        ))}
      </TechGrid>
    </Section>
  );
};

export default TechStack;