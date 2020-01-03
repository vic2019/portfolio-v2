import React from 'react';
import { Link } from 'gatsby';

import SEO from '../components/Seo';
import ProjectCard from '../components/ProjectCard';

import '../styles/main.css';

const Index = () => (
  <>
    <SEO title="Home" />
    <h1 className="text-blue-300 m-20">Index</h1>
    <ProjectCard />
  </>
);

export default Index;
