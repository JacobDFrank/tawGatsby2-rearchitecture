// The purpose of this file is to give control and what's being registered in Gatsby

const path = require('path');

plugins: [{
  resolve: 'gatsby-plugin-react-css-modules',
  options: {
    // *.css files are included by default.
    // To support another syntax (e.g. SCSS),
    // add 'postcss-scss' to your project's devDependencies
    // and add the following option here:
    filetypes: {
      '.scss': {
        syntax: 'postcss-scss'
      },
    },

    // Exclude global styles from the plugin using a RegExp:
    exclude: '\/global\/',
  },
}, ];


//creating pages for only the projects (which are filtered based on the absolute path)
exports.createPages = ({
  graphql,
  actions
}) => {
  const {
    createPage
  } = actions;
  return new Promise((resolve) => {
    graphql(`
      {
        allMarkdownRemark(filter: {
            fileAbsolutePath: {
              regex: '\/projects/'
            }
          }) {
          edges {
            node {
              html
              frontmatter {
                title
                URLpath
                published
                date(formatString: 'MMMM DD, YYYY')
                description
                tags
              }
            }
          }
        }
      }
    `).then(results => {
      results.data.allMarkdownRemark.edges.forEach(({
        node
      }) => {
        createPage({
          path: `/projects${node.frontmatter.URLpath}`,
          component: path.resolve('./src/components/FolioComponents/ProjectLayout.jsx'),
          context: {
            URLpath: node.frontmatter.URLpath, //takes the path that is in the markdown and stores the file there
          }
        });
      });
      resolve();
    });
  });
};


// create new 'createPages things to form new queries

// ------------------------------------------------------------------
// https://stackoverflow.com/questions/49456106/how-to-make-a-one-to-many-connection-between-netlify-cms-and-gatsby
// Add the other stuff onto the files (config.yml, gatsby-config, and make a new file for the query)

// exports.sourceNodes = ({
//   boundActionCreators,
//   getNodes,
//   getNode
// }) => {
//   const {
//     createNodeField
//   } = boundActionCreators;



//   const postsOfAuthors = {};
//   // iterate thorugh all markdown nodes to link books to author
//   // and build author index
//   const markdownNodes = getNodes()
//     .filter(node => node.internal.type === 'MarkdownRemark')
//     .forEach(node => {
//       if (node.frontmatter.author) {
//         const authorNode = getNodes().find(
//           node2 =>
//             node2.internal.type === 'MarkdownRemark' &&
//           node2.frontmatter.title === node.frontmatter.author
//         );

//         if (authorNode) {
//           createNodeField({
//             node,
//             name: 'author',
//             value: authorNode.id,
//           });

//           // if it's first time for this author init empty array for his posts
//           if (!(authorNode.id in postsOfAuthors)) {
//             postsOfAuthors[authorNode.id] = [];
//           }
//           // add book to this author
//           postsOfAuthors[authorNode.id].push(node.id);
//         }
//       }
//     });

// ------------------------------------------------------------------

//   Object.entries(postsOfAuthors).forEach(([authorNodeId, postIds]) => {
//     createNodeField({
//       node: getNode(authorNodeId),
//       name: 'posts',
//       value: postIds,
//     });
//   });
// };




// ------------------------------------------------------------------
// NOT SURE IF THIS IS NEEDED ANYMORE, WAITING TO SEE IF ERRORS...

// exports.modifyBabelrc = ({
//   babelrc
// }) => ({
//   ...babelrc,
//   plugins: babelrc.plugins.concat(
//     ['transform-regenerator'],
//     ['transform-runtime']
//   ),
// });