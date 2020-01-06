import React from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';

const ProjectCard = ({ body, index, title, description, imageUrl, isEven }) => (
  <div className="mb-3 border border-gray-400 xs:max-w-sm md:border-0 md:max-w-3xl md:m-auto md:flex md:flex-row md:justify-between md:mb-1">
    <img
      className="h-48 w-full object-cover xs:h-64 md:w-1/2 md:h-auto"
      style={{ order: isEven ? 1 : 2 }}
      src="https://optinmonster.com/wp-content/uploads/2019/05/30-tools-to-create-effective-opt-in-landing-pages.png"
    />
    <div
      className="project-card__text project-card__text_sm p-4 md:w-1/2 md:min-h-64"
      style={{ order: isEven ? 2 : 1 }}
    >
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
