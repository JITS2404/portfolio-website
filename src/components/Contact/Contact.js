import React, { useState } from 'react';
import styled from 'styled-components';
import { FiMail, FiMapPin, FiSend, FiCheckCircle } from 'react-icons/fi';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { Section, SectionBadge, SectionTitle } from '../../styles/GlobalComponents';

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  gap: 40px;
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.95);
  box-shadow: 0 15px 35px -5px rgba(30, 41, 59, 0.05), 0 5px 15px -3px rgba(30, 41, 59, 0.03);
  border-radius: 32px;
  padding: 44px;
  margin: 20px 0 40px;
  position: relative;
  overflow: hidden;

  @media ${(props) => props.theme.breakpoints.lg} {
    grid-template-columns: 1fr;
    padding: 32px 24px;
    gap: 32px;
  }
`;

const ContactLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ContactIntro = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactTitle = styled.h2`
  font-size: 34px;
  font-weight: 800;
  line-height: 1.25;
  color: #0F172A;
  margin-bottom: 20px;
  letter-spacing: -0.02em;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 26px;
  }
`;

const DetailsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin: 24px 0;
`;

const DetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const DetailIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: rgba(99, 102, 241, 0.08);
  color: #6366F1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  flex-shrink: 0;
`;

const DetailContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const DetailLabel = styled.span`
  font-size: 11px;
  font-weight: 600;
  color: #94A3B8;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const DetailValue = styled.a`
  font-size: 14.5px;
  font-weight: 600;
  color: #0F172A;
  transition: color 0.2s ease;

  &:hover {
    color: #6366F1;
  }
`;

const SocialRow = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 20px;
`;

const SocialPill = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 600;
  color: #334155;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(203, 213, 225, 0.8);
  padding: 8px 16px;
  border-radius: 9999px;
  transition: all 0.2s ease;

  &:hover {
    background: #0F172A;
    color: #FFFFFF !important;
    border-color: #0F172A;
    transform: translateY(-2px);
  }
`;

const ContactRight = styled.div`
  display: flex;
  flex-direction: column;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 14px 18px;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(203, 213, 225, 0.8);
  border-radius: 14px;
  font-size: 14px;
  color: #0F172A;
  outline: none;
  transition: all 0.2s ease;

  &:focus {
    border-color: #6366F1;
    background: #FFFFFF;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.12);
  }

  &::placeholder {
    color: #94A3B8;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 14px 18px;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(203, 213, 225, 0.8);
  border-radius: 14px;
  font-size: 14px;
  color: #0F172A;
  outline: none;
  resize: vertical;
  min-height: 120px;
  transition: all 0.2s ease;

  &:focus {
    border-color: #6366F1;
    background: #FFFFFF;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.12);
  }

  &::placeholder {
    color: #94A3B8;
  }
`;

const SubmitButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: #0F172A;
  color: #FFFFFF;
  font-size: 14px;
  font-weight: 600;
  padding: 14px 28px;
  border-radius: 9999px;
  border: none;
  cursor: pointer;
  transition: all 0.25s ease;
  box-shadow: 0 6px 18px rgba(15, 23, 42, 0.15);

  &:hover {
    background: #1E293B;
    transform: translateY(-2px);
    box-shadow: 0 10px 22px rgba(15, 23, 42, 0.22);
  }
`;

const SuccessNotice = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 600;
  color: #10B981;
  background: rgba(16, 185, 129, 0.1);
  padding: 12px 16px;
  border-radius: 12px;
`;

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', project: '', message: '' });
    }, 5000);
  };

  return (
    <Section id="contact">
      <SectionBadge>LET'S CONNECT</SectionBadge>
      <ContactContainer>
        <ContactLeft>
          <ContactIntro>
            <ContactTitle>
              Have a project in mind? <br />
              Let's create something amazing together.
            </ContactTitle>
            <p style={{ fontSize: '14.5px', color: '#475569', lineHeight: '1.6' }}>
              Whether you are looking to build an AI-powered system, optimize your data infrastructure, or build a scalable modern web application, I would love to hear from you.
            </p>
          </ContactIntro>

          <DetailsList>
            <DetailItem>
              <DetailIcon><FiMail /></DetailIcon>
              <DetailContent>
                <DetailLabel>Email</DetailLabel>
                <DetailValue href="mailto:jeromissac2004@gmail.com">
                  jeromissac2004@gmail.com
                </DetailValue>
              </DetailContent>
            </DetailItem>

    

            <DetailItem>
              <DetailIcon><FiMapPin /></DetailIcon>
              <DetailContent>
                <DetailLabel>Location</DetailLabel>
                <DetailValue as="span">
                  Coimbatore, Tamil Nadu, India 
                </DetailValue>
              </DetailContent>
            </DetailItem>
          </DetailsList>

          <SocialRow>
            <SocialPill 
              href="https://github.com/JITS2404" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <AiFillGithub size="1.6rem" /> GitHub
            </SocialPill>
            <SocialPill 
              href="https://www.linkedin.com/in/jerom-issac-t-s" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <AiFillLinkedin size="1.6rem" /> LinkedIn
            </SocialPill>
          </SocialRow>
        </ContactLeft>

        <ContactRight>
          {submitted ? (
            <SuccessNotice>
              <FiCheckCircle size="1.6rem" /> Thank you! Your message has been received. I'll get back to you shortly.
            </SuccessNotice>
          ) : (
            <Form onSubmit={handleSubmit}>
              <FormRow>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </FormRow>

              <Input
                type="text"
                name="project"
                placeholder="Project Subject / Scope"
                value={formData.project}
                onChange={handleChange}
              />

              <Textarea
                name="message"
                placeholder="Your Message..."
                required
                value={formData.message}
                onChange={handleChange}
              />

              <SubmitButton type="submit">
                Send Message <FiSend size="1.4rem" />
              </SubmitButton>
            </Form>
          )}
        </ContactRight>
      </ContactContainer>
    </Section>
  );
};

export default Contact;

