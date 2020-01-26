import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Image from 'gatsby-image'
import { Link } from 'gatsby'
import {
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaYoutube,
  FaStrava,
} from 'react-icons/fa'

const AboutPage = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const aboutImage = data.aboutImage.childImageSharp.fluid
  return (
    <Layout title={siteTitle}>
      <SEO
        title="Stuart Mackenzie"
        description="All about Stuart Mackenzie - Director of Product & Tech at FutureGov. Also known as a father, husband, occassional runner, podcaster, photographer, blogger and nice human."
      />
      <div className="row py-5 justify-content-md-center mx-4">
        <div className="col col-md-8 pb-5">
          <h2 className="list-post-title">&frasl;&frasl; Stuart Mackenzie</h2>

          <article className="about-text">
            <p className="py-1">
              Hi - I'm Stuart Mackenzie! I live in{' '}
              <a href="https://www.visit-dorset.com/">Dorset</a> but spend much
              of my time working out of London transforming public services as
              the Product & Technology Director at{' '}
              <a href="https://wearefuturegov.com">FutureGov</a>.
            </p>
            <p className="py-1">
              When not working I'm also known for being a father, husband,
              technology nerd, photographer,{' '}
              <a href="https://www.instagram.com/m0nty_d0g/">dog owner</a>,{' '}
              <a href="https://www.pomranka.net/podgoat-cover/">podcaster</a>,{' '}
              <a href="https://www.strava.com/athletes/1170885">runner</a> and
              exotic disco dancer.{' '}
            </p>
            <p className="py-1">
              I use this site as a sandbox to test ideas and occassionally share
              my thoughts and reflections. Feel free to{' '}
              <Link to="/contact">contact me</Link> or connect via any of the
              profiles below.
            </p>
            <strong>Social Profiles:</strong>
            <p className="social-links">
              <a href="https://twitter.com/_disco">
                <FaTwitter size="1.5rem" className="mr-2" />
              </a>
              <a href="https://uk.linkedin.com/in/stuartjmackenzie">
                <FaLinkedin size="1.5rem" className="mx-2" />
              </a>
              <a href="https://www.instagram.com/_d1sco/">
                <FaInstagram size="1.5rem" className="mx-2" />
              </a>
              <a href="https://www.youtube.com/user/ilovediscostu">
                <FaYoutube size="1.5rem" className="mx-2" />
              </a>
              <a href="https://github.com/d1sc0">
                <FaGithub size="1.5rem" className="mx-2" />
              </a>
              <a href="https://www.strava.com/athletes/1170885">
                <FaStrava size="1.5rem" className="mx-2" />
              </a>
            </p>
            <Image
              fluid={aboutImage}
              className="about-image rounded"
              alt="dog reading"
            />
          </article>
        </div>
      </div>
    </Layout>
  )
}

export const data = graphql`
  query {
    aboutImage: file(relativePath: { eq: "hellostu.jpg" }) {
      childImageSharp {
        fluid(
          duotone: { highlight: "#ffffff", shadow: "#192550" }
          toFormat: PNG
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
export default AboutPage
