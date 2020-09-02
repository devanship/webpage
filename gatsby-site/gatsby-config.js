module.exports = {
  pathPrefix: "/webpage",
  siteMetadata: {
    title: `Devanshi Patel`,
    description: `This is Devanshi's personal website.`,
    author: `@gatsbyjs`,
    education: [
      {
        school: `Northeastern University`, 
        major: `B.S. - Computer Science and Sociology`, 
        date: `January 2014 - December 2018`
      },
      {
        school: `University College Dublin`, 
        major: `Northeastern Univeristy Study Abroad - Undeclared`, 
        date: `September 2014 - November 2014`
      },
      {
        school: `New Hyde Park Memorial High School`, 
        major: `High School Diploma, 7 - 12`, 
        date: `September 2008 - June 2014`
      },
    ],
    experience: [
      {
        company: `IBM`,
        position: `Front-End Developer`,
        date: `March 2019 - Present`
      },
      {
        company: `Klyxx Creative`,
        position: `Front-End Developer Intern`,
        date: `July 2018 - October 2018`
      },
      {
        company: `College of Arts, Media, & Design - Northeastern University`,
        position: `Web Content Migration`,
        date: `January 2018 - April 2018`
      },
      {
        company: `Critical Mass`,
        position: `Developer Intern`,
        date: `May 2017 - November 2017`
      },
      {
        company: `State Street Global Advisors`,
        position: `Risk Application Development Co-op`,
        date: `July 2016 - December 2016`
      },
      {
        company: `Semantic Machines`,
        position: `Quality Assurance Agent`,
        date: `September 2015 - April 2017`
      }
    ],
    skills: [
      {technology: `Javascript`, rating: `4`},
      {technology: `HTML`, rating: `4`},
      {technology: `CSS`, rating: `4`},
      {technology: `ReactJS`, rating: `4`},
      {technology: `AngularJS`, rating: `3`},
      {technology: `Git`, rating: `4`},
      {technology: `GatsbyJS`, rating: `3`},
      {technology: `Redux`, rating: `3`},
      {technology: `Node.js`, rating: `3`},
      {technology: `Gulp.js`, rating: `2`},
      {technology: `Webpack`, rating: `2`},
      {technology: `NPM`, rating: `4`},
      {technology: `Bootstrap`, rating: `3`},
      {technology: `Material-UI`, rating: `4`},
      {technology: `Ionic`, rating: `4`},
      {technology: `Carbon Design System`, rating: `3`},
      {technology: `Storybook`, rating: `2`},
      {technology: `Java`, rating: `3`},
      {technology: `JSON`, rating: `3`},
      {technology: `SQL`, rating: `3`},
    ],
    projects: [
      {
        client: "TMobile Demo",
        tech: ["AngularJS, Ionic"],
        image: "../images/tmobile-rms.png"
      },
      {
        client: "APCO IntelliComm",
        tech: ["ReactJS, Carbon Design System, Meteor, MongoDB, IBM Cloud"],
        image: "/src/images/apco-home.png"
      },
      {
        client: "NetApp",
        tech: ["AngularJS, Storybook"],
        image: "/src/images/netapp-home.png"
      },
      {
        client: "Equity Mining Demo",
        tech: ["AngularJS"],
        image: "/src/images/eqm-screen.png"
      },
      {
        client: "ADP",
        tech: ["ReactJS, Redux, MDF"],
        image: "/src/images/adp-logo.png"
      },
      {
        client: "The Aesthetic Society",
        tech: ["Drupal, AngularJs"],
        image: "/src/images/asaps-log.png"
      },
      {
        client: "Marriott Bonvoy",
        tech: ["WordPress, PHP"],
        image: "/src/images/marriot-cm.png"
      },
      {
        client: "Beat The Bomb",
        tech: ["ReactJS, GatsbyJS, GulpJS"],
        image: "/src/images/marriot-cm.png"
      },
      {
        client: "BMW USA",
        tech: ["AngularJS, Adobe Experience Manager"],
        image: "/src/images/bmw-scree.png"
      },
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Special Elite`,
          `Source Code Pro`,
          `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-source-medium`,
      options: {
        username: `@d3vanshi`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
