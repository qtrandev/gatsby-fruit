import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ImageMango from "../components/imageMango"

const MangoPage = () => (
  <Layout>
    <SEO title="Mango" />
    <h1>Mango</h1>
    <ImageMango />
    <p>Mangoes can be found all over the world!</p>
    <Link to="/">Home</Link>
  </Layout>
)

export default MangoPage
