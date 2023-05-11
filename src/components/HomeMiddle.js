import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useSpring, animated } from '@react-spring/web'


const HomeMiddle = () => {

    const starsOpacity3 = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 3000,
    })

    const starsOpacity1 = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 1000,
    })

    const upAndDownSun = useSpring({
        from: { y: -1000 },
        to: { y: 0 },
        delay: 6500,
    })
    const upAndDownArmageddon = useSpring({
        from: { y: -1000 },
        to: { y: 0 },
        delay: 3300,

    })


    const floatingArmageddon1 = useSpring({
        loop: true,
        config: {
            mass: 15,
            friction: 0,
            tension: 55,
        },

        from: { y: 0 },
        to: [
            { y: 5 },
            { y: 0 }
        ],
    })

    const floatingStyleSun = useSpring({
        loop: true,
        config: {
            mass: 15,
            friction: 0,
            tension: 40,
        },
        from: { y: 0 },
        to: [
            { y: 10 },
            { y: 0 }
        ],
    })


    return (
        <div>
            <Row>
                <Col style={{ display: 'flex', justifyContent: "center" }}>
                    <animated.div
                        style={{
                            ...starsOpacity1,
                        }}
                    >
                        <img src='images/emptystar.png' style={{ width: "55px", height: "55px", position: 'relative', top: "80%" }} />
                    </animated.div>
                    <animated.div
                        style={{
                            ...starsOpacity1,
                            position: 'relative', left: "30%", bottom: "0%" 
                        }}
                    >
                        <img src='images/emptystar.png' style={{ width: "35px", height: "35px", }} />
                    </animated.div>

                    
               
                    <animated.div
                        style={{
                            ...upAndDownArmageddon,
                            position: 'relative',
                            bottom: '100%',
                            left: "30%",

                        }}
                    >
                        <animated.div
                            style={{
                                ...floatingArmageddon1,
                            }}

                        >
                            <img src='images/armageddon.png' style={{ width: "75px", height: "55px", }} />
                        </animated.div>
                    </animated.div>


                </Col>

                <Col style={{ display: 'flex', justifyContent: "center" }}>
                    <animated.div
                    style={{
                        ...starsOpacity3,
                        position: 'relative', right: "20%", top: "110%"
                    }}
                    >
                        <img src='images/dust3.png' style={{ width: "20px", height: "20px",  }} />

                    </animated.div>
                    


                    <animated.div
                        style={{
                            ...upAndDownSun,
                        }}
                    >

                        <animated.div
                            style={{
                                width: 200,

                                marginTop: -100,

                                ...floatingStyleSun,
                            }}

                        >
                            <img src='images/sun.png' style={{ width: "100%" }} />
                        </animated.div>
                    </animated.div>

                    <animated.div
                        style={{
                            ...upAndDownArmageddon,
                            position: 'relative', left: "30%", top: "50%",
                        }}
                    >
                        <animated.div
                            style={{

                                ...floatingArmageddon1,
                            }}

                        >
                            <img src='images/armageddon.png' style={{ width: "50px", height: "35px" }} />
                        </animated.div>
                    </animated.div>
                        <animated.div 
                        style={{
                            ...starsOpacity3,
                            position: 'relative', left: "0%", bottom: "80%"
                        }}
                        >
                            <img src='images/dust3.png' style={{ width: "20px", height: "20px", }} />
                        </animated.div>

                    
                </Col>

                <Col style={{ display: 'flex', justifyContent: "center" }}>

                    <animated.div 
                    style={{
                        ...starsOpacity1,
                        position: 'relative', right: "20%", bottom: "130%"
                    }}
                    >
                        <img src='images/emptystar.png' style={{ width: "55px", height: "55px",  }} />
                    </animated.div>
                   
                    <animated.div
                    style={{
                        ...starsOpacity3,
                        position: 'relative', right: "10%", top: "80%" 
                    }}
                    >
                        <img src='images/dust3.png' style={{ width: "20px", height: "20px",}} />
                    </animated.div>

                    
                </Col>

            </Row>
        </div>
    )
}

export default HomeMiddle
