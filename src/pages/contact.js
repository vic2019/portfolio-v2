import React from 'react';

import SEO from '../components/SEO';
import Layout from '../components/Layout';

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <form
        className="w-full md:max-w-2xl"
        data-sal="slide-up"
        data-sal-duration="400"
        data-sal-easing="easeOutQuad"
        data-sal-delay="100"
      >
        <div className="flex flex-wrap justify-between">
          <input type="text" className="contact__input" placeholder="Name" />
          <input type="text" className="contact__input" placeholder="Email" />
        </div>

        <textarea rows="6" className="contact__input" placeholder="Message" />

        <button className="contact__input tracking-wide bg-teal-400 text-white uppercase border-0 sm:w-1/2 hover:bg-teal-600">
          SEND MESSAGE
        </button>
      </form>
    </Layout>
  );
};

export default Contact;
