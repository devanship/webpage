import React from "react"
import { Link } from "gatsby"
import Container from "@material-ui/core/Container"
import Grid from '@material-ui/core/Grid'

// Components
import Layout from "../components/layout/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import CardComp from "../components/card/card"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Grid container spacing={0}>
      <Grid item xs={3}>
        <CardComp type={"orange-card"} title={""} />
        <CardComp type={"grey-card"} title={""}/>
        <CardComp type={"orange-card"} title={""}/>
      </Grid>
      <Grid item xs={3}>
        <CardComp type={"grey-card"} title={""}/>
        <CardComp type={"orange-card"} title={""}/>
        <CardComp type={"grey-card"} title={""}/>
      </Grid>
      <Grid item xs={6}>
          <Container maxWidth="sm">
              <Image className="heroImage"/>
          </Container>
      </Grid>
    </Grid>
    {/* <Link to="/page-2/">Go to page 2</Link> <br /> */}
  </Layout>
)

export default IndexPage
