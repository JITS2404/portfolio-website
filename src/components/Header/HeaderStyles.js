import styled from 'styled-components';

export const NavWrapper = styled.header`
  position: sticky;
  top: 16px;
  z-index: 999;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0 16px;
  margin-bottom: 24px;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1120px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.95);
  box-shadow: 0 12px 30px -6px rgba(30, 41, 59, 0.08), 0 4px 8px -2px rgba(30, 41, 59, 0.03);
  border-radius: 9999px;
  padding: 6px 8px 6px 12px;
  transition: all 0.3s ease;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 6px 10px;
    border-radius: 24px;
  }
`;

export const Brand = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  text-decoration: none;
`;

export const BrandAvatar = styled.div`
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
  letter-spacing: -0.5px;
  box-shadow: 0 4px 10px rgba(15, 23, 42, 0.2);
`;

export const BrandText = styled.div`
  display: flex;
  flex-direction: column;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
`;

export const BrandName = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: #0F172A;
  line-height: 1.2;
`;

export const BrandRole = styled.span`
  font-size: 11px;
  font-weight: 500;
  color: #64748B;
  line-height: 1.2;
`;

export const NavList = styled.nav`
  display: flex;
  align-items: center;
  gap: 2px;
  background: rgba(241, 245, 249, 0.85);
  padding: 3px;
  border-radius: 9999px;

  @media ${(props) => props.theme.breakpoints.md} {
    display: none;
  }
`;

export const NavItem = styled.a`
  font-size: 13px;
  font-weight: ${(props) => (props.active ? '600' : '500')};
  color: ${(props) => (props.active ? '#0F172A' : '#64748B')};
  background: ${(props) => (props.active ? '#FFFFFF' : 'transparent')};
  padding: 6px 14px;
  border-radius: 9999px;
  box-shadow: ${(props) => (props.active ? '0 2px 6px rgba(15, 23, 42, 0.06)' : 'none')};
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    color: #0F172A;
    background: ${(props) => (props.active ? '#FFFFFF' : 'rgba(255, 255, 255, 0.6)')};
  }
`;

export const RightActions = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const SocialLink = styled.a`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #475569;
  background: rgba(241, 245, 249, 0.8);
  border: 1px solid rgba(226, 232, 240, 0.8);
  transition: all 0.2s ease;

  &:hover {
    color: #0F172A;
    background: #FFFFFF;
    transform: translateY(-1px);
    box-shadow: 0 4px 10px rgba(30, 41, 59, 0.08);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
`;

export const ActionButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #0F172A;
  color: #FFFFFF !important;
  font-size: 13px;
  font-weight: 600;
  padding: 8px 18px;
  border-radius: 9999px;
  border: none;
  cursor: pointer;
  transition: all 0.25s ease;
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.15);

  &:hover {
    background: #1E293B;
    transform: translateY(-1px);
    box-shadow: 0 6px 16px rgba(15, 23, 42, 0.2);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 6px 14px;
    font-size: 12px;
  }
`;

export const MobileNavButton = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: 1px solid rgba(226, 232, 240, 0.9);
  border-radius: 50%;
  background: rgba(241, 245, 249, 0.9);
  color: #0F172A;
  font-size: 18px;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;

  &:hover {
    background: #FFFFFF;
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid #6366F1;
    outline-offset: 2px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    display: inline-flex;
  }
`;

export const MobileNavList = styled.nav`
  display: none;

  @media ${(props) => props.theme.breakpoints.md} {
    display: ${(props) => (props.$isOpen ? 'grid' : 'none')};
    position: absolute;
    top: calc(100% + 8px);
    left: 0;
    right: 0;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 4px;
    padding: 10px;
    background: rgba(255, 255, 255, 0.96);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.95);
    border-radius: 20px;
    box-shadow: 0 12px 30px -6px rgba(30, 41, 59, 0.14);

    a {
      display: block;
      padding: 10px 12px;
      border-radius: 12px;
    }
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
    max-height: min(70vh, 440px);
    overflow-y: auto;
  }
`;