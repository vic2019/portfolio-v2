import React from 'react';
// import { Link } from 'gatsby';

import SEO from '../components/SEO';
import ProjectList from '../components/ProjectList';

import '../styles/main.css';

const Index = () => (
  <>
    <SEO title="Home" />
    <ProjectList />
  </>
);

export default Index;
