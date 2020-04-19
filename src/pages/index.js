import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h3>temporary homepage</h3>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <img
        src="https://i.imgur.com/DubltZZ.png"
        alt="random"
        style={{ width: "500px" }}
      />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <br />
    <Link to="/home/">Homepage</Link>
  </Layout>
)

export default IndexPage
