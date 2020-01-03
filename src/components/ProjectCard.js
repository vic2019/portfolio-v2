import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import ReactMarkdown from 'react-markdown';

import SEO from '../components/Seo';

const ProjectCard = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark {
          nodes {
            rawMarkdownBody
          }
        }
      }
    `}
    render={data => (
      <>
        <SEO title="Card" />
        <ReactMarkdown
          source={data.allMarkdownRemark.nodes[1].rawMarkdownBody}
        />
      </>
    )}
  />
);

export default ProjectCard;
