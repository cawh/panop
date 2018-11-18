import React from 'react';
import Link from 'gatsby-link'
import Helmet from 'react-helmet';

export default function Template({data}) {
    const {markdownRemark: post} = data;


    const el = (document.getElementsByClassName('post-header'))
    function isScrolledIntoView(el) {
        var rect = el.getBoundingClientRect();
        var elemTop = rect.top;
        var elemBottom = rect.bottom;
    
        // Only completely visible elements return true;

        var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
        
        // Partially visible elements return true;
        // isVisible = elemTop < window.innerHeight && elemBottom >= 0;

        return isVisible;
    }

    return (
        <div className="posts">
            <div className="post-container">
                <div className="post-open">
                    <div className="post-open-header">
                            <div>
                                <h1>{post.frontmatter.title}</h1>
                                <h5 className="author">{post.frontmatter.author}</h5>
                                <h5 className={"tag tag-" + post.frontmatter.tag}>{post.frontmatter.tag}</h5>
                            </div>
                    </div>
                    <div className="imgContain">
                        <img src={post.frontmatter.thumbnail.childImageSharp.sizes.src} />
                    </div>
                    <div className="post-open-content" dangerouslySetInnerHTML={{__html: post.html}}/>
                </div>
            </div>
        </div>
    )
}

export const postQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                path
                title
                author
                tag
                thumbnail {
                    childImageSharp {
                        sizes(maxWidth: 624) {
                            src
                            srcSet
                            sizes   
                        }
                    }
                }
            }
        }
    }
`