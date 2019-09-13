import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ImageJackfruit from "../components/imageJackfruit"

const JackfruitPage = () => (
  <Layout>
    <SEO title="Jackfruit" />
    <h1>Jackfruit</h1>
    <ImageJackfruit />
    <br />
    <p>Jackfruits are found in many tropical areas!</p>

    <h3>Common Varieties:</h3>
    <ul>
      <li>Black Gold</li>
      <li>Chenna</li>
      <li>Cochin</li>
      <li>Dang Rasimi</li>
      <li>Golden Nugget</li>
      <li>Honey Gold</li>
      <li>Lemon Gold</li>
      <li>Tabouy</li>
      <li>Varaka</li>
    </ul>

    <p><a target="_blank" alt="Wikipedia" href="https://en.wikipedia.org/wiki/Jackfruit">More info</a></p>
  </Layout>
)

export default JackfruitPage
