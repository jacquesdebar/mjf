import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = () => (
  <footer
    style={{
      background: `white`,
      marginTop: `1.45rem`,
      borderTop: `1px solid #333333`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: `flex`,
        flexFlow: `row wrap`,
        justifyContent: `space-between`,
        alignItems: `center`,
      }}
    >
      <h1 style={{ margin: 0, fontSize: `1rem` }}>
        <Link
          to="#top"
          style={{
            color: `#333333`,
            textDecoration: `none`,
          }}
        >
          back to top
        </Link>
      </h1>
      © Meyer Joseph Fishman {new Date().getFullYear()}
    </div>
  </footer>
)

Footer.propTypes = {
}

Footer.defaultProps = {
}

export default Footer
