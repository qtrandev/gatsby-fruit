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
    <p>Rambutans are most prevalent in southeast Asian countries! There are over 200 cultivars of rambutans</p>

    <h3>Common Varieties:</h3>
    <ul>
      <li>Binjai</li>
      <li>Lebak Bulus</li>
      <li>Rapiah</li>
      <li>Cimacan</li>
      <li>Sinyonya</li>
      <li>Simacan</li>
      <li>Silengkeng</li>
      <li>Sikonto</li>
      <li>Aceh kuning</li>
      <li>Chooi Ang</li>
      <li>Peng Thing Bee</li>
      <li>Ya Tow</li>
      <li>Azimat</li>
      <li>Ayer Mas</li>
    </ul>

    <p><a target="_blank" alt="Wikipedia" href="https://en.wikipedia.org/wiki/Rambutan">More info</a></p>
  </Layout>
)

export default RambutanPage
