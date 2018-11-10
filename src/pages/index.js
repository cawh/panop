import React from 'react'
import Link from 'gatsby-link'
import Post from '../layouts/post'

const IndexPage = ({data}) => (
  <div className="articles">
    {data.allMarkdownRemark.edges.map(post => (
      <Post post={post} key={post.id} />
    ))}
  </div>
)

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 10
      sort: { fields: [frontmatter___date], order: ASC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      edges {
          node {
            html
            id 
              frontmatter {
                  title
                  path
                  published
                  author
                  date
                  tag
                  ranking
                  thumbnail {
                    childImageSharp {
                      sizes(maxWidth: 400) {
                        src
                        srcSet
                        sizes   
                      }
                    }
                  }
                }
            }
        }
    }
  }
`

export default IndexPage
