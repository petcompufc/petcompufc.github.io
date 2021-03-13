const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'PET Computação UFC',
    description: 'Site do PET Computação UFC',
    author: '@petcompufc'
  },
  plugins: [
    'gatsby-plugin-preact',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src/images')
      }
    },
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'PET Computação UFC',
        short_name: 'petcompufc',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#c60006',
        display: 'minimal-ui',
        icon: 'src/images/pet-icone.png' // This path is relative to the root of the site.
      }
    },
    '@chakra-ui/gatsby-plugin'
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
