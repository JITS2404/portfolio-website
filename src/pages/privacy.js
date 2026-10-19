import React from 'react';
import Head from 'next/head';
import { Layout } from '../layout/Layout';
import { Section, SectionBadge, SectionTitle } from '../styles/GlobalComponents';

const Privacy = () => {
  return (
    <Layout>
      <Head>
        <title>Privacy Policy | Jerom Issac T.S.</title>
      </Head>
      <Section style={{ padding: '60px 0', minHeight: '80vh' }}>
        <div style={{
          maxWidth: '840px',
          margin: '0 auto',
          background: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.95)',
          borderRadius: '28px',
          padding: '44px 36px',
          boxShadow: '0 15px 35px -5px rgba(30, 41, 59, 0.05)'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <SectionBadge>LEGAL</SectionBadge>
            <SectionTitle style={{ textAlign: 'center' }}>
              Privacy Policy
            </SectionTitle>
          </div>
          
          <div style={{ color: '#334155', lineHeight: '1.75', fontSize: '15px' }}>
            <h3 style={{ color: '#0F172A', marginTop: '24px', marginBottom: '8px', fontSize: '18px', fontWeight: '700' }}>Information We Collect</h3>
            <p>We collect information you provide directly to us, such as when you submit a project inquiry, subscribe to updates, or contact us for collaboration.</p>
            
            <h3 style={{ color: '#0F172A', marginTop: '24px', marginBottom: '8px', fontSize: '18px', fontWeight: '700' }}>How We Use Your Information</h3>
            <p>We use the information we collect to:</p>
            <ul style={{ paddingLeft: '24px', marginTop: '6px' }}>
              <li>Respond to inquiries, messages, and project discussions</li>
              <li>Provide, maintain, and improve our services and applications</li>
              <li>Send technical updates and notifications</li>
            </ul>
            
            <h3 style={{ color: '#0F172A', marginTop: '24px', marginBottom: '8px', fontSize: '18px', fontWeight: '700' }}>Information Sharing</h3>
            <p>We do not sell, trade, or transfer your personal information to third parties without your consent.</p>
            
            <h3 style={{ color: '#0F172A', marginTop: '24px', marginBottom: '8px', fontSize: '18px', fontWeight: '700' }}>Data Security</h3>
            <p>We implement appropriate industry-standard security measures to protect your personal information against unauthorized access, disclosure, or alteration.</p>
            
            <h3 style={{ color: '#0F172A', marginTop: '24px', marginBottom: '8px', fontSize: '18px', fontWeight: '700' }}>Contact Us</h3>
            <p>If you have any questions about this Privacy Policy, please contact: <a href="mailto:jeromissac2004@gmail.com" style={{ color: '#6366F1', fontWeight: '600' }}>jeromissac2004@gmail.com</a></p>
            
            <div style={{ marginTop: '40px', textAlign: 'center', borderTop: '1px solid #E2E8F0', paddingTop: '20px' }}>
              <p style={{ fontSize: '13px', color: '#94A3B8' }}>
                Last updated: 2026
              </p>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Privacy;