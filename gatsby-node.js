const path = require(`path`)
const slash = require(`slash`)

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
// Will create pages for WordPress pages (route : /{slug})
// Will create pages for WordPress posts (route : /post/{slug})
exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions

  // The “graphql” function allows us to run arbitrary
  // queries against the local WordPress graphql schema. Think of
  // it like the site has a built-in database constructed
  // from the fetched data that you can run queries against.
  const result = await graphql(`
    {
      allWordpressPage {
        edges {
          node {
            id
            link
            slug
          }
        }
      }
      allWordpressPost {
        edges {
          node {
            id
            date
            link
            slug
          }
        }
      }
    }
  `)


  // Check for any errors
  if (result.errors) {
    throw new Error(result.errors)
  }

  // Access query results via object destructuring
  const { allWordpressPage, allWordpressPost } = result.data

  // Create Page pages.
  const pageTemplate = path.resolve(`./src/templates/page.js`)
  // We want to create a detailed page for each
  // page node. We'll just use the WordPress Slug for the slug.
  // The Page ID is prefixed with 'PAGE_'
  allWordpressPage.edges.forEach(edge => {
    // Gatsby uses Redux to manage its internal state.
    // Plugins and sites can use functions like "createPage"
    // to interact with Gatsby.

    let link = edge.node.link.split(process.env.API_URL)[1];
    createPage({
      // Each page is required to have a `path` as well
      // as a template component. The `context` is
      // optional but is often necessary so the template
      // can query data specific to each page.
      path: `${link}`,
      component: slash(pageTemplate),
      context: {
        id: edge.node.id,
      },
    })
  })

  // Create Post pages
  const postTemplate = path.resolve(`./src/templates/post.js`)
  // We want to create a detailed page for each
  // post node. We'll just use the WordPress Slug for the slug.
  // The Post ID is prefixed with 'POST_'

  allWordpressPost.edges.forEach(edge => {

  	//format date for path
	  let d = new Date(edge.node.date);
		let formatter = new Intl.DateTimeFormat('en-US', {month: '2-digit', year: 'numeric'}).formatToParts(d);
		let formatted = formatter[2].value+formatter[1].value+formatter[0].value;

    createPage({
      path: `/${formatted}/${edge.node.slug}/`,
      component: slash(postTemplate),
      context: {
        id: edge.node.id,
      },
    })
  })

  // Create redirects
  const redirects = [
    [ '/page-data/standard/1_1final/page-data.json', '/page-data/standard/1-1final/page-data.json' ],
    [ '/postcard', '/standard/1-1final/postcards/' ],
    [ '/postcard/', '/standard/1-1final/postcards/' ],
    [ '/postcards', '/standard/1-1final/postcards/' ],
    [ '/postcards/', '/standard/1-1final/postcards/' ],
    [ '/standard', '/standard/1-1final/' ],
    [ '/standard/', '/standard/1-1final/' ],
    [ '/standard/1_1final', '/standard/1-1final/' ],
    [ '/standard/1_1final/', '/standard/1-1final/' ],
    [ '/standard/1_1final/dictionary', '/standard/1-1final/dictionary/' ],
    [ '/standard/1_1final/dictionary/', '/standard/1-1final/dictionary/' ],
    [ '/standard/1_1final/postcards', '/standard/1-1final/postcards/' ],
    [ '/standard/1_1final/postcards/', '/standard/1-1final/postcards/' ],
    [ '/standard/1_1final/tagging', '/standard/1-1final/tagging/' ],
    [ '/standard/1_1final/tagging/', '/standard/1-1final/tagging/' ],
    [ '/standard/dictionary', '/standard/1-1final/dictionary/' ],
    [ '/standard/dictionary/', '/standard/1-1final/dictionary/' ],
    [ '/standard/postcards', '/standard/1-1final/postcards/' ],
    [ '/standard/postcards/', '/standard/1-1final/postcards/' ],
    [ '/standard/tagging', '/standard/1-1final/tagging/' ],
    [ '/standard/tagging/', '/standard/1-1final/tagging/' ],
  ];

  for (const redirect of redirects) {
    createRedirect({ fromPath: redirect[0], toPath: redirect[1], isPermanent: true });
  }

}
