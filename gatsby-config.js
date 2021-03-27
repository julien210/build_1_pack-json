require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "build_1_packJson",
  },
  plugins: [
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {resolve: `gatsby-source-wordpress`,
    options :{
     // url: `http://localhost/wordpress/graphql`,
        url :`https://portaildemo69.000webhostapp.com/graphql`,
        verbose: true,
        schema : {           
          timeout:300000,
          perPage: 10, // currently set to 10
          requestConcurrency: 15, // currently set to 1
          //previewRequestConcurrency: 2, // currently set to 5

        },
        debug: {
          graphql: {
            copyHtmlResponseOnError: true
          }
        }
    },
  },
  ],
};
