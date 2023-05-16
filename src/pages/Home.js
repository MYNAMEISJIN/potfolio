import React from 'react'
import styled from 'styled-components'
import HomeTop from '../components/HomeTop'
import HomeMiddle from '../components/HomeMiddle'
import HomeBottom from '../components/HomeBottom'
import { useSpring, animated } from '@react-spring/web'
import { TypeAnimation } from 'react-type-animation';

import MobileHomeTop from '../components/MobileHomeTop'
import MobileHomeMiddle from '../components/MobileHomeMiddle'
import MobileHomeBottom from '../components/MobileHomeBottom'
import MobileHomeBottom2 from '../components/MobileHomeBottom2'



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

// const DivforTypingAniInDesktop = styled.div`
// @media screen and (max-width: 992px) {
// display:none;
// }
// `
// const DivforTypingAniInMobile = styled.div`
// @media screen and (min-width: 993px) {
// display:none;
// }
// `



const Home = () => {

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
                    
                        <div>
                            <TypeAnimation 
                                sequence={[

                                    8400,
                                    'The cosmos is within us',
                                    
                                    500, // Types 'Three' without deleting 'Two'
                                    'The cosmos is within us\nWe are made of star-stuff',
                                    500,
                                    "The cosmos is within us\nWe are made of star-stuff\nWe are a way for the universe to know itself.",
                                    
                                    () => {

                                        

                                    }
                                ]}
                                wrapper="span"
                                cursor={true}

                                style={{ fontSize: '2.3em', display: 'inline-block', color: "white", width: "770px",whiteSpace: 'pre-line' }}
                            />
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
                        <div>
                            <TypeAnimation
                          
                                sequence={[

                                    7600,
                                    'The cosmos is within us',
                                    
                                    500, // Types 'Three' without deleting 'Two'
                                    'The cosmos is within us\nWe are made of star-stuff',
                                    500,
                                    "The cosmos is within us\nWe are made of star-stuff\nWe are a way for the universe to know itself.",
                                    () => {

                                    }
                                ]}
                                wrapper="span"
                                cursor={true}

                                style={{ fontSize: '20px', display: 'inline-block', color: "white", width:"340px", whiteSpace: 'pre-line' }}
                            />
                        </div>
                       

                </animated.div>
            </MobileMumContainer>

        </div >
    )
}

export default Home
