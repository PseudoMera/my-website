import React from "react";
import { graphql } from "gatsby";

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <main>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <small>{post.frontmatter.date}</small>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </main>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
    }
  }
`;

export default BlogPost;
