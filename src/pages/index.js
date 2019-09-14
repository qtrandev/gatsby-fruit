import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import DynamicImage from "../components/imageDynamic"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Fruits</h1>
    <p>We show you all the exotic fruits and not so exotic ones.</p>
    <p>Go enjoy the fruits.</p>
    <DynamicImage alt="Mango spread" filename="mangospread.jpg" />
    <br />
    <h2>Fruits Covered: </h2>
    <ul>
      <li><Link to="/mango">Mango</Link></li>
      <li><Link to="/jackfruit">Jackfruit</Link></li>
      <li><Link to="/longan">Longan</Link></li>
      <li><Link to="/rambutan">Rambutan</Link></li>
      <li><Link to="/sugarapple">Sugar-apple</Link></li>
    </ul>
    <Link to="/about">About</Link>
  </Layout>
)

export default IndexPage
