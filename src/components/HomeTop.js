import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useSpring, animated } from '@react-spring/web'






const HomeTop = () => {

    const starsOpacity2 = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 2000,
    })

    const upAndDownArmageddon = useSpring({
        from: { y: -1000 },
        to: { y: 0 },
        delay: 3500,

    })
    const upAndDown1 = useSpring({
        from: { y: -400 },
        to: { y: 0 },
        delay: 4500,
    })
    const upAndDown2 = useSpring({
        from: { y: -400 },
        to: { y: 0 },
        delay: 6350,
    })
    const upAndDown3 = useSpring({
        from: { y: -400 },
        to: { y: 0 },
        delay: 6200,
    })
    const floatingStyle1_1 = useSpring({
        loop: true,
        config: {
            mass: 15,
            friction: 0,
            tension: 55,
        },

        from: { y: 0 },
        to: [
            { y: 20 },
            { y: 0 }
        ],
    })
    const floatingStyle1_2 = useSpring({
        loop: true,
        config: {
            mass: 15,
            friction: 0,
            tension: 65,
        },
        from: { y: 0 },
        to: [
            { y: 10 },
            { y: 0 }
        ],
    })
    const floatingStyle1_3 = useSpring({
        loop: true,
        config: {
            mass: 15,
            friction: 0,
            tension: 35,
        },
        from: { y: 0 },
        to: [
            { y: 17 },
            { y: 0 }
        ],
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


    return (
        <div>
            <Row>
                <Col style={{ display: 'flex', justifyContent: "center" }}>

                    <animated.div
                        style={{
                            ...upAndDown1
                        }}
                    >
                        <animated.div
                            style={{
                                width: 100,
                                marginLeft: 10,
                                ...floatingStyle1_1,
                            }}
                        >
                            <img src='images/poketmon.png' style={{ width: "100%" }} />
                        </animated.div>
                    </animated.div>

                    <animated.div
                    style={{
                        ...starsOpacity2,
                        position: 'relative', left: "20%", top: "50%"
                    }}
                    >
                        <img src='images/star2.png' style={{ width: "30px", height: "30px" }} />

                    </animated.div>
                            
                    

                </Col>



                <Col style={{ display: 'flex', justifyContent: "center" }}>


                    <animated.div
                        style={{
                            ...upAndDown2,
                        }}
                    >
                        <animated.div
                            style={{
                                width: 200,
                                marginTop: 0,

                                ...floatingStyle1_2,
                            }}
                        >
                            <img src='images/shootingstar2.png' style={{ width: "100%" }} />
                        </animated.div>
                    </animated.div>


                    <animated.div
                        style={{
                            ...upAndDownArmageddon,
                            position: 'relative', top: "80%", 
                        }}
                    >
                        <animated.div
                            style={{

                                ...floatingArmageddon1,
                            }}

                        >
                            <img src='images/armageddon2.png' style={{ width: "50px", height: "30px" }} />
                        </animated.div>

                    </animated.div>

                </Col>
                <Col style={{ display: 'flex', justifyContent: "center" }}>
                    <animated.div
                    style={{
                        ...starsOpacity2,
                        position: 'relative', right: "30%"
                    }}
                    >
                        <img src='images/star2.png' style={{ width: "30px", height: "30px" }} />
                    </animated.div>
                    
                    <animated.div
                        style={{
                            ...upAndDown3,
                        }}
                    >
                        <animated.div
                            style={{
                                width: 130,
                                marginTop: 10,

                                ...floatingStyle1_3,
                            }}

                        >
                            <img src='images/saturn.png' style={{ width: "100%" }} />
                        </animated.div>
                    </animated.div>

                    <animated.div
                    style={{
                        ...starsOpacity2,
                        position: 'relative', left: "5%", top: "80%"
                    }}
                    >
                        <img src='images/star2.png' style={{ width: "30px", height: "30px",  }} />
                    </animated.div>
                    
                </Col>
            </Row>
        </div>
    )
}

export default HomeTop
