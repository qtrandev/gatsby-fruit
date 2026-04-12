import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <h1>Fruit Not Found!</h1>
    <p>You just hit a fruit that has not been added... yet.</p>
  </Layout>
)

export const Head = () => <Seo title="404: Not found" />

export default NotFoundPage
