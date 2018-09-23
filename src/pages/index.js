import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({data}) => (
  <div className="articles-container">
    {data.allMarkdownRemark.edges.map(post => (
      <Link  
        key={post.node.id}
        to={post.node.frontmatter.path}
        className={"article shadow ranking-" + post.node.frontmatter.ranking}>
        <div className="article-image">
          <img src={post.node.frontmatter.thumbnail.childImageSharp.sizes.src}/>
        </div>
        <div className="article-details">
          <h1>{post.node.frontmatter.title}</h1>
          <h5 className="author">{post.node.frontmatter.author}</h5>
          <h5 className="tag">{post.node.frontmatter.tag}</h5>
        </div>
      </Link>
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
