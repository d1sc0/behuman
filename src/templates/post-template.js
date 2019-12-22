import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
//import {Link} from 'gatsby'

const PostPage = ({ data }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article>
        <header className="post-header">
          <div className="row py-5 justify-content-md-center mx-2">
            <div className="col col-md-8">
              <small className="list-post-date">{post.frontmatter.date}</small>
              <h1>
                <span className="post-title">{post.frontmatter.title}</span>
              </h1>
              <p className="post-excerpt-bg">{post.frontmatter.description}</p>
              <p className="post-byline">By {data.site.siteMetadata.author}</p>
            </div>
          </div>
        </header>
        <div className="row py-5 justify-content-md-center mx-2">
          <div className="col col-md-8">
            <section dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
        </div>
      </article>
    </Layout>
  )
}

export const data = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "DD MMM YYYY")
        description
        slug
      }
    }
  }
`
export default PostPage
