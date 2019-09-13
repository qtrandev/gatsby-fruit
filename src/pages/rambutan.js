import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ImageRambutan from "../components/imageRambutan"

const RambutanPage = () => (
  <Layout>
    <SEO title="Rambutan" />
    <h1>Rambutan</h1>
    <ImageRambutan />
    <br />
    <p>Rambutans are most prevalent in southeast Asian countries!</p>
  </Layout>
)

export default RambutanPage
