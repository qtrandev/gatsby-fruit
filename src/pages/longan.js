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

    <h3>Common Varieties:</h3>
    <ul>
      <li>Pon Yai</li>
      <li>Kohala</li>
      <li>Edau</li>
      <li>Beau Kaew</li>
      <li>Wong’s Special</li>
      <li>Seymour</li>
      <li>Tigers eye</li>
      <li>Big leaf</li>
      <li>Seedling</li>
    </ul>
    
    <p><a target="_blank" alt="Wikipedia" href="https://en.wikipedia.org/wiki/Longan">More info</a></p>
  </Layout>
)

export default LonganPage
