import styled from 'styled-components';

export const Section = styled.section`
  display: ${(props) => (props.grid ? 'grid' : 'flex')};
  flex-direction: ${(props) => (props.row ? 'row' : 'column')};
  padding: ${(props) => (props.nopadding ? '0' : '40px 0')};
  margin: 0 auto;
  max-width: 100%;
  width: 100%;
  position: relative;
  grid-template-columns: ${(props) => (props.grid ? '1fr 1fr' : 'none')};
  gap: 32px;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: ${(props) => (props.nopadding ? '0' : '30px 0')};
    grid-template-columns: 1fr;
    flex-direction: column;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${(props) => (props.nopadding ? '0' : '24px 0')};
  }
`;

export const SectionBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: #6366f1;
  background: rgba(99, 102, 241, 0.08);
  border: 1px solid rgba(99, 102, 241, 0.2);
  padding: 4px 12px;
  border-radius: 9999px;
  margin-bottom: 12px;
  width: fit-content;
`;

export const SectionTitle = styled.h2`
  font-weight: 800;
  font-size: ${(props) => (props.main ? '54px' : '36px')};
  line-height: ${(props) => (props.main ? '1.15' : '1.25')};
  color: #0F172A;
  margin-bottom: 16px;
  letter-spacing: -0.025em;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: ${(props) => (props.main ? '42px' : '30px')};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: ${(props) => (props.main ? '32px' : '26px')};
  }
`;

export const SectionText = styled.p`
  max-width: 720px;
  font-size: 17px;
  line-height: 1.7;
  font-weight: 400;
  color: #475569;
  margin-bottom: 24px;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 15px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 1.6;
  }
`;

export const SectionDivider = styled.div`
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, rgba(226, 232, 240, 0) 0%, rgba(226, 232, 240, 0.8) 50%, rgba(226, 232, 240, 0) 100%);
  margin: ${(props) => (props.divider ? '50px 0' : '40px 0')};
`;

export const SectionSubText = styled.p`
  max-width: 700px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.6;
  color: #64748B;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
  }
`;
export const SecondaryBtn = styled.button`
  color: #FFF;
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.33);
  box-sizing: border-box;
  border-radius: 999px;
  padding: 16px 24px;
  font-weight: 600;
  font-size: 18px;
  line-height: 16px;
  width: fit-content;
  margin-top: 32px;
  margin-bottom: 80px;
  cursor: pointer;
  transition: 0.4s ease;
  &:focus {
    outline: none;
  }

  &:hover {
    color: #0f1624;
    background: #fff;
    border: 1px solid #fff;
  }

  &:active {
    background: #e0e4eb;
    border: 1px solid #304169;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  @media ${(props) => props.theme.breakpoints.md}{
    margin-top: 24px; 
    margin-bottom: 64px;
    padding: 16px 24px;
    width: fit-content;
    font-size: 20px;
    line-height: 20px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 16px;
    margin-bottom: 40px;
    padding: 8px 16px;
    width: 100%;
    font-size: 14px;
    line-height: 16px;
  }
`

export const ButtonBack = styled.div`
  width: ${({ alt }) => alt ? '150px' : '262px'};
  height: ${({ alt }) => alt ? '52px' : '64px'};
  border-radius: 50px;
  font-size: ${({ alt }) => alt ? '20px' : '24px'};
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${({ alt, form }) => (alt || form) ? '0' : '0 0 80px'};
  color: #fff;
  background: ${({ alt }) => alt ? 'linear-gradient(270deg, #ff622e 0%, #B133FF 100%)' : 'linear-gradient(270deg, #00DBD8 0%, #B133FF 100%)'};
  cursor: pointer;
  transition: 0.5s ease;
  position: relative;
  overflow: hidden;
  opacity: ${({ disabled }) => disabled ? '.5' : '1'};

  @media ${(props) => props.theme.breakpoints.md} {
    width: ${({ alt }) => alt ? '150px' : '184px'};
    height: ${({ alt }) => alt ? '52px' : '48px'};
    font-size: ${({ alt }) => alt ? '20px' : '16px'};
    margin-bottom: ${({ alt }) => alt ? '0' : '64px'};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    height: 32px;
    font-size: 14px;
    margin-bottom: ${({ alt }) => alt ? '0' : '32px'};
  }
`

export const ButtonFront = styled.button`
  border: none;
  border-radius: 50px;
  color: #fff;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ alt }) => alt ? 'linear-gradient(270deg, #F46737 0%, #945DD6 100%)' : 'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)'};
  opacity: ${({ disabled }) => disabled ? '.5' : '1'};
  transition: .4s ease;
  font-size: ${({ alt }) => alt ? '20px' : '24px'};
  font-weight: 600;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: ${({ disabled }) => disabled ? 'inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)' : 'none'};

  &:hover {
    opacity: 0;
  }
  &:focus {
    outline: none;
  }
  &:active {
    opacity: 1;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  &:disabled{
    background: linear-gradient(270deg, #00DBD8 0%, #B133FF 100%);
    opacity: 0.5;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: ${({ alt }) => alt ? '20px' : '16px'};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
  }
`

export const LinkContainer = styled.div`
  margin-left: ${({ large }) => large ? '24px' : '16px'};
  transition: 0.3s ease;
  justify-content: center;
  border-radius: 50px;
  padding: 8px;

  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    margin-left: ${({ large }) => large ? '16px' : '8px'};

  }
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-left: ${({ large }) => large ? '0' : '8px'};
  }
`

export const LinkIconImg = styled.div`
  display: flex;  
  height: ${({ large }) => large ? '32px' : '24px'};

  @media ${(props) => props.theme.breakpoints.md} {
    height: ${({ nav }) => nav ? '16px' : '24px'};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    height: ${({ large }) => large ? '32px' : '16px'};
  }
`
