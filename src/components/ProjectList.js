import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';

import ProjectCard from '../components/ProjectCard';
import SEO from '../components/SEO';

const ProjectList = () => (
  <StaticQuery
    query={graphql`
      query {
        markdowns: allMarkdownRemark(
          sort: { fields: frontmatter___index, order: DESC }
        ) {
          projects: nodes {
            body: rawMarkdownBody
            frontmatter {
              description
              imageUrl
              index
              title
            }
          }
        }
      }
    `}
    render={({ markdowns: { projects } }) => (
      <div className="border-l-1 border-r-1 border-gray-400">
        <SEO title="List of Projects" />
        {projects.map((project, index) => (
          <ProjectCard
            body={project.body}
            {...project.frontmatter}
            isEven={index % 2 === 0}
            key={project.frontmatter.index}
          />
        ))}
      </div>
    )}
  />
);

ProjectList.propTypes = {
  markdowns: PropTypes.shape({
    projects: PropTypes.arrayOf(
      PropTypes.shape({
        body: PropTypes.string,
        frontmatter: PropTypes.shape({
          description: PropTypes.string,
          imageUrl: PropTypes.string,
          index: PropTypes.string.isRequired,
          title: PropTypes.string,
        }),
      })
    ).isRequired,
  }).isRequired,
};

export default ProjectList;
