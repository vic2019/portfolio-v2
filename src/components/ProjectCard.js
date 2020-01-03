import React from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';

const ProjectCard = ({ rawMarkdownBody, frontmatter, isEven }) => (
  <>
    <img src={frontmatter.imageUrl} alt={`Image for ${frontmatter.title}`} />
    <ReactMarkdown source={rawMarkdownBody} />
    <p className="text-green-500 text-2xl">{isEven ? 'left' : 'right'}</p>
  </>
);

ProjectCard.propTypes = {
  rawMarkdownBody: PropTypes.string,
  frontmatter: PropTypes.shape({
    title: PropTypes.string.isRequired,
    index: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
  }),
  isEven: PropTypes.bool.isRequired,
};

ProjectCard.defaultProps = {
  rawMarkdownBody: '',
  frontmatter: {
    imageUrl: '',
  },
};

export default ProjectCard;
