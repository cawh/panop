const createPaginatedPages = require("gatsby-paginate");
const path = require('path');

// exports.createPages = ({boundActionCreators, graphql}) => {
//     const {createPage} = boundActionCreators;

//     const postTemplate = path.resolve('src/templates/post.js');

//     return graphql(`{
//         allMarkdownRemark {
//             edges {
//                 node {
//                     html
//                     id
//                     frontmatter {
//                         path 
//                         title
//                     }
//                 }
//             }
//         }
//     }`)
//     .then(res => {
//         if(res.errors) {
//             return Promise.reject(res.errors);
//         }
//         createPaginatedPages({
//             edges: res.data.allMarkdownRemark.edges,
//             createPage: createPage,
//             pageTemplate: "src/templates/index.js",
//             pageLength: 2, // This is optional and defaults to 10 if not used
//             pathPrefix: "", // This is optional and defaults to an empty string if not used
//             context: {} // This is optional and defaults to an empty object if not used
//         });
//         res.data.allMarkdownRemark.edges.forEach(({node}) => {
//             createPage({
//                 path: node.frontmatter.path,
//                 component: postTemplate,
//             })
//         });
        
//     })
// }

exports.createPages = ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators;
    return new Promise((resolve, reject) => {
        return graphql(`{
                    allMarkdownRemark(
                        sort: {fields: [frontmatter___date], order: ASC},
                      ) {
                        edges {
                            node {
                                html
                                id
                                frontmatter {
                                    path
                                    title
                                    author
                                    published
                                    tag
                                    ranking
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
                    }
                }`).then(result => {
        createPaginatedPages({
          edges: result.data.allMarkdownRemark.edges,
          createPage: createPage,
          pageTemplate: "src/templates/index.js",
          pageLength: 20, // This is optional and defaults to 10 if not used
          pathPrefix: "", // This is optional and defaults to an empty string if not used
          context: {} // This is optional and defaults to an empty object if not used
        });
        result.data.allMarkdownRemark.edges.map(({ node }) => {
          createPage({
            path: node.frontmatter.path,
            component: path.resolve("./src/templates/post.js"),
          });
        });
        resolve();
      });
    });
  };