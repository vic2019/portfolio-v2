import React from 'react';
// import { Link } from 'gatsby';

import ProjectList from '../components/ProjectList';
import SEO from '../components/SEO';

import '../styles/main.css';

const Index = () => (
  <div className="bg-white">
    <SEO title="Home" />
    <header className="p-5">
      <h1 className="text-lg font-semibold text-gray-700">
        Hi, I&apos;m{' '}
        <strong className="text-pink-500 font-semibold">Victor Wang</strong>, a
        full-stack developer passionate about creating robust, user-centered web
        applications.
        <br />
        <span className="text-gray-500 font-bold tracking-wide italic">
          Welcome to my portfolio.
        </span>
      </h1>
    </header>

    <section className="p-3">
      <div className="mb-5">
        {/* Add the portfolio icon here */}
        <h2 className="inline-block ml-1 pr-6 py-0 font-medium text-gray-600 border-b border-gray-400">
          Projects
        </h2>
      </div>
      <ProjectList />
    </section>
  </div>
);

export default Index;
