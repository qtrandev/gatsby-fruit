import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const RambutanPage = () => (
  <Layout>
    <SEO title="Rambutan" />
    <h1>Rambutan</h1>
    <p>Rambutans can be found all over the world!</p>
    <Link to="/">Home</Link>
  </Layout>
)

export default RambutanPage
