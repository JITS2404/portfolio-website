import Link from 'next/link';
import React, { useState } from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FiArrowUpRight, FiMenu, FiX } from 'react-icons/fi';
import {
  NavWrapper,
  Container,
  Brand,
  BrandAvatar,
  BrandText,
  BrandName,
  BrandRole,
  NavList,
  NavItem,
  RightActions,
  SocialLink,
  ActionButton,
  MobileNavButton,
  MobileNavList,
} from './HeaderStyles';

const navItems = [
  { label: 'Home', href: '#home', activeTab: 'Home' },
  { label: 'About', href: '#about', activeTab: 'About' },
  { label: 'Experience', href: '#experience', activeTab: 'Experience' },
  { label: 'Certificates', href: '#certifications', activeTab: 'Certificates' },
  { label: 'Projects', href: '#projects', activeTab: 'Projects' },
  { label: 'Technologies I Use', href: '#tech', activeTab: 'Technologies' },
  { label: 'Patents', href: '#patents', activeTab: 'Patents' },
];

const Header = () => {
  const [activeTab, setActiveTab] = useState('Home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <NavWrapper>
      <Container>
        <Link href="#home" passHref>
          <Brand>
            <BrandAvatar>JI</BrandAvatar>
            <BrandText>
              <BrandName>Jerom Issac</BrandName>
              <BrandRole>Full-Stack & AI Engineer</BrandRole>
            </BrandText>
          </Brand>
        </Link>

        <NavList>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} passHref>
              <NavItem
                active={activeTab === item.activeTab}
                onClick={() => setActiveTab(item.activeTab)}
              >
                {item.label}
              </NavItem>
            </Link>
          ))}
        </NavList>

        <RightActions>
          <SocialLink 
            href="https://github.com/JITS2404" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <AiFillGithub size="1.8rem" />
          </SocialLink>
          <SocialLink 
            href="https://www.linkedin.com/in/jerom-issac-t-s" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <AiFillLinkedin size="1.8rem" />
          </SocialLink>
          <Link href="#contact" passHref>
            <ActionButton>
              Let's Talk <FiArrowUpRight size="1.5rem" />
            </ActionButton>
          </Link>
          <MobileNavButton
            type="button"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </MobileNavButton>
        </RightActions>

        <MobileNavList id="mobile-navigation" $isOpen={isMenuOpen}>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} passHref>
              <NavItem
                active={activeTab === item.activeTab}
                onClick={() => {
                  setActiveTab(item.activeTab);
                  setIsMenuOpen(false);
                }}
              >
                {item.label}
              </NavItem>
            </Link>
          ))}
        </MobileNavList>
        </Container>
    </NavWrapper>
  );
};

export default Header;
