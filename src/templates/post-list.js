import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'

const BlogPage = ({ data, pageContext }) => {
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? '/' : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()
  const posts = data.posts.edges

  return (
    <Layout>
      <SEO title="Blog" />
      <div className="row py-5 justify-content-md-center mx-2">
        <div className="col col-md-8">
          <h2 className="list-post-title">// Blog Posts</h2>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <article key={node.frontmatter.slug} className="post-summary">
                <div className="row">
                  <div className="col-sm">
                    <h3>
                      <Link
                        className="highlight"
                        to={`/blog/${node.frontmatter.slug}`}
                      >
                        {title}
                      </Link>
                    </h3>
                  </div>
                  <div className="col-sm text-sm-right">
                    <small className="list-post-date">
                      {node.frontmatter.date}
                    </small>
                  </div>
                </div>
                <section>
                  <p
                    className="post-excerpt"
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />
                </section>
              </article>
            )
          })}
          <div className="">
            {!isFirst && (
              <Link to={`/blog/${prevPage}`} className="" rel="prev">
                Previous Page |
              </Link>
            )}
            {!isLast && (
              <Link to={`/blog/${nextPage}`} className="" rel="next">
                | Next Page
              </Link>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const data = graphql`
  query($skip: Int!, $limit: Int!) {
    posts: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            slug
            description
          }
        }
      }
    }
  }
`

export default BlogPage
