import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import DynamicImage from "../components/imageDynamic"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <h1>Fruits</h1>
    <p>We show you all the exotic fruits and not so exotic ones.</p>
    <p>Go enjoy the fruits.</p>
    <DynamicImage alt="Mango spread" filename="mangospread.jpg" />
    <br />
    <h2>Fruits Covered: </h2>
    <ul className="fruit-list">
      <li><Link className="btn btn-primary" to="/mango">Mango</Link></li>
      <li><Link className="btn btn-primary" to="/jackfruit">Jackfruit</Link></li>
      <li><Link className="btn btn-primary" to="/longan">Longan</Link></li>
      <li><Link className="btn btn-primary" to="/rambutan">Rambutan</Link></li>
      <li><Link className="btn btn-primary" to="/sugarapple">Sugar-apple</Link></li>
    </ul>
    <Link className="btn btn-primary" to="/about">About</Link>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
