import React from "react"

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

    <h3>Common Varieties:</h3>
    <ul>
      <li>Honey (Ataulfo)</li>
      <li>Francis</li>
      <li>Haden</li>
      <li>Keitt</li>
      <li>Kent</li>
      <li>Tommy Atkins</li>
      <li>Palmer</li>
      <li>Julie</li>
      <li>Nam Dok Mai</li>
      <li>Alphonso</li>
      <li>Kensington</li>
      <li>Sensation</li>
      <li>Excel</li>
      <li>Glenn</li>
      <li>Common</li>
    </ul>

    <p><a target="_blank" rel="noopener noreferrer" alt="Wikipedia" href="https://en.wikipedia.org/wiki/Mango">More info</a></p>
  </Layout>
)

export default MangoPage
