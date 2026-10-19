import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const pulseGlow = keyframes`
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50% { opacity: 0.9; transform: scale(1.05); }
`;

export const HeroContainer = styled.div`
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  align-items: center;
  gap: 48px;
  width: 100%;
  padding: 40px 0 60px;
  position: relative;

  @media ${(props) => props.theme.breakpoints.lg} {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 20px 0 40px;
  }
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 2;
`;

export const GreetingBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.8px;
  color: #6366F1;
  background: rgba(99, 102, 241, 0.08);
  border: 1px solid rgba(99, 102, 241, 0.2);
  padding: 6px 14px;
  border-radius: 9999px;
  margin-bottom: 20px;
`;

export const HeroName = styled.h1`
  font-size: 58px;
  font-weight: 800;
  line-height: 1.1;
  color: #0F172A;
  margin-bottom: 8px;
  letter-spacing: -0.03em;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 46px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 36px;
  }
`;

export const HeroSubtitle = styled.h2`
  font-size: 38px;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #EC4899 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.02em;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 30px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 24px;
  }
`;

export const HeroDescription = styled.p`
  font-size: 17px;
  line-height: 1.7;
  color: #475569;
  max-width: 580px;
  margin-bottom: 32px;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 15px;
    line-height: 1.6;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 48px;
  flex-wrap: wrap;
`;

export const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #0F172A;
  color: #FFFFFF !important;
  font-size: 14px;
  font-weight: 600;
  padding: 13px 26px;
  border-radius: 9999px;
  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.15);
  transition: all 0.25s ease;
  cursor: pointer;

  &:hover {
    background: #1E293B;
    transform: translateY(-2px);
    box-shadow: 0 12px 24px rgba(15, 23, 42, 0.22);
  }
`;

export const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  color: #0F172A !important;
  font-size: 14px;
  font-weight: 600;
  padding: 13px 26px;
  border-radius: 9999px;
  border: 1px solid rgba(203, 213, 225, 0.8);
  box-shadow: 0 4px 12px rgba(30, 41, 59, 0.05);
  transition: all 0.25s ease;
  cursor: pointer;

  &:hover {
    background: #FFFFFF;
    border-color: #94A3B8;
    transform: translateY(-2px);
    box-shadow: 0 8px 18px rgba(30, 41, 59, 0.08);
  }
`;

export const EcosystemSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const EcosystemLabel = styled.span`
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  color: #94A3B8;
`;

export const EcosystemPills = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`;

export const EcosystemPill = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 600;
  color: #334155;
  background: rgba(255, 255, 255, 0.58);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid rgba(255, 255, 255, 0.88);
  box-shadow: 0 4px 12px rgba(30, 41, 59, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.8);
  padding: 5px 12px 5px 6px;
  border-radius: 9999px;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.82);
    transform: translateY(-1px);
    box-shadow: 0 6px 14px rgba(30, 41, 59, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.9);
  }

  .ecosystem-icon {
    width: 26px;
    height: 26px;
    flex: 0 0 26px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(255, 255, 255, 0.95);
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.72);
    box-shadow: 0 2px 6px rgba(30, 41, 59, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }

  .ecosystem-icon img {
    width: 20px;
    height: 20px;
    object-fit: contain;
  }

  .ecosystem-mark {
    color: #475569;
    font-size: 10px;
    font-weight: 800;
    letter-spacing: -0.03em;
  }
`;

export const VisualSection = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 480px;

  @media ${(props) => props.theme.breakpoints.sm} {
    min-height: 380px;
  }
`;

export const GlowOrb = styled.div`
  position: absolute;
  width: 380px;
  height: 380px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(167, 139, 250, 0.35) 0%, rgba(192, 132, 252, 0.15) 50%, transparent 70%);
  filter: blur(40px);
  animation: ${pulseGlow} 6s ease-in-out infinite;
  z-index: 0;
`;

export const GlassHeroCard = styled.div`
  position: relative;
  width: 100%;
  max-width: 420px;
  height: 420px;
  background: linear-gradient(160deg, rgba(255, 255, 255, 0.85) 0%, rgba(248, 250, 252, 0.6) 100%);
  backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.95);
  box-shadow: 0 20px 40px -10px rgba(99, 102, 241, 0.12), 0 10px 20px -5px rgba(30, 41, 59, 0.06);
  border-radius: 36px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: radial-gradient(circle at 50% 20%, rgba(224, 231, 255, 0.6) 0%, transparent 60%);
    pointer-events: none;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    height: 400px;
    padding: 20px;
  }
`;

export const CentralGraphic = styled.div`
  position: relative;
  width: 220px;
  height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HoloCircle = styled.div`
  position: absolute;
  width: 190px;
  height: 190px;
  border-radius: 50%;
  border: 2px dashed rgba(99, 102, 241, 0.3);
  animation: ${float} 8s ease-in-out infinite;
`;

export const CoreAvatar = styled.div`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #C026D3 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  box-shadow: 0 15px 35px rgba(99, 102, 241, 0.35);
  position: relative;
`;
