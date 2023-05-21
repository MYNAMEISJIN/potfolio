import React from 'react'
import styled from 'styled-components'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container, Card, Button } from 'react-bootstrap';






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
            items: 2
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
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
                        <a target="_blank" rel="noopener noreferrer" href="https://visionary-youtiao-1d82ea.netlify.app" style={{ textDecoration: "none" }}>
                            <Card style={{ width: '30rem', height: "500px", border: "none", backgroundColor: "black", color: "white" }}>
                                <Card.Img variant="top" src="images/react-practice.jpg" style={{ height: "18rem" }} />
                                <Card.Body >
                                    <Card.Title style={{ fontWeight: "bold" }}>MovieHub</Card.Title>
                                    <Card.Text>
                                        MovieHub is a website that lets movie users discover and explore films.
                                        Developed as a React.js practice project.
                                        MovieHub offers features like movie search,
                                        top movies, and related films.


                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </a>

                    </ProjectDiv>
                    <ProjectDiv>
                        <a target="_blank" rel="noopener noreferrer" href="https://google.com" style={{ textDecoration: "none" }}>
                            <Card style={{ width: '30rem', height: "500px", border: "none", backgroundColor: "black", color: "white" }}>
                                <Card.Img style={{ height: "18rem" }} variant="top" src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80" />
                                <Card.Body>
                                    <Card.Title style={{ fontWeight: "bold" }}>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                        text to build on the card title and make up the


                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </a>
                    </ProjectDiv>
                    <ProjectDiv>
                        <a target="_blank" rel="noopener noreferrer" href="https://google.com" style={{ textDecoration: "none" }}>
                            <Card style={{ width: '30rem', height: "500px", border: "none", backgroundColor: "black", color: "white" }}>
                                <Card.Img style={{ height: "18rem" }} variant="top" src="https://i0.wp.com/www.flutterbeads.com/wp-content/uploads/2022/01/add-image-in-flutter-hero.png?fit=2850%2C1801&ssl=1" />
                                <Card.Body>
                                    <Card.Title style={{ fontWeight: "bold" }}>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.


                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </a>

                    </ProjectDiv>
                    <ProjectDiv>
                        <a target="_blank" rel="noopener noreferrer" href="https://google.com" style={{ textDecoration: "none" }}>
                            <Card style={{ width: '30rem', height: "500px", border: "none", backgroundColor: "black", color: "white" }}>
                                <Card.Img style={{ height: "18rem" }} variant="top" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
                                <Card.Body>
                                    <Card.Title style={{ fontWeight: "bold" }}>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                        text to build on the card title and make up the


                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </a>

                    </ProjectDiv>
                </Carousel>




            </Container>
        </ContainerForProject>
    )
}

export default Project
