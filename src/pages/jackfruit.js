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
    <br />
    <p>Jackfruits are found in many tropical areas!</p>
  </Layout>
)

export default JackfruitPage
