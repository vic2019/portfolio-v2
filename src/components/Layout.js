import React from 'react';
import { Link } from 'gatsby';

import '../styles/main.css';

const Layout = ({ children, isIndex }) => (
  <div className="bg-white mb-5 md:mb-16">
    <header
      className="px-5 py-8 sm:p-10 lg:p-24 xl:py-36 xl:px-40 xl:w-11/12"
      data-sal={isIndex ? 'slide-up' : ''}
      data-sal-duration="400"
      data-sal-delay="300"
      data-sal-easing="easeOutQuad"
    >
      <h1
        className="text-xl font-semibold text-gray-700 md:text-2xl md:font-bold lg:text-3xl"
        data-sal={isIndex ? 'slide-up' : ''}
        data-sal-duration="400"
        data-sal-delay="300"
        data-sal-easing="easeOutQuad"
      >
        Hi, I&apos;m{' '}
        <strong className="text-pink-500 font-semibold md:font-fold">
          Victor Wang
        </strong>
        , a full-stack developer passionate about creating robust, user-centered
        web applications.
        <br />
        <span
          className="text-gray-500 font-bold tracking-wide italic md:font-extrabold"
          data-sal={isIndex ? 'slide-up' : ''}
          data-sal-duration="900"
          data-sal-delay="950"
          data-sal-easing="easeOutQuad"
        >
          Welcome to my portfolio.
        </span>
      </h1>
    </header>

    <nav className="nav__container px-2 mb-2 flex justify-start sm:px-10 md:mb-5 lg:mb-6 lg:px-24 xl:px-40">
      <Link to="" className="nav__tab" activeClassName="nav__tab_active">
        <svg
          className="nav__icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
        </svg>
        <h2 className="inline align-middle text-gray-600 font-medium ml-1 md:ml-2 md:text-xl">
          Projects
        </h2>
      </Link>

      <Link to="resume" className="nav__tab" activeClassName="nav__tab_active">
        <svg
          className="nav__icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M0 2C0 .9.9 0 2 0h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm7 4v2a3 3 0 1 0 6 0V6a3 3 0 1 0-6 0zm11 9.14A15.93 15.93 0 0 0 10 13c-2.91 0-5.65.78-8 2.14V18h16v-2.86z" />
        </svg>
        <h2 className="inline align-middle text-gray-600 font-medium ml-1 md:ml-2 md:text-xl">
          Resume
        </h2>
      </Link>

      <Link to="contact" className="nav__tab" activeClassName="nav__tab_active">
        <svg
          className="nav__icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M17 11v3l-3-3H8a2 2 0 0 1-2-2V2c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-1zm-3 2v2a2 2 0 0 1-2 2H6l-3 3v-3H2a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h2v3a4 4 0 0 0 4 4h6z" />
        </svg>
        <h2 className="inline align-middle text-gray-600 font-medium ml-1 md:ml-2 md:text-xl">
          Contact
        </h2>
      </Link>
    </nav>

    <section className="px-2 sm:px-10 lg:px-24 xl:px-40">{children}</section>
  </div>
);

export default Layout;
