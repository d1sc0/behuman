import React from 'react'
import PropTypes from 'prop-types'
//import { Link } from 'gatsby'
import { IoIosHeart } from 'react-icons/io'

const Footer = ({ siteTitle, siteAuthor }) => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="float-right">
          <a href="#top">Back to top</a>
        </p>
        <p>
          {new Date().getFullYear()} © {siteAuthor} - {siteTitle}
          <br />
          Site made with <IoIosHeart className="foot-icon" size="1rem" /> using
          Gatsby, hosted on Zeit. <br />
          Find me on <a href="https://twitter.com/_disco">Twitter</a>,{' '}
          <a href="https://www.instagram.com/_d1sco/">Instagram</a>,{' '}
          <a href="https://uk.linkedin.com/in/stuartjmackenzie">Linked.In</a>,{' '}
          <a href="https://github.com/d1sc0/">Github</a>.
        </p>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  siteAuthor: PropTypes.string,
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteAuthor: ``,
  siteTitle: ``,
}

export default Footer
