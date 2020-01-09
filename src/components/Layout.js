import React from 'react';
import { Link } from 'gatsby';

import HeaderImage from './HeaderImage';
import IconPortfolio from './IconPortfolio';
import IconResume from './IconResume';
import IconContact from './IconContact';

import '../styles/main.css';

const Layout = ({ children, isIndex }) => (
  <div className="bg-white mb-5 md:mb-16">
    <header className="px-5 py-8 m-auto sm:p-10 lg:p-16 xl:20 xl:w-11/12">
      <h1
        className="inline-block w-full md:w-7/12 text-xl font-semibold text-gray-700 md:text-2xl md:font-bold lg:text-3xl"
        data-sal={isIndex ? 'slide-up' : ''}
        data-sal-duration="400"
        data-sal-delay="300"
        data-sal-easing="easeOutQuad"
      >
        Hi, I{`'`}m{' '}
        <strong className="text-pink-500 font-semibold md:font-fold">
          Victor Wang
        </strong>
        , a full-stack developer passionate about creating robust,{' '}
        <span style={{ whiteSpace: 'nowrap' }}>user-centered</span> web
        applications.
        <br />
        <span
          className="text-gray-500 font-bold tracking-wide italic md:font-extrabold"
          data-sal={isIndex ? 'fade' : ''}
          data-sal-duration="850"
          data-sal-delay="900"
          data-sal-easing="easeOutQuad"
        >
          Welcome to my portfolio.
        </span>
      </h1>
      <HeaderImage />
    </header>

    <nav className="nav__container px-2 mb-2 flex justify-start sm:px-10 md:mb-5 lg:mb-6 lg:px-24 xl:px-40">
      <Link to="" className="nav__tab" activeClassName="nav__tab_active">
        <IconPortfolio />
        <h2 className="inline align-middle text-gray-600 font-medium md:ml-1 md:text-xl">
          Projects
        </h2>
      </Link>

      <a
        href="static/resume.pdf"
        className="nav__tab"
        activeClassName="nav__tab_active"
      >
        <IconResume />
        <h2 className="inline align-middle text-gray-600 font-medium md:ml-1 md:text-xl">
          Resume
        </h2>
      </a>

      <Link
        to="contact/"
        className="nav__tab"
        activeClassName="nav__tab_active"
      >
        <IconContact />
        <h2 className="inline align-middle text-gray-600 font-medium md:ml-1 md:text-xl">
          Contact
        </h2>
      </Link>
    </nav>

    <section className="px-2 sm:px-10 lg:px-24 xl:px-40">{children}</section>
  </div>
);

export default Layout;
