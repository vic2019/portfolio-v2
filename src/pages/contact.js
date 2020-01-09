import React, { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';

import SEO from '../components/SEO';
import Layout from '../components/Layout';

import sendEmail from '../services/email';

const Contact = () => {
  const [initialRender, setInitialRender] = useState(true);
  const [input, setInput] = useState({ name: '', email: '', msg: '' });
  const [valid, setValid] = useState({ name: true, email: true, msg: true });

  const handleChange = field => e => {
    setInput({ ...input, [field]: e.target.value });
  };

  const setValidByField = field => isValid => {
    setValid(state => ({ ...state, [field]: isValid }));
  };

  const validate = () => {
    let isValid = true;

    if (input.name.trim().length === 0) {
      setValidByField('name')(false);
      isValid = false;
    } else {
      setValidByField('name')(true);
    }

    const emailMatch = input.email.trim().match(/\w+@\w+\.\w+/);
    if (!emailMatch || emailMatch[0].length !== input.email.trim().length) {
      setValidByField('email')(false);
      isValid = false;
    } else {
      setValidByField('email')(true);
    }

    if (input.msg.trim().length === 0) {
      setValidByField('msg')(false);
      isValid = false;
    } else {
      setValidByField('msg')(true);
    }

    return isValid;
  };

  const validateDebounced = debounce(validate, 360);

  const handleSubmit = e => {
    e.preventDefault();
    if (!validate()) return;

    const msgObj = {
      name: input.name.trim(),
      email: input.email.trim(),
      msg: input.msg.trim(),
    };

    sendEmail(msgObj)
      .then(res => {
        if (res.status == 200) {
          alert('Message sent!'); // To-do: implement custom notification bar
          setInput({ name: '', email: '', msg: '' });
        } else {
          alert('Message was not sent. Please try again later.');
        }
      })
      .catch(err => {
        if (process.env.NODE_ENV == 'production') {
          alert('Message was not sent. Please try again later.');
        } else {
          alert(err);
        }
      });
  };

  useEffect(() => {
    if (initialRender) {
      setInitialRender(false);
      return;
    }

    validateDebounced();
  }, [input]);

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
          <input
            type="text"
            className="contact__input"
            placeholder="Name"
            value={input.name}
            onChange={handleChange('name')}
            style={valid.name ? {} : { border: '1px solid red' }}
          />
          <input
            type="text"
            className="contact__input"
            placeholder="Email"
            value={input.email}
            onChange={handleChange('email')}
            style={valid.email ? {} : { border: '1px solid red' }}
          />
        </div>

        <textarea
          rows="6"
          className="contact__input"
          placeholder="Message"
          value={input.msg}
          onChange={handleChange('msg')}
          style={valid.msg ? {} : { border: '1px solid red' }}
        />

        <button
          className="contact__input tracking-wide bg-btn-blue text-white uppercase border-0 sm:w-1/2 hover:bg-btn-blue-hover focus:bg-btn-blue-hover"
          onClick={handleSubmit}
        >
          SEND MESSAGE
        </button>
      </form>
    </Layout>
  );
};

export default Contact;
