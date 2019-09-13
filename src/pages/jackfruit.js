import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ImageJackfruit from "../components/imageJackfruit"

const JackfruitPage = () => (
  <Layout>
    <SEO title="Jackfruit" />
    <h1>Jackfruit</h1>
    <ImageJackfruit />
    <p>Jackfruits can be found all over the world!</p>
    <Link to="/">Home</Link>
  </Layout>
)

export default JackfruitPage
