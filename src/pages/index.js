import React from 'react';

import SEO from '../components/SEO';
import Layout from '../components/Layout';
import ProjectList from '../components/ProjectList';

const Index = () => (
  <Layout isIndex={true}>
    <SEO title="Projects" />
    <ProjectList />
  </Layout>
);

export default Index;
