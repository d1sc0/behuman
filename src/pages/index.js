import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.posts.edges
  return (
    <Layout title={siteTitle}>
      <SEO title="Home" />
      <div className="row py-5 justify-content-md-center mx-2">
        <div className="col col-md-8">
          <h2 className="list-post-title">&frasl;&frasl; Be Human</h2>
          <section className="intro-text">
            <p>
              Welcome to the online space of Stuart Mackenzie - Creative plate
              spinner and experienced leader of product & technology teams
              working in Public Services. I use this site as a sandbox to test
              ideas and occassionally share random thoughts.{' '}
              <Link to="/about/">|| MORE...</Link>
            </p>
          </section>
          <h2 className="list-post-title">&frasl;&frasl; Latest Posts</h2>
          <section className="latest-posts">
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              return (
                <article key={node.frontmatter.slug} className="post-summary">
                  <div className="row">
                    <div className="col-sm-8">
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
          </section>
          <Link className="text-right" to="/blog/">
            || MORE...
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export const data = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    posts: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            date(formatString: "DD MMM YYYY")
            title
            slug
            description
          }
        }
      }
    }
  }
`
export default IndexPage
