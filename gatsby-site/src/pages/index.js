import React from "react";
import { graphql } from "gatsby";

// Styles
import './index.scss';

// Components
import { Box, Grid, Link, IconButton, Paper, Typography } from "@material-ui/core/";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Layout from "../components/layout/layout";
import CardComp from "../components/card/card";
import Text from "../components/text/text";
import RatingComp from "../components/rating/rating";
import Typist from 'react-typist';

const IndexPage = ({ data }) => {

  return (
    <Layout>
      <Grid className="main-container" container spacing={3}>
        <Grid className="orange-cards" item sm={4}>
          <CardComp title={"Education"} backContent={
            (data.site.siteMetadata.education).map((edu) => {
              return <Text subTitle={edu.school} title={edu.major} date={edu.date}/>
          })}/>
          <CardComp title={"Skills"} backContent={
            (data.site.siteMetadata.skills).map((skill) => {
              return <RatingComp tech={skill.technology} value={skill.rating}/>
          })}/>
          <CardComp title={"Blog"} backContent={
            (data.allMediumPost.edges.map (edge => {
              return ( 
                <Paper className="medium-paper">
                  <a
                    href={`https://medium.com/@d3vanshi/${edge.node.uniqueSlug}`}
                    target="_blank"
                  >
                    <Typography variant="h6" component="h6"> {edge.node.title} </Typography>
                    <Typography variant="body2" component="body2"> {edge.node.createdAt} </Typography>
                  </a>
                </Paper> 
              )
            }))
          }/>
        </Grid>
        <Grid className="orange-cards" item sm={4}>
          <CardComp title={"Experience"} backContent={
            (data.site.siteMetadata.experience).map((exp) => {
              return <Text subTitle={exp.company} title={exp.position} date={exp.date}/>
          })}/>
          <CardComp title={"Portfolio"} backContent={<Link className="portfolio-link" href="/page-2/">Go to Portfolio</Link>}/>
        <CardComp title={"Contact"} backContent={<p>Not set up. Please reach out via LinkedIn.</p>}/>
        </Grid>
        <Grid item sm={4}>
          <Typist>
              <span>Hi, I'm Devanshi!</span>
          </Typist>
          <Box className="index-icons">
            <IconButton onClick={event =>  window.location.href='https://www.linkedin.com/in/devanship96/'}>
              <LinkedInIcon fontSize="large"/>
            </IconButton>
            <IconButton onClick={event =>  window.location.href='https://github.com/devanship'}>
              <GitHubIcon fontSize="large"/>
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </Layout>
  )
}

export const data = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        skills {
          technology
          rating
        }
        education {
          school 
          major
          date
        }
        experience {
          company
          position
          date
        }
      }
    }
    allMediumPost {
      edges {
        node {
          id
          title
          createdAt(formatString: "DD MMMM YYYY")
          uniqueSlug
          virtuals {
            subtitle
            previewImage {
              imageId
            }
          }
          author {
            name
          }
        }
      }
    }
  }
`

export default IndexPage
