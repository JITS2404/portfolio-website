import React, { useState } from 'react';
import Link from 'next/link';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import {
  FooterWrapper,
  FooterTop,
  BrandColumn,
  BrandHeader,
  AvatarBadge,
  BrandTitle,
  Slogan,
  SocialRow,
  SocialIconBtn,
  FooterColumn,
  ColumnTitle,
  ColumnLink,
  AddressText,
  NewsletterBox,
  NewsletterForm,
  NewsletterInput,
  NewsletterBtn,
  FooterBottom,
  Copyright,
  LegalLinks,
  LegalLink
} from './FooterStyles';

const Footer = () => {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 4000);
    }
  };

  return (
    <FooterWrapper>
      <FooterTop>
        <BrandColumn>
          <BrandHeader>
            <AvatarBadge>JI</AvatarBadge>
            <BrandTitle>Jerom Issac.T.S.</BrandTitle>
          </BrandHeader>
          <Slogan>
            From data to decisions — engineered with intent.
          </Slogan>
          <SocialRow>
            <SocialIconBtn 
              href="https://github.com/JITS2404" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <AiFillGithub size="1.6rem" />
            </SocialIconBtn>
            <SocialIconBtn 
              href="https://www.linkedin.com/in/jerom-issac-t-s" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <AiFillLinkedin size="1.6rem" />
            </SocialIconBtn>
          </SocialRow>
        </BrandColumn>

        <FooterColumn>
          <ColumnTitle>Navigation</ColumnTitle>
          <ColumnLink href="#home">Home</ColumnLink>
          <ColumnLink href="#about">About</ColumnLink>
          <ColumnLink href="#services">Services</ColumnLink>
          <ColumnLink href="#tech">Technologies</ColumnLink>
          <ColumnLink href="#projects">Projects</ColumnLink>
          <ColumnLink href="#patents">Patents</ColumnLink>
          <ColumnLink href="#certifications">Certifications</ColumnLink>
          <ColumnLink href="#experience">Experience</ColumnLink>
          <ColumnLink href="#contact">Contact</ColumnLink>
        </FooterColumn>

        <FooterColumn>
          <ColumnTitle>Contact</ColumnTitle>
          <ColumnLink href="mailto:jeromissac2004@gmail.com">
            jeromissac2004@gmail.com
          </ColumnLink>
          <AddressText style={{ marginTop: '4px' }}>
            Coimbatore, Tamil Nadu, India
          </AddressText>
        </FooterColumn>

        <FooterColumn>
          <ColumnTitle>Stay Updated</ColumnTitle>
          <NewsletterBox>
            <p style={{ fontSize: '13px', color: '#64748B', lineHeight: '1.5' }}>
              Subscribe to receive updates on new projects and technical articles.
            </p>
            <NewsletterForm onSubmit={handleSubscribe}>
              <NewsletterInput
                type="email"
                placeholder={subscribed ? "Subscribed!" : "Email address"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={subscribed}
              />
              <NewsletterBtn type="submit" aria-label="Subscribe">
                {subscribed ? <FiCheck /> : <FiArrowRight />}
              </NewsletterBtn>
            </NewsletterForm>
          </NewsletterBox>
        </FooterColumn>
      </FooterTop>

      <FooterBottom>
        <Copyright>
          Copyright © 2026 Jerom Issac.T.S. All Rights Reserved.
        </Copyright>
        <LegalLinks>
          <Link href="/terms" passHref>
            <LegalLink>User Terms & Conditions</LegalLink>
          </Link>
          <span style={{ color: '#CBD5E1' }}>•</span>
          <Link href="/privacy" passHref>
            <LegalLink>Privacy Policy</LegalLink>
          </Link>
        </LegalLinks>
      </FooterBottom>
    </FooterWrapper>
  );
};

export default Footer;
