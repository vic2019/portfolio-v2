import React from 'react';
// import { Link } from 'gatsby';

import ProjectList from '../components/ProjectList';
import SEO from '../components/SEO';

import '../styles/main.css';

const Index = () => (
  <>
    <SEO title="Home" />
    <ProjectList />
  </>
);

export default Index;
