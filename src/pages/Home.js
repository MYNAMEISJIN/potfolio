import React from 'react'
import styled from 'styled-components'
import { Col, Row } from 'react-bootstrap'
import HomeTop from '../components/HomeTop'
import HomeMiddle from '../components/HomeMiddle'
import HomeBottom from '../components/HomeBottom'
import { useSpring, animated } from '@react-spring/web'
import { TypeAnimation } from 'react-type-animation';
import { useState } from 'react'
import MobileHomeTop from '../components/MobileHomeTop'
import MobileHomeMiddle from '../components/MobileHomeMiddle'
import MobileHomeBottom from '../components/MobileHomeBottom'
import MobileHomeBottom2 from '../components/MobileHomeBottom2'
import { faLeftLong } from '@fortawesome/free-solid-svg-icons'


const MumContainer = styled.div`
background-color:black;
color:white;
height:100vh;
display:flex;
justify-content: space-around;
flex-direction: column;
padding-top:-100px;
@media screen and (max-width: 992px) {
display:none;
  
}
`

const MobileMumContainer = styled.div`
display:none;
@media screen and (max-width: 992px) {
background-color:black;
color:white;
height:100vh;
display:flex;
justify-content: space-around;
flex-direction: column;
padding-top:-100px;
}
`



const Home = () => {

    const [firstLine, setFirstLine] = useState(true)
    const [secondLine, setSecondLine] = useState(true)

    const typingAppear = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 8000,
    })

    const mobileTypingAppear = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 7100,
    })


    return (
        <div>
            <MumContainer>
                <HomeTop />
                <HomeMiddle />
                <HomeBottom />
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
                        paddingBottom: "150px",
                        paddingRight: "100px",
                    }}
                >
                    <div className='hey-mate2'>
                        <div>
                            <TypeAnimation 
                                sequence={[

                                    8400,
                                    'The cosmos is within us',
                                    500,
                                    
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

            <MobileMumContainer>
                <MobileHomeTop />
                <MobileHomeMiddle />
                <MobileHomeBottom />
                <MobileHomeBottom2 />
                <animated.div
                    style={{
                        ...mobileTypingAppear,
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        background: "rgba(0, 0, 0, 0.7)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        paddingLeft:"50px",
                        paddingBottom:"90px"
                        
                    }}
                >
                    <div className='hey-mate'>
                        <div>
                            <TypeAnimation
                                sequence={[

                                    7600,
                                    'The cosmos is within us',
                                    500, // Types 'Three' without deleting 'Two'
                                    () => {

                                        setFirstLine(false) // Place optional callbacks anywhere in the array

                                    }
                                ]}
                                wrapper="span"
                                cursor={false}

                                style={{ fontSize: '20px', display: 'inline-block', color: "white", width:"340px" }}
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

                                style={{ fontSize: '20px', display: 'inline-block', color: "white" }}
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

                                style={{ fontSize: '20px', display: 'inline-block', color: "white" }}
                            />
                        </div>}
                    </div>

                </animated.div>
            </MobileMumContainer>

        </div >
    )
}

export default Home
