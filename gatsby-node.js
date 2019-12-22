const path = require('path')

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const { data } = await graphql(`
    {
      posts: allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              title
              slug
            }
          }
        }
      }
    }
  `)
  const blogPosts = data.posts.edges
  const blogPostsPerPage = 5
  const numPages = Math.ceil(blogPosts.length / blogPostsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: path.resolve('./src/templates/post-list.js'),
      context: {
        limit: blogPostsPerPage,
        skip: i * blogPostsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
  data.posts.edges.forEach(({ node }) => {
    createPage({
      path: `blog/${node.frontmatter.slug}`,
      component: path.resolve('./src/templates/post-template.js'),
      context: {
        slug: node.frontmatter.slug,
      },
    })
  })
}
