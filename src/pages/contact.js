import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Link } from 'gatsby'

const ContactPage = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Contact"
        description="Get in touch, send me a message, reach out and ask me questions!"
      />
      <div className="row py-5 justify-content-md-center mx-4">
        <div className="col col-md-8 pb-5">
          <h2 className="list-post-title">&frasl;&frasl; Contact Me</h2>
          <article className="contact-text">
            <p className="py-1">
              If you want to send get in touch then you can contact me via any
              of the social links on my <Link to="/about/">about page</Link> or
              if it's easier just submit a message using the form below! I'll
              try and respond as soon as I can.
            </p>
          </article>

          <form
            id="fs-frm"
            name="simple-contact-form"
            accept-charset="utf-8"
            action="https://formspree.io/xlegajel"
            method="post"
          >
            <fieldset id="fs-frm-inputs" className="py-3">
              <label for="full-name" className="control-label">
                Full Name
              </label>
              <input
                type="text"
                name="full-name"
                className="form-control"
                id="full-name"
                placeholder="Enter your name here..."
                required
              />
              <label for="email-address" className="control-label">
                Email Address
              </label>
              <input
                type="email"
                name="_replyto"
                id="email-address"
                className="form-control"
                placeholder="email@domain.tld"
                required
              />
              <label for="message" className="control-label">
                Message
              </label>
              <textarea
                rows="5"
                name="message"
                id="message"
                className="form-control"
                placeholder="Enter your message here..."
                required
              ></textarea>
              <input
                type="hidden"
                name="_subject"
                className="form-control"
                id="email-subject"
                value="Contact Form Submission"
              />
            </fieldset>
            <button type="submit" class="btn btn-secondary btn-lg btn-block">
              Send
            </button>
          </form>
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
export default ContactPage
