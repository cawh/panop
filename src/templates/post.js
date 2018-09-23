import React from 'react';
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
        <div className="post">
            <div className="post-header">
                <div className="outer">
                    <div>
                        <h1>{post.frontmatter.title}</h1>
                        <h5 className="author">{post.frontmatter.author}</h5>
                        <h5 className="tag">{post.frontmatter.tag}</h5>
                    </div>
                </div>
            </div>
            <img src={post.frontmatter.thumbnail.childImageSharp.sizes.src} />
            <div dangerouslySetInnerHTML={{__html: post.html}}/>
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