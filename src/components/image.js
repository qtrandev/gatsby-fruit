import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "mangospread.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 1200)
        }
      }
    }
  `)

  const image = getImage(data.placeholderImage)
  return <GatsbyImage image={image} alt="Mango spread" />
}

export default Image
