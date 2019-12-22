import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
//import { Link } from 'gatsby'

const AboutPage = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="About" />
      <div className="row py-5 justify-content-md-center mx-2">
        <div className="col col-md-8">
          <header className="">
            <h2 className="list-post-title">&frasl;&frasl; Stuart Mackenzie</h2>
          </header>
          <article className="about-text">
            <p>
              Stuart Mackenzie Lives in Dorset but working out of London
              transforming public services with the awesome team at FutureGov.{' '}
            </p>
            <p>
              A father, husband, technology nerd, photographer, dog owner,
              podcaster, runner and exotic disco dancer.{' '}
            </p>
            <p>
              This blog is where I post my thoughts and experiment with
              different web technologies. You can find my photography site here.
            </p>
          </article>
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
  }
`
export default AboutPage
