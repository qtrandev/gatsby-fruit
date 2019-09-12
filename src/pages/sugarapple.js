import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SuggarapplePage = () => (
  <Layout>
    <SEO title="Mango" />
    <h1>Suggar-apple</h1>
    <p>Suggar-apples can be found all over the world!</p>
    <Link to="/">Home</Link>
  </Layout>
)

export default SuggarapplePage
