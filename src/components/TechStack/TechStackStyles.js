import styled from 'styled-components';

export const FilterRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 20px 0 32px;
  flex-wrap: wrap;
`;

export const FilterPill = styled.button`
  font-size: 13px;
  font-weight: ${(props) => (props.active ? '600' : '500')};
  color: ${(props) => (props.active ? '#0F172A' : '#64748B')};
  background: ${(props) => (props.active ? '#FFFFFF' : 'rgba(255, 255, 255, 0.6)')};
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

export const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 16px;

  @media ${(props) => props.theme.breakpoints.xl} {
    grid-template-columns: repeat(6, 1fr);
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    grid-template-columns: repeat(4, 1fr);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
  }
`;

export const TechCard = styled.div`
  background: rgba(255, 255, 255, 0.82);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.95);
  box-shadow: 0 8px 20px -4px rgba(30, 41, 59, 0.04), 0 2px 6px -1px rgba(30, 41, 59, 0.02);
  border-radius: 20px;
  padding: 20px 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 110px;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${(props) => props.accent || 'transparent'};
    opacity: 0;
    transition: opacity 0.25s ease;
  }

  &:hover {
    transform: translateY(-5px);
    background: #FFFFFF;
    border-color: rgba(99, 102, 241, 0.3);
    box-shadow: 0 16px 30px -8px rgba(99, 102, 241, 0.12), 0 4px 10px -2px rgba(30, 41, 59, 0.04);

    &::before {
      opacity: 1;
    }
  }
`;

export const IconContainer = styled.div`
  width: 52px;
  height: 52px;
  margin-bottom: 10px;
  border: 1px solid rgba(255, 255, 255, 0.92);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.62);
  box-shadow: 0 6px 16px rgba(30, 41, 59, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.25s ease;

  img {
    width: 34px;
    height: 34px;
    object-fit: contain;
  }

  span {
    color: ${(props) => props.accent || '#475569'};
    font-size: 15px;
    font-weight: 800;
    letter-spacing: -0.04em;
  }

  ${TechCard}:hover & {
    transform: scale(1.15);
    background: rgba(255, 255, 255, 0.84);
  }
`;

export const TechLabel = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: #334155;
  text-align: center;
  line-height: 1.2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;

  ${TechCard}:hover & {
    color: #0F172A;
  }
`;

export const CategoryTag = styled.span`
  font-size: 10px;
  font-weight: 500;
  color: #94A3B8;
  margin-top: 4px;
`;