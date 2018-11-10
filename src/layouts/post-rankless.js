import React from 'react'
import Link from 'gatsby-link'

class PostRankless extends React.Component {

    constructor(props) {
      super(props);
    }
  
    render() {
      return(
        <div className="article-container ranking-1" >
          <Link  
            key={this.props.post.node.id}
            to={this.props.post.node.frontmatter.path}
            className="article shadow ">
            <div className="article-image">
              <img src={this.props.post.node.frontmatter.thumbnail.childImageSharp.sizes.src}/>
            </div>
            <div className="article-details">
              <h1>{this.props.post.node.frontmatter.title}</h1>
              <h5 className="author">{this.props.post.node.frontmatter.author}</h5>
              <h5 className="tag">{this.props.post.node.frontmatter.tag}</h5>
            </div>
          </Link>
        </div>
      )
    }
}

export default PostRankless