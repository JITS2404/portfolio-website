import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  width: 100%;
  padding: 40px 0 24px;
  margin-top: 40px;
  border-top: 1px solid rgba(226, 232, 240, 0.8);
`;

export const FooterTop = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
  gap: 36px;
  margin-bottom: 40px;

  @media ${(props) => props.theme.breakpoints.lg} {
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

export const BrandColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const BrandHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const AvatarBadge = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%);
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 14px;
`;

export const BrandTitle = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: #0F172A;
`;

export const Slogan = styled.p`
  font-size: 13.5px;
  line-height: 1.6;
  color: #64748B;
  max-width: 280px;
`;

export const SocialRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 4px;
`;

export const SocialIconBtn = styled.a`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #475569;
  background: rgba(255, 255, 255, 0.85);
  border: 1px solid rgba(203, 213, 225, 0.8);
  transition: all 0.2s ease;

  &:hover {
    background: #0F172A;
    color: #FFFFFF !important;
    transform: translateY(-2px);
  }
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ColumnTitle = styled.h4`
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  color: #0F172A;
  margin-bottom: 4px;
`;

export const ColumnLink = styled.a`
  font-size: 13.5px;
  color: #64748B;
  transition: color 0.2s ease;

  &:hover {
    color: #6366F1;
  }
`;

export const AddressText = styled.p`
  font-size: 13px;
  line-height: 1.6;
  color: #64748B;
`;

export const NewsletterBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const NewsletterForm = styled.form`
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(203, 213, 225, 0.8);
  border-radius: 9999px;
  padding: 4px 4px 4px 14px;
  transition: all 0.2s ease;

  &:focus-within {
    border-color: #6366F1;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  }
`;

export const NewsletterInput = styled.input`
  border: none;
  background: transparent;
  outline: none;
  font-size: 13px;
  color: #0F172A;
  width: 100%;

  &::placeholder {
    color: #94A3B8;
  }
`;

export const NewsletterBtn = styled.button`
  background: #0F172A;
  color: #FFFFFF;
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
  transition: background 0.2s ease;

  &:hover {
    background: #6366F1;
  }
`;

export const FooterBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 24px;
  border-top: 1px solid rgba(226, 232, 240, 0.8);
  flex-wrap: wrap;
  gap: 16px;

  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
    text-align: center;
  }
`;

export const Copyright = styled.p`
  font-size: 13px;
  color: #64748B;
`;

export const LegalLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const LegalLink = styled.a`
  font-size: 13px;
  color: #64748B;
  transition: color 0.2s ease;

  &:hover {
    color: #0F172A;
  }
`;
