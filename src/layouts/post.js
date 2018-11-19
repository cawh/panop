import React from 'react'
import Link from 'gatsby-link'
import './post.scss'

class Post extends React.Component {

    constructor(props) {
      super(props);
    }
  
    render() {
      return(
        <div className={"post-container ranking-" + this.props.post.frontmatter.ranking} >
          <Link  
            key={this.props.post.id}
            to={this.props.post.frontmatter.path}
            className={"post shadow post-" + this.props.post.frontmatter.tag}>
            <div className="post-image">
              <img src={this.props.post.frontmatter.thumbnail.childImageSharp.sizes.src}/>
            </div>
            <div className="post-details">
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