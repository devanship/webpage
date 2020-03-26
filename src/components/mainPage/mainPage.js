import React from "react";
import Container from "@material-ui/core/Container";
import Grid from '@material-ui/core/Grid';
import HeroImage from '../../images/HeroImage.png';
import GitHubIcon from '@material-ui/icons/GitHub';
import './mainPage.scss';

// Components
import CardComp from "../Card/Card";


export default (props) => {
    return (
        <main>
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <Container maxWidth="sm">
                        <img src={HeroImage} className="heroImage"/>
                    </Container>
                </Grid>
                <Grid item xs={3}>
                    <Grid item className="cards-grid">
                        <CardComp type={"blue-card"} title={""} />
                    </Grid>
                    <Grid item className="cards-grid">
                        <CardComp type={"grey-card"} title={"Projects"} backContent={
                            <a className="github-icon" href="https://github.com/devanship"><GitHubIcon></GitHubIcon></a>
                        }/>
                    </Grid>
                    <Grid item className="cards-grid">
                        <CardComp type={"blue-card"} title={"My Spotify"} backContent={
                            <iframe 
                                src="https://open.spotify.com/embed/playlist/4redqqMWpaU4uCYnJEtYIy" 
                                width="100%" 
                                height="350px" 
                                frameborder="0" 
                                allowtransparency="true" 
                                allow="encrypted-media">
                            </iframe>} 
                        />
                    </Grid>
                </Grid>
                <Grid item xs={3}>
                    <Grid item className="cards-grid">
                        <CardComp type={"grey-card"} title={"Education"} backContent={
                            <div>
                                <p className="back-content__title">Northeastern University ‘18
                                <br/>
                                    <span className="back-content__sub-title">Bachelor of Science in Computer Science and Sociology</span>
                                </p>
                                <p className="back-content__title">University of College Dublin
                                    <br/>
                                    <span className="back-content__sub-title">Study Abroad - Undeclared</span>
                                </p>
                                <p className="back-content__title">New Hyde Park Memorial High School ‘14
                                    <br/>
                                    <span className="back-content__sub-title">High School Diploma</span>
                                </p>
                            </div>
                        }/>
                    </Grid>
                    <Grid item className="cards-grid">
                        <CardComp type={"blue-card"} title={"Experience"} backContent={
                            <div>
                                <p className="back-content__title">IBM
                                <br/>
                                    <span className="back-content__sub-title">iX Front-End Developer</span>
                                </p>
                                <p className="back-content__title">Klyxx Creative
                                    <br/>
                                    <span className="back-content__sub-title">Front-End Developer</span>
                                </p>
                                <p className="back-content__title">Critical Mass
                                    <br/>
                                    <span className="back-content__sub-title">Developer Intern</span>
                                </p>
                                <p className="back-content__title">State Street Global Advisors
                                    <br/>
                                    <span className="back-content__sub-title">Risk Application Development Intern</span>
                                </p>
                                <p className="back-content__title">Semantic Machines
                                    <br/>
                                    <span className="back-content__sub-title">Quality Assurance Agent</span>
                                </p>
                            </div>
                        }/>
                    </Grid>
                    <Grid item className="cards-grid">
                        <CardComp type={"grey-card"} title={"Contact"} backContent={
                            <iframe
                                src="https://docs.google.com/forms/d/e/1FAIpQLScUvGn4jAeVamTAiylg90sVAESQpSJTSlH2Tl7Zg9SiuzC3_w/viewform?embedded=true" 
                                frameborder="0" 
                                marginheight="0" 
                                marginwidth="0"
                                height="250px"
                                width="100%"
                            > 
                            </iframe>}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </main>
    )
}