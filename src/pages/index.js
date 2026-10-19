import React from 'react';
import Head from 'next/head';
import Hero from '../components/Hero/Hero';
import AboutMe from '../components/AboutMe/AboutMe';
import Services from '../components/Services/Services';
import TechStack from '../components/TechStack/TechStack';
import Projects from '../components/Projects/Projects';
import Patents from '../components/Patents/Patents';
import Certifications from '../components/Certifications/Certifications';
import Process from '../components/Process/Process';
import Experience from '../components/Experience/Experience';
import Acomplishments from '../components/Acomplishments/Acomplishments';
import Contact from '../components/Contact/Contact';
import { Layout } from '../layout/Layout';

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Jerom Issac T.S. | Full-Stack Developer & AI Engineer</title>
        <meta
          name="description"
          content="Jerom Issac - Full-Stack Developer & AI Engineer building data-driven systems, AI applications, and enterprise analytics platforms."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Hero />
      <AboutMe />
      <Experience />
      <Certifications />
      <Projects />
      <TechStack />
      <Patents />
      <Services />
      <Process />
      <Acomplishments />
      <Contact />
    </Layout>
  );
};

export default Home;
