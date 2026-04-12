import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ImageRambutan = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "rambutan.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 1200)
        }
      }
    }
  `)

  const image = getImage(data.placeholderImage)
  return <GatsbyImage image={image} alt="Rambutan" />
}

export default ImageRambutan
