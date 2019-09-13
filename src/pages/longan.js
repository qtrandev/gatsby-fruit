import React from "react"

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
      <li>Edau (EDAW)</li>
      <li>Champoo (Chompoo)</li>
      <li>Beau Kaew (Biew Kiew)</li>
      <li>Wong’s Special</li>
      <li>Seymour</li>
      <li>Degelman</li>
      <li>Tigers eye</li>
      <li>Diamond River</li>
      <li>Berlian</li>
      <li>Kay Sweeney</li>
      <li>Big leaf</li>
      <li>Seedling</li>
    </ul>

    <p><a target="_blank" rel="noopener noreferrer" alt="Wikipedia" href="https://en.wikipedia.org/wiki/Longan">More info</a></p>
  </Layout>
)

export default LonganPage
