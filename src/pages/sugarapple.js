import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SugarapplePage = () => (
  <Layout>
    <SEO title="Sugar-apple" />
    <h1>Sugar-apple</h1>
    <p>Sugar-apples can be found all over the world!</p>
    <Link to="/">Home</Link>
  </Layout>
)

export default SugarapplePage
