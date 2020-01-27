import React from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';

const ProjectCard = ({
  body,
  index,
  title,
  description,
  imgFilename,
  isEven,
}) => (
  <div className="mb-3 border border-gray-400 md:border-0 md:mb-1 md:flex md:justify-between">
    <img
      className="h-48 w-full object-cover sm:h-64 md:w-1/2 md:h-auto"
      style={{ order: isEven ? 1 : 2 }}
      src={`../../${imgFilename}`} // Do not nest files in static folder
      title={`Image for the project "${title}"`}
      alt={`Image for the project "${title}"`}
    />
    <div
      className="project-card__text md:w-1/2 md:min-h-64"
      style={{ order: isEven ? 2 : 1 }}
    >
      <div
        data-sal={index == 0 ? '' : 'slide-up'}
        data-sal-duration="400"
        data-sal-easing="easeOutQuad"
      >
        <ReactMarkdown source={body} />
      </div>
    </div>
  </div>
);

ProjectCard.propTypes = {
  body: PropTypes.string,
  index: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  imgFilename: PropTypes.string,
  isEven: PropTypes.bool.isRequired,
};

ProjectCard.defaultProps = {
  body: '',
  title: '',
  description: '',
  imgFilename: '',
};

export default ProjectCard;
