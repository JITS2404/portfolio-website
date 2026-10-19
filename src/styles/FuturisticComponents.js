import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

export const FuturisticContainer = styled.div`
  position: relative;
  background: linear-gradient(135deg, 
    rgba(0, 212, 170, 0.1) 0%, 
    rgba(114, 9, 183, 0.1) 100%);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 30px;
  margin: 20px 0;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -200%;
    width: 200%;
    height: 100%;
    background: linear-gradient(90deg, 
      transparent 0%, 
      rgba(255, 255, 255, 0.1) 50%, 
      transparent 100%);
    animation: ${shimmer} 3s infinite;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    border-color: rgba(255, 255, 255, 0.2);
  }
`;

export const GlassCard = styled.div`
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.1) 0%, 
    rgba(255, 255, 255, 0.05) 100%);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 15px;
  padding: 25px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, 
      transparent 0%, 
      rgba(255, 255, 255, 0.3) 50%, 
      transparent 100%);
  }
  
  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
    border-color: rgba(255, 255, 255, 0.25);
  }
`;

export const NeonText = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #00d4aa 0%, #7209b7 50%, #ff6b6b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  margin-bottom: 20px;
  animation: ${pulse} 2s ease-in-out infinite;
  
  @media ${props => props.theme.breakpoints.md} {
    font-size: 2rem;
  }
  
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 1.5rem;
  }
`;

export const FloatingElement = styled.div`
  animation: ${float} 3s ease-in-out infinite;
  animation-delay: ${props => props.delay || '0s'};
`;

export const HolographicBorder = styled.div`
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, 
      #00d4aa, #7209b7, #ff6b6b, #4ecdc4, #00d4aa);
    background-size: 300% 300%;
    border-radius: inherit;
    z-index: -1;
    animation: ${shimmer} 3s ease infinite;
    filter: blur(1px);
  }
`;