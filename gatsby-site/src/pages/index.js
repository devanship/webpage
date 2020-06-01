import React from "react"
import { Box, Container, Grid, Typography} from "@material-ui/core/"
import Rating from '@material-ui/lab/Rating'
import { useStaticQuery, graphql } from "gatsby"
import './index.scss';

// Components
import Layout from "../components/layout/layout"
import Image from "../components/image"
import CardComp from "../components/card/card"
import Header from "../components/header/header"
import Typist from 'react-typist';

const IndexPage = () => (
  <Layout>
    <Grid className="main-container" container spacing={0}>
      <Grid item xs={4}>
        <CardComp type={"orange-card"} title={"About Me"} backContent={
          <Typography></Typography>
        } 
        />
        <CardComp type={"grey-card"} title={"Experience"} backContent={
          <Typography variant="h6">
            <div className="back-content__sub-title">IBM</div>
            <div className="back-content__title">Front-End Developer</div> 
            <div className="back-content__date">March 2019 - Present</div>
            <br />
            <div className="back-content__sub-title">Klyxx Creative</div>
            <div className="back-content__title">Front-End Developer Intern</div> 
            <div className="back-content__date">July 2018 - October 2018</div>
            <br />
            <div className="back-content__sub-title">Critical Mass</div>
            <div className="back-content__title">Developer Intern</div>
            <div className="back-content__date">May 2017 - November 2017</div>
            <br />
            <div className="back-content__sub-title">State Street Global Advisors</div>
            <div className="back-content__title">Risk Application Development Co-op</div>
            <div className="back-content__date">July 2016 - December 2016</div>
            <br /> 
            <div className="back-content__sub-title">Semantic Machines</div>
            <div className="back-content__title">Quality Assurance Agent</div> 
            <div className="back-content__date">September 2015 - April 2017</div>
          </Typography>
        }/>
        <CardComp type={"orange-card"} title={"Portfolio"}/>
      </Grid>
      <Grid item xs={4}>
        <CardComp type={"grey-card"} title={"Education"} backContent={
          <Typography variant="h6">
            <div className="back-content__sub-title">Northeastern University</div>
            <div className="back-content__title">B.S. - Computer Science and Sociology</div>
            <div className="back-content__date">September 2014 - December 2018</div> 
          </Typography>
        }/>
        <CardComp type={"orange-card"} title={"Skills"} backContent={
          <Box component="span">
            <Typography component="legend">Javascript</Typography>
            <Rating name="read-only" value="4" readOnly size="large" />
            <Typography component="legend">HTML</Typography>
            <Rating name="read-only" value="4" readOnly size="large"/>
            <Typography component="legend">CSS</Typography>
            <Rating name="read-only" value="4" readOnly size="large"/>
            <Typography component="legend">Java</Typography>
            <Rating name="read-only" value="3" readOnly size="large"/>
            <Typography component="legend">JSON</Typography>
            <Rating name="read-only" value="3" readOnly size="large"/>
            <Typography component="legend">SQL</Typography>
            <Rating name="read-only" value="3" readOnly size="large"/>
            <Typography component="legend">Git</Typography>
            <Rating name="read-only" value="4" readOnly size="large"/>
            <Typography component="legend">ReactJS</Typography>
            <Rating name="read-only" value="4" readOnly size="large"/>
            <Typography component="legend">AngularJS</Typography>
            <Rating name="read-only" value="3" readOnly size="large"/>
            <Typography component="legend">Redux</Typography>
            <Rating name="read-only" value="3" readOnly size="large"/>
            <Typography component="legend">Node.js</Typography>
            <Rating name="read-only" value="4" readOnly size="large"/>
            <Typography component="legend">Gulp.js</Typography>
            <Rating name="read-only" value="2" readOnly size="large"/>
            <Typography component="legend">Webpack</Typography>
            <Rating name="read-only" value="3" readOnly size="large"/>
            <Typography component="legend">NPM</Typography>
            <Rating name="read-only" value="3" readOnly size="large"/>
            <Typography component="legend">GatsbyJS</Typography>
            <Rating name="read-only" value="3" readOnly size="large"/>
            <Typography component="legend">Bootstrap</Typography>
            <Rating name="read-only" value="4" readOnly size="large"/>
            <Typography component="legend">Material-UI</Typography>
            <Rating name="read-only" value="4" readOnly size="large"/>
            <Typography component="legend">Carbon Design System</Typography>
            <Rating name="read-only" value="4" readOnly size="large"/>
            <Typography component="legend">Storybook</Typography>
            <Rating name="read-only" value="2" readOnly size="large"/>
          </Box>
        }/>
        <CardComp type={"grey-card"} title={"Contact"}/>
      </Grid>
      <Grid item xs={4}>
          <Container>
              {/* <Header siteTitle="Devanshi Patel" />
               <Image className="heroImage"/> */}
               <Typist>
                  <span>Hi, I'm Devanshi!</span> <br />
                  {/* <Typist.Delay ms={500} />
                  <span>I am ...</span> <br />
                  <Typist.Delay ms={1000} />
                  <span>a Coder,</span> <br />
                  <Typist.Delay ms={500} />
                  <span>an Artist,</span> <br />
                  <Typist.Delay ms={500} />
                  <span>an Adventurist,</span> <br />
                  <Typist.Delay ms={500} />
                  <span>and much, much more.</span> */}
               </Typist>
          </Container>
      </Grid>
    </Grid>
    {/* <Link to="/page-2/">Go to page 2</Link> <br /> */}
  </Layout>
)

export default IndexPage
