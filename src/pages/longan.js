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
    <br />
    <p>Longans are a delicous treat in many cultures!</p>
  </Layout>
)

export default LonganPage
