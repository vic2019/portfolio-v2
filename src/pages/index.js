import React from 'react';
// import { Link } from 'gatsby';

import ProjectList from '../components/ProjectList';
import SEO from '../components/SEO';

import '../styles/main.css';

const Index = () => (
  <div className="bg-white">
    <SEO title="Home" />
    <header className="p-5 sm:p-10 lg:p-24 xl:p-40 xl:w-11/12">
      <h1 className="text-lg font-semibold text-gray-700 md:text-2xl lg:text-3xl">
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

    <section className="px-2 sm:px-10 lg:px-24 xl:px-40">
      <div className="mb-2 md:mb-5">
        <svg
          className="inline h-4 w-auto fill-current text-gray-700 md:h-5 lg:h-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
        </svg>
        <h2 className="inline align-middle text-gray-600 font-medium ml-1 md:ml-2 md:text-xl lg:text-2xl">
          Projects
        </h2>
      </div>
      <div className="">
        <ProjectList />
      </div>
    </section>
  </div>
);

export default Index;
