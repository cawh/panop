import React from 'react'
import Link from 'gatsby-link'

class Post extends React.Component {

    constructor(props) {
      super(props);
    }
  
    render() {
      return(
        <div className={"article-container ranking-" + this.props.post.frontmatter.ranking} >
          <Link  
            key={this.props.post.id}
            to={this.props.post.frontmatter.path}
            className="article shadow ">
            <div className="article-image">
              <img src={this.props.post.frontmatter.thumbnail.childImageSharp.sizes.src}/>
            </div>
            <div className="article-details">
              <h1>{this.props.post.frontmatter.title}</h1>
              <h5 className="author">{this.props.post.frontmatter.author}</h5>
              <h5 className="tag">{this.props.post.frontmatter.tag}</h5>
            </div>
          </Link>
        </div>
      )
    }
}

export default Post