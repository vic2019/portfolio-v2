import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

import ProjectCard from './ProjectCard';
import SEO from './SEO';

const ProjectList = () => (
  <StaticQuery
    query={graphql`
      query ProjectsQuery {
        allMarkdownRemark(sort: { order: DESC, fields: frontmatter___index }) {
          nodes {
            rawMarkdownBody
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
    render={({ allMarkdownRemark: { nodes } }) => (
      <>
        <SEO title="List of Projects" />
        {nodes.map((project, index) => (
          <ProjectCard
            frontmatter={project.frontmatter}
            rawMarkdownBody={project.rawMarkdownBody}
            isEven={index % 2 === 0}
            key={project.frontmatter.title}
          />
        ))}
      </>
    )}
  />
);

export default ProjectList;
