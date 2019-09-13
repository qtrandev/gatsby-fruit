import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ImageSugarapple from "../components/imageSugarapple"

const SugarapplePage = () => (
  <Layout>
    <SEO title="Sugar-apple" />
    <h1>Sugar-apple</h1>
    <ImageSugarapple />
    <br />
    <p>Sugar-apples are sweet and are also called custard apples!</p>
  </Layout>
)

export default SugarapplePage
