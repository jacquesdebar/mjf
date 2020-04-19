import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Home = () => (
    <Layout>
        <SEO title="Home" />
        <h1>Home page</h1>
        <Link to="/">Back to prev</Link>
    </Layout>
)

export default Home