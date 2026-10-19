import React from 'react';
import Head from 'next/head';
import { Layout } from '../layout/Layout';
import { Section, SectionBadge, SectionTitle } from '../styles/GlobalComponents';

const Terms = () => {
  return (
    <Layout>
      <Head>
        <title>Terms & Conditions | Jerom Issac T.S.</title>
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
              User Terms & Conditions
            </SectionTitle>
          </div>
          
          <div style={{ color: '#334155', lineHeight: '1.75', fontSize: '15px' }}>
            <h3 style={{ color: '#0F172A', marginTop: '24px', marginBottom: '8px', fontSize: '18px', fontWeight: '700' }}>1. Acceptance of Terms</h3>
            <p>By accessing and viewing this portfolio website, you accept and agree to be bound by the terms and provisions of this agreement.</p>
            
            <h3 style={{ color: '#0F172A', marginTop: '24px', marginBottom: '8px', fontSize: '18px', fontWeight: '700' }}>2. Intellectual Property & Use</h3>
            <p>The code repositories, designs, articles, and project demos presented on this website are authored by Jerom Issac T.S., unless explicitly cited as third-party open-source components.</p>
            
            <h3 style={{ color: '#0F172A', marginTop: '24px', marginBottom: '8px', fontSize: '18px', fontWeight: '700' }}>3. Disclaimer</h3>
            <p>The materials on this website are provided on an 'as is' basis without warranties of any kind.</p>
            
            <h3 style={{ color: '#0F172A', marginTop: '24px', marginBottom: '8px', fontSize: '18px', fontWeight: '700' }}>4. Governing Law</h3>
            <p>These terms and conditions are governed by and construed in accordance with the applicable laws of India.</p>
            
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

export default Terms;