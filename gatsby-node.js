/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');

const slugify = words => words.replace(/\s+/g, '-').toLowerCase();

exports.createPages = async function({ graphql, actions }) {
  const { createPage } = actions;
  await graphql(`
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
    result.data.allReceptionsYaml.edges.forEach(({ node }) => {
      createPage({
        path: `/join-tax-prom/${slugify(node.name)}`,
        component: path.resolve(`./src/components/ReceptionPledge.js`),
        context: {
          name: node.name,
        },
      });
    });

    result.data.allTicketsYaml.edges.forEach(({ node }) => {
      createPage({
        path: `/join-tax-prom/${slugify(node.name)}`,
        component: path.resolve(`./src/components/TicketPledge.js`),
        context: {
          name: node.name,
        },
      });
    });

    result.data.allTablesYaml.edges.forEach(({ node }) => {
      createPage({
        path: `/join-tax-prom/${slugify(node.name)}`,
        component: path.resolve(`./src/components/Pledge.js`),
      });
    });
  });
};
