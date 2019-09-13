import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ImageLongan from "../components/imageLongan"

const LonganPage = () => (
  <Layout>
    <SEO title="Longan" />
    <h1>Longan</h1>
    <ImageLongan />
    <p>Longans can be found all over the world!</p>
    <Link to="/">Home</Link>
  </Layout>
)

export default LonganPage
