import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const DynamicImage = ({ filename, alt }) => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              gatsbyImageData(width: 1200)
            }
          }
        }
      }
    }
  `)

  const imageNode = data.images.edges.find(n =>
    n.node.relativePath.includes(filename)
  )
  if (!imageNode) return null

  const image = getImage(imageNode.node)
  return <GatsbyImage image={image} alt={alt} />
}

export default DynamicImage
