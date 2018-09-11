import React from 'react';
import Helmet from 'react-helmet';

export default function Template({data}) {
    const {markdownRemark: post} = data;
    return (
        <div>
            <h1>{post.frontmatter.title}</h1>
            <h1>{post.frontmatter.author}</h1>
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
`