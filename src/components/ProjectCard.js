import React from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';

const ProjectCard = ({ body, index, title, description, imageUrl, isEven }) => (
  <>
    <ReactMarkdown source={body} />
  </>
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
