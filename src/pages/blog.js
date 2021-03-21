import * as React from "react";
import { graphql } from "gatsby";

import BlogCard from "../components/blogCard/blogCard";

const BlogPage = ({ data }) => {
  return (
    <>
      <main>
        <h1>My blog</h1>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <BlogCard
            description={node.excerpt}
            publicationDate={node.frontmatter.date}
            title={node.frontmatter.title}
            path={node.fields.slug}
          />
        ))}
      </main>
    </>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;

export default BlogPage;
