const createPaginatedPages = require("gatsby-paginate");
const path = require('path');

exports.createPages = ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators;
    return new Promise((resolve, reject) => {
        return graphql(`{
                    allPosts: allMarkdownRemark(sort: {fields: [frontmatter___date], order: ASC}) {
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
                    articlePosts: allMarkdownRemark(sort: { fields: [frontmatter___date], order: ASC } filter: { frontmatter: { tag: {eq: "article"} } }) {
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
                    reviewsPosts: allMarkdownRemark(sort: { fields: [frontmatter___date], order: ASC } filter: { frontmatter: { tag: {eq: "reviews"} } }) {
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
                    inspirationPosts: allMarkdownRemark(sort: { fields: [frontmatter___date], order: ASC } filter: { frontmatter: { tag: {eq: "inspiration"} } }) {
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
                    portfolioPosts: allMarkdownRemark(sort: { fields: [frontmatter___date], order: ASC } filter: { frontmatter: { tag: {eq: "portfolio"} } }) {
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
                    storePosts: allMarkdownRemark(sort: { fields: [frontmatter___date], order: ASC } filter: { frontmatter: { tag: {eq: "store"} } }) {
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
            edges: result.data.allPosts.edges,
            createPage: createPage,
            pageTemplate: "src/templates/index.js",
            pageLength: 20, // This is optional and defaults to 10 if not used
            pathPrefix: "", // This is optional and defaults to an empty string if not used
            context: {} // This is optional and defaults to an empty object if not used
        });
        createPaginatedPages({
            edges: result.data.reviewsPosts.edges,
            createPage: createPage,
            pageTemplate: "src/templates/tagResults.js",
            pageLength: 20, // This is optional and defaults to 10 if not used
            pathPrefix: "reviews", // This is optional and defaults to an empty string if not used
            context: {} // This is optional and defaults to an empty object if not used
        });
        createPaginatedPages({
            edges: result.data.inspirationPosts.edges,
            createPage: createPage,
            pageTemplate: "src/templates/tagResults.js",
            pageLength: 20, // This is optional and defaults to 10 if not used
            pathPrefix: "inspiration", // This is optional and defaults to an empty string if not used
            context: {} // This is optional and defaults to an empty object if not used
        });
        createPaginatedPages({
            edges: result.data.portfolioPosts.edges,
            createPage: createPage,
            pageTemplate: "src/templates/tagResults.js",
            pageLength: 20, // This is optional and defaults to 10 if not used
            pathPrefix: "portfolio", // This is optional and defaults to an empty string if not used
            context: {} // This is optional and defaults to an empty object if not used
        });
        createPaginatedPages({
            edges: result.data.storePosts.edges,
            createPage: createPage,
            pageTemplate: "src/templates/tagResults.js",
            pageLength: 20, // This is optional and defaults to 10 if not used
            pathPrefix: "store", // This is optional and defaults to an empty string if not used
            context: {} // This is optional and defaults to an empty object if not used
        });
        createPaginatedPages({
            edges: result.data.articlePosts.edges,
            createPage: createPage,
            pageTemplate: "src/templates/tagResults.js",
            pageLength: 20, // This is optional and defaults to 10 if not used
            pathPrefix: "articles", // This is optional and defaults to an empty string if not used
            context: {} // This is optional and defaults to an empty object if not used
        });
        result.data.allPosts.edges.map(({ node }) => {
          createPage({
            path: node.frontmatter.path,
            component: path.resolve("./src/templates/post.js"),
          });
        });
        resolve();
      });
    });
  };