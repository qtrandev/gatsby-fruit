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
    <p>Scientific name: <a alt="Wikipedia" href="https://en.wikipedia.org/wiki/Mangifera_indica">Mangifera indica L.</a></p>
    <p>All mango varieties can be found 
      <a alt="Wikipedia mango cultivars" href="https://en.wikipedia.org/wiki/List_of_mango_cultivars"> here</a>.</p>

    <h3>Common Varieties:</h3>
    <ul>
      <li>Alphonso</li>
      <li>Valencia Pride</li>
      <li><a alt="Nam Dok Mai" href="https://en.wikipedia.org/wiki/Nam_Dok_Mai">Nam Dok Mai</a></li>
        <ul>
          <li>Origin: Thailand</li>
          <li>Production: Thailand, Australia, Florida (USA)</li>
          <li>Scientific Name: Mangifera indica L. cv. Nam Dok Mai</li>
          <li>Names: Nam Doc Mai, Nom Doc Mai</li>
          <li>Type: Polyembryonic (Will likely breed true from seed)</li>
          <li>General: A dessert mango, not too sweet, fiberless and soft</li>
        </ul>
      <li>Honey (Ataulfo)</li>
      <li>Chaunsa</li>
      <li>Sinduri</li>
      <li>Neelum</li>
      <li>Francis</li>
      <li>Haden</li>
      <li>Keitt</li>
      <li>Kent</li>
      <li>Tommy Atkins</li>
      <li>Palmer</li>
      <li>Julie</li>
      <li>Kensington</li>
      <li>Kesar</li>
      <li>Sensation</li>
      <li>Excel</li>
      <li>Glenn</li>
      <li>Carrie</li>
      <li>Irwin</li>
      <li>Edward</li>
      <li>Fairchild</li>
      <li>Zill</li>
      <li>Ah Ping</li>
      <li>Golden Glow</li>
      <li>Paris</li>
      <li>Banganapalli</li>
      <li>Egg of the Sun (Taiyo no Tamago)</li>
      <li>Common</li>
    </ul>

    <p><a target="_blank" rel="noopener noreferrer" alt="Wikipedia" href="https://en.wikipedia.org/wiki/Mango">More info</a></p>
  </Layout>
)

export default MangoPage
