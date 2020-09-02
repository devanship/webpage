import React from "react"
import { graphql } from "gatsby"

// Styles
import './page-2.scss';

// Components
import { Container, Grid, Link } from "@material-ui/core/"
import CardComp from "../components/card/card"
import Layout from "../components/layout/layout"
import Typist from 'react-typist';

// Images
import apcoImg from "../images/apco-home.png"
import netappImg from "../images/netapp-home.png"
import tmobileRms from "../images/tmobile-rms.png"
import eqmScreen from "../images/eqm-screen.png"
import adpLogo from "../images/adp-logo.png"
import asapsLogo from "../images/asaps-log.png"
import btbScreen from "../images/btb.png"
import marriotScreen from "../images/marriot-cm.png"
import bmwScreen from "../images/bmw-scree.png"

const SecondPage = ({ data }) =>  {

  return (
    <Layout>
      <Grid className="main-container" container spacing={3}>
        <Grid className="portfolio-cards" item sm={4}>
          {
            ((data.site.siteMetadata.projects).slice(0, 5).map((proj) => {
              return <CardComp title={proj.client} image={
                proj.client === "Marriott Bonvoy" ? marriotScreen : <></> &&
                proj.client === "TMobile Demo" ? tmobileRms : <></> &&
                proj.client === "APCO IntelliComm" ? apcoImg : <></> &&
                proj.client === "NetApp" ? netappImg : <></> &&
                proj.client === "Equity Mining Demo" ? eqmScreen : <></> &&
                proj.client === "ADP" ? adpLogo : <></> &&
                proj.client === "The Aesthetic Society" ? asapsLogo : <></> &&
                proj.client === "Beat The Bomb" ? btbScreen : <></> &&
                proj.client === "BMW USA" ? bmwScreen : <></>
              } backContent={proj.tech} /> 
            }))
          }
        </Grid>
        <Grid className="portfolio-cards" item sm={4}>
          {
            ((data.site.siteMetadata.projects).slice(5, (data.site.siteMetadata.projects).size)).map((proj) => {
              return <CardComp title={proj.client} image={
                proj.client === "Marriott Bonvoy" ? marriotScreen : <></> &&
                proj.client === "TMobile Demo" ? tmobileRms : <></> &&
                proj.client === "APCO IntelliComm" ? apcoImg : <></> &&
                proj.client === "NetApp" ? netappImg : <></> &&
                proj.client === "Equity Mining Demo" ? eqmScreen : <></> &&
                proj.client === "ADP" ? adpLogo : <></> &&
                proj.client === "The Aesthetic Society" ? asapsLogo : <></> &&
                proj.client === "Beat The Bomb" ? btbScreen : <></> &&
                proj.client === "BMW USA" ? bmwScreen : <></>
              } backContent= {<div>{proj.tech} <Link href="https://www.criticalmass.com/work/detail/marriott">Case Study</Link></div>} 
              /> 
            })
          }
        </Grid>
        <Grid item sm={4}>
              <Container>
                  <Typist>
                      <span>Portfolio</span>
                  </Typist>
                  <Link href="/">Return to the homepage</Link>
              </Container>
          </Grid>
      </Grid>
    </Layout>
  ) 
}

export const data = graphql`
  query PortofiloPageQuery {
    site {
      siteMetadata {
        projects {
          client
          tech
          image
        }
      }
    }
  }
`

export default SecondPage
