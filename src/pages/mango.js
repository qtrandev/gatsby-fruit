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
    <br />
    <p>Mangoes can be found all over the world and have over 500 varieties!</p>
    <p>All mango varieties can be found 
      <a alt="Wikipedia mango cultivars" href="https://en.wikipedia.org/wiki/List_of_mango_cultivars"> here</a>.</p>
  </Layout>
)

export default MangoPage
