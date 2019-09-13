import React from "react"

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

    <h3>Common Varieties:</h3>
    <ul>
      <li>Lessard Thai</li>
      <li>Kampong Mauve</li>
      <li>Purple or Red</li>
      <li>Cuban Seedless</li>
      <li>Brazillian Seedless</li>
    </ul>

    <p><a target="_blank" rel="noopener noreferrer" alt="Wikipedia" href="https://en.wikipedia.org/wiki/Sugar-apple">More info</a></p>
  </Layout>
)

export default SugarapplePage
