import React from 'react'
import Link from 'gatsby-link'
import PostRankless from '../layouts/post-rankless'

const ReviewsPage = ({data}) => (
  <div className="articles">
    {data.allMarkdownRemark.edges.map(post => (
      <PostRankless post={post} key={post.id} />
    ))}
  </div>
)

export const pageQuery = graphql`
  query ReviewsQuery {
    allMarkdownRemark(
      limit: 10
      sort: { fields: [frontmatter___date], order: ASC }
      filter: { frontmatter: { tag: {eq: "Review"} } }
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

export default ReviewsPage
