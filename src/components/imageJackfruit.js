import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ImageJackfruit = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "jackfruit.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 1200)
        }
      }
    }
  `)

  const image = getImage(data.placeholderImage)
  return <GatsbyImage image={image} alt="Jackfruit" />
}

export default ImageJackfruit
