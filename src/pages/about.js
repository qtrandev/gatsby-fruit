import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>About</h1>
    <p>Finding fruits should be easy. We have the scoop on fruits!</p>

    <h3>Image Attributions: </h3>
    <a alt="Mango" href="https://pixabay.com/photos/chaise-mans-mango-hainan-sanya-2215040/">https://pixabay.com/photos/chaise-mans-mango-hainan-sanya-2215040/</a><br />
    <a alt="Mango" href="https://pixabay.com/photos/fruit-mango-food-melon-organic-1798796/">https://pixabay.com/photos/fruit-mango-food-melon-organic-1798796/</a><br />
    <a alt="Jackfruit" href="https://pixabay.com/photos/jack-fruit-food-fruit-nature-fresh-4215710/"></a>https://pixabay.com/photos/jack-fruit-food-fruit-nature-fresh-4215710/<br />
    <a alt="Longan" href="https://pixabay.com/photos/longan-fruit-fresh-thailand-1290167/"></a>https://pixabay.com/photos/longan-fruit-fresh-thailand-1290167/<br />
    <a alt="Rambutan"  href="https://pixabay.com/photos/rambutan-fruit-background-fresh-2477584/"></a>https://pixabay.com/photos/rambutan-fruit-background-fresh-2477584/<br />
    <a alt="Sugar-apple" href="https://pixabay.com/photos/custard-leaves-tree-thailand-1549278/"></a>https://pixabay.com/photos/custard-leaves-tree-thailand-1549278/<br />
    <Link to="/">Home</Link>
  </Layout>
)

export default AboutPage
