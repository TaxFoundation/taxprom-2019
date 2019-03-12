/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');

const slugify = words => words.replace(/\s+/g, '-').toLowerCase();

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(`
      query Sponsorships {
        allReceptionsYaml {
          edges {
            node {
              name
              price
            }
          }
        }
        allTablesYaml {
          edges {
            node {
              name
              earlyPrice
              regularPrice
              latePrice
            }
          }
        }
        allTicketsYaml {
          edges {
            node {
              name
              price
            }
          }
        }
      }
    `).then(result => {
      const sponsorships = [].concat(
        ...result.data.allTablesYaml.edges,
        ...result.data.allTicketsYaml.edges
      );

      result.data.allReceptionsYaml.edges.forEach(({ node }) => {
        createPage({
          path: `/join-tax-prom/${slugify(node.name)}`,
          component: path.resolve(`./src/components/ReceptionPledge.js`),
          context: {
            name: node.name,
          },
        });
      });

      sponsorships.forEach(({ node }) => {
        createPage({
          path: `/join-tax-prom/${slugify(node.name)}`,
          component: path.resolve(`./src/components/Pledge.js`),
        });
      });
    });
    resolve();
  });
};
