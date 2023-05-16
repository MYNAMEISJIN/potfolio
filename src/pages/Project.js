import React from 'react'
import styled from 'styled-components'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container, Card, Button } from 'react-bootstrap';

import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

const ContainerForProject = styled.div`
background-color:white;
color:black;
height:100vh;
border-radius: 0px 0px 20px 20px;
display:flex;
justify-content:center;
align-items:center;
`
const ProjectDiv = styled.div`
display:flex;
justify-content:center;
`


const Project = () => {

    // const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
    // const FadeUp = batch(Fade(), Move(), Sticky());

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };



    return (
        <ContainerForProject>

            <Container>
                <h1 style={{ fontWeight: "900", marginBottom: "50px" }}>
                    Projects
                </h1>
                <Carousel responsive={responsive}>
                    <ProjectDiv>
                        <Card style={{ width: '20rem', height: "500px", border: "none", backgroundColor: "black", color: "white" }}>
                            <Card.Img variant="top" src="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/2.jpg" style={{height:"18rem"}} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    text to build on the card title and make up the
                                    bul

                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </ProjectDiv>
                    <ProjectDiv>
                        <Card style={{ width: '20rem', height: "500px", border: "none", backgroundColor: "black", color: "white" }}>
                            <Card.Img style={{height:"18rem"}} variant="top" src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80"  />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    text to build on the card title and make up the
                                  

                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </ProjectDiv>
                    <ProjectDiv>
                        <Card style={{ width: '20rem', height: "500px", border: "none", backgroundColor: "black", color: "white" }}>
                            <Card.Img style={{height:"18rem"}} variant="top" src="https://i0.wp.com/www.flutterbeads.com/wp-content/uploads/2022/01/add-image-in-flutter-hero.png?fit=2850%2C1801&ssl=1" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                          

                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </ProjectDiv>
                    <ProjectDiv>
                        <Card style={{ width: '20rem', height: "500px", border: "none", backgroundColor: "black", color: "white" }}>
                            <Card.Img style={{height:"18rem"}} variant="top" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    text to build on the card title and make up the
                             

                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </ProjectDiv>
                </Carousel>

                {/* <ScrollContainer>
                    <ScrollPage>
                        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
                            <span style={{ fontSize: "30px" }}>Let me show you scroll animation 😀</span>
                        </Animator>
                    </ScrollPage>
                    <ScrollPage>
                        <Animator animation={ZoomInScrollOut}>
                            <span style={{ fontSize: "40px" }}>I'm FadeUpScrollOut ✨</span>
                        </Animator>
                    </ScrollPage>
                    <ScrollPage>
                        <Animator animation={FadeUp}>
                            <span style={{ fontSize: "40px" }}>I'm FadeUp ⛅️</span>
                        </Animator>
                    </ScrollPage>
                
                </ScrollContainer> */}


            </Container>
        </ContainerForProject>
    )
}

export default Project
