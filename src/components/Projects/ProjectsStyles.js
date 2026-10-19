import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.96) translateY(10px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
`;

export const ProjectsHeader = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 28px;
  flex-wrap: wrap;
  gap: 16px;
`;

export const HeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ViewAllBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 600;
  color: #0F172A;
  background: rgba(255, 255, 255, 0.85);
  border: 1px solid rgba(203, 213, 225, 0.8);
  padding: 8px 18px;
  border-radius: 9999px;
  transition: all 0.2s ease;
  box-shadow: 0 2px 6px rgba(30, 41, 59, 0.04);

  &:hover {
    background: #0F172A;
    color: #FFFFFF !important;
    border-color: #0F172A;
    transform: translateY(-1px);
    box-shadow: 0 6px 14px rgba(15, 23, 42, 0.15);
  }
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
  }
`;

export const ProjectCard = styled.div`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.95);
  box-shadow: 0 10px 25px -5px rgba(30, 41, 59, 0.05), 0 4px 8px -2px rgba(30, 41, 59, 0.02);
  border-radius: 24px;
  padding: 28px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: pointer;
  position: relative;

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.96);
    border-color: rgba(99, 102, 241, 0.3);
    box-shadow: 0 20px 35px -8px rgba(99, 102, 241, 0.12), 0 6px 12px -2px rgba(30, 41, 59, 0.03);
  }
`;

export const CardTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  flex-wrap: wrap;
  gap: 10px;
`;

export const IconBadge = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 14px;
  background: ${(props) => props.bg || 'rgba(99, 102, 241, 0.1)'};
  color: ${(props) => props.color || '#6366F1'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
`;

export const PeriodBadge = styled.span`
  font-size: 11.5px;
  font-weight: 600;
  color: #64748B;
  background: rgba(241, 245, 249, 0.85);
  padding: 4px 12px;
  border-radius: 9999px;
  border: 1px solid rgba(226, 232, 240, 0.8);
`;

export const ProjectTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: #0F172A;
  margin-bottom: 6px;
  line-height: 1.3;
  letter-spacing: -0.01em;
`;

export const ProjectCategory = styled.span`
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  color: #6366F1;
  margin-bottom: 12px;
  display: block;
`;

export const ProjectSummary = styled.p`
  font-size: 14px;
  line-height: 1.65;
  color: #475569;
  margin-bottom: 20px;
`;

export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 24px;
`;

export const TechTag = styled.span`
  font-size: 11px;
  font-weight: 600;
  color: #334155;
  background: rgba(241, 245, 249, 0.9);
  padding: 4px 10px;
  border-radius: 9999px;
  border: 1px solid rgba(226, 232, 240, 0.8);
`;

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  padding-top: 16px;
  border-top: 1px solid rgba(226, 232, 240, 0.8);
`;

export const DetailsBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #0F172A;
  color: #FFFFFF;
  font-size: 13px;
  font-weight: 600;
  padding: 8px 18px;
  border-radius: 9999px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 10px rgba(15, 23, 42, 0.12);

  &:hover {
    background: #1E293B;
    transform: translateY(-1px);
    box-shadow: 0 6px 14px rgba(15, 23, 42, 0.18);
  }
`;

export const OutLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  font-weight: 600;
  color: #64748B;
  transition: color 0.2s ease;

  &:hover {
    color: #6366F1;
  }
`;

// Detailed Modal Dialog Styles
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(15, 23, 42, 0.5);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  animation: ${fadeIn} 0.25s ease-out;
`;

export const ModalContent = styled.div`
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.95);
  box-shadow: 0 25px 60px -15px rgba(15, 23, 42, 0.25);
  border-radius: 28px;
  width: 100%;
  max-width: 780px;
  max-height: 88vh;
  overflow-y: auto;
  padding: 36px 40px;
  position: relative;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 28px 20px;
    border-radius: 22px;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(241, 245, 249, 0.9);
  border: 1px solid rgba(203, 213, 225, 0.8);
  color: #0F172A;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #0F172A;
    color: #FFFFFF;
    transform: rotate(90deg);
  }
`;

export const ModalHeader = styled.div`
  margin-bottom: 24px;
  padding-right: 40px;
`;

export const ModalTitle = styled.h2`
  font-size: 26px;
  font-weight: 800;
  color: #0F172A;
  margin-bottom: 8px;
  line-height: 1.25;
  letter-spacing: -0.02em;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 22px;
  }
`;

export const SectionBlock = styled.div`
  margin-bottom: 24px;

  h4 {
    font-size: 15px;
    font-weight: 700;
    color: #0F172A;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  p {
    font-size: 14.5px;
    line-height: 1.7;
    color: #334155;
  }
`;

export const BulletList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-left: 20px;
  margin-top: 8px;

  li {
    font-size: 14px;
    line-height: 1.65;
    color: #334155;
    list-style: disc;
  }
`;

export const InsightBox = styled.div`
  background: rgba(99, 102, 241, 0.06);
  border-left: 4px solid #6366F1;
  padding: 16px 20px;
  border-radius: 0 16px 16px 0;
  margin: 24px 0;

  h5 {
    font-size: 13px;
    font-weight: 700;
    color: #4F46E5;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    margin-bottom: 4px;
  }

  p {
    font-size: 14px;
    line-height: 1.6;
    color: #1E1B4B;
    font-style: italic;
    font-weight: 500;
  }
`;

export const ModalFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 28px;
  padding-top: 20px;
  border-top: 1px solid rgba(226, 232, 240, 0.8);
  flex-wrap: wrap;
`;

export const ModalAction = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 600;
  padding: 10px 22px;
  border-radius: 9999px;
  text-decoration: none;
  transition: all 0.2s ease;
  color: ${(props) => (props.primary ? '#FFFFFF' : '#0F172A')} !important;
  background: ${(props) => (props.primary ? '#0F172A' : 'rgba(241, 245, 249, 0.9)')};
  border: 1px solid ${(props) => (props.primary ? '#0F172A' : '#CBD5E1')};

  &:hover {
    background: ${(props) => (props.primary ? '#1E293B' : '#FFFFFF')};
    transform: translateY(-1px);
  }
`;