import React from 'react'
import PropTypes from 'prop-types'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby'

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query LogoQuery {
      logo: file(absolutePath: { regex: "/human.svg/" }) {
        publicURL
      }
    }
  `)

  return (
    <header>
      <Navbar collapseOnSelect expand="md" variant="dark">
        <Navbar.Brand id="top">
          <Link to="/" className="navbar-brand text-sm-center">
            <img
              className="text-sm-center"
              width="50"
              src={data.logo.publicURL}
              alt=""
              title="Be Human"
            />
            {/* <span className="brand-text">{siteTitle}</span> */}
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Link
              activeClassName="active"
              partiallyActive={true}
              className="nav-link text-uppercase font-weight-bold mx-2"
              to="/blog/"
            >
              Blog
            </Link>
            <Link
              activeClassName="active"
              className="nav-link text-uppercase font-weight-bold mx-2"
              to="/about/"
            >
              Contact
            </Link>
            <Link
              activeClassName="active"
              className="nav-link text-uppercase font-weight-bold mx-2"
              to="/about/"
            >
              About
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
