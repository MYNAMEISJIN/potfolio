import React from 'react'
import styled from 'styled-components'
import { Col, Row } from 'react-bootstrap'
import HomeTop from '../components/HomeTop'
import HomeMiddle from '../components/HomeMiddle'
import HomeBottom from '../components/HomeBottom'
import { useSpring, animated } from '@react-spring/web'
import { TypeAnimation } from 'react-type-animation';
import { useState } from 'react'


const MumContainer = styled.div`
background-color:black;
color:white;
height:100vh;
display:flex;
justify-content: space-around;
flex-direction: column;
padding-top:-100px;
`



const Home = () => {
    
    const [firstLine, setFirstLine] = useState(true)
    const [secondLine, setSecondLine] = useState(true)

    const typingAppear = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 8000,
    })


    return (
        <div>
            <MumContainer>
                <HomeTop />
                <HomeMiddle />
                <HomeBottom />
                {/* <animated.div
                    styled={{
                        ...starsOpacity3,
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        paddingBottom: "100px",
                        paddingRight: "100px",
                    }}
                >

                    asldkfjlksdjflksdjflksdfjlkj


                </animated.div> */}
                <animated.div
                    style={{
                        ...typingAppear,
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        background: "rgba(0, 0, 0, 0.7)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        paddingBottom: "100px",
                        paddingRight: "100px",
                    }}
                >
                    <div className='hey-mate'>
                        <div>
                            <TypeAnimation
                                sequence={[

                                    8300,
                                    'The cosmos is within us',
                                    500, // Types 'Three' without deleting 'Two'
                                    () => {

                                        setFirstLine(false) // Place optional callbacks anywhere in the array

                                    }
                                ]}
                                wrapper="span"
                                cursor={false}

                                style={{ fontSize: '2.3em', display: 'inline-block', color: "white", width: "745px" }}
                            />
                        </div>
                        {firstLine ? <div></div> : <div>
                            <TypeAnimation
                                sequence={[

                                    'We are made of star-stuff',
                                    500,// Types 'Three' without deleting 'Two'
                                    () => {
                                        setSecondLine(false)
                                    }
                                ]}
                                wrapper="span"
                                cursor={false}

                                style={{ fontSize: '2.3em', display: 'inline-block', color: "white" }}
                            />
                        </div>}
                        {secondLine ? <div></div> : <div>
                            <TypeAnimation
                                sequence={[

                                    "We are a way for the universe to know itself",
                                    500, // Types 'Three' without deleting 'Two'
                                    () => {

                                    }
                                ]}
                                wrapper="span"
                                cursor={false}

                                style={{ fontSize: '2.3em', display: 'inline-block', color: "white" }}
                            />
                        </div>}
                    </div>
                </animated.div>


            </MumContainer>

        </div >
    )
}

export default Home
