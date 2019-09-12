import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Fruits</h1>
    <p>We show you all the exotic fruits and not so exotic ones.</p>
    <p>Go enjoy the fruits.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/about/">About</Link>
  </Layout>
)

export default IndexPage
