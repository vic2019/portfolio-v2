import React from 'react';
// import { Link } from 'gatsby';

import ProjectList from '../components/ProjectList';
import SEO from '../components/SEO';

import '../styles/main.css';

const Index = () => (
  <div className="bg-white">
    <SEO title="Home" />
    <header className="p-5 xs:p-8 sm:p-16 md:p-24 md:w-5/6">
      <h1 className="text-lg font-semibold text-gray-700 sm:text-xl md:text-2xl md:leading-relaxed">
        Hi, I&apos;m{' '}
        <strong className="text-pink-500 font-semibold">Victor Wang</strong>, a
        full-stack developer passionate about creating robust, user-centered web
        applications.
        <br />
        <span className="text-gray-500 font-bold tracking-wide italic md:font-extrabold">
          Welcome to my portfolio.
        </span>
      </h1>
    </header>

    <section>
      <div className="inline-block p-3 xs:px-8 sm:px-16 sm:mb-6 md:px-24 md:mb-10">
        <svg
          className="inline h-4 w-auto fill-current text-gray-700 sm:h-5 md:h6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
        </svg>
        <h2 className="inline align-middle ml-1 font-medium text-gray-600 sm:text-xl sm:ml-2 md:text-2xl">
          Projects
        </h2>
      </div>
      <div className="px-3 flex justify-center">
        <ProjectList />
      </div>
    </section>
  </div>
);

export default Index;
