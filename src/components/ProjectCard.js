import React from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';

const ProjectCard = ({ body, index, title, description, imageUrl, isEven }) => (
  <div className="mb-3 border border-gray-400">
    <img
      src="https://optinmonster.com/wp-content/uploads/2019/05/30-tools-to-create-effective-opt-in-landing-pages.png"
      className="h-48 w-full object-cover"
    />
    <div className="text-sm text-gray-600 p-4">
      <ReactMarkdown source={body} />
    </div>
  </div>
);

ProjectCard.propTypes = {
  body: PropTypes.string,
  index: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  isEven: PropTypes.bool.isRequired,
};

ProjectCard.defaultProps = {
  body: '',
  title: '',
  description: '',
  imageUrl: '',
};

export default ProjectCard;
