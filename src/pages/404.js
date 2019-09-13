import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Fruit Not Found!</h1>
    <p>You just hit a fruit that has not been added... yet.</p>
  </Layout>
)

export default NotFoundPage
