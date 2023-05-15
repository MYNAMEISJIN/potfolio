import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useSpring, animated } from '@react-spring/web'


const HomeBottom = () => {


    const starsOpacity3 = useSpring({ //for dust
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 3000,
    })

    const starsOpacity2 = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 2000,
    })

    const starsOpacity1 = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 1000,
    })

    const upAndDownArmageddon = useSpring({
        from: { y: -1000 },
        to: { y: 0 },
        delay: 3300,

    })
    const upAndDown1 = useSpring({
        from: { y: -1000 },
        to: { y: 0 },
        delay: 6000,
    })
    const upAndDown2 = useSpring({
        from: { y: -1000 },
        to: { y: 0 },
        delay: 5300,
    })
    const upAndDown3 = useSpring({
        from: { y: -1000 },
        to: { y: 0 },
        delay: 6300,
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



    const floatingStyle3_1 = useSpring({
        loop: true,
        config: {
            mass: 15,
            friction: 0,
            tension: 30,
        },
        from: { y: 0 },
        to: [
            { y: -20 },
            { y: 0 }
        ],
    })

    const floatingStyle3_2 = useSpring({
        loop: true,
        config: {
            mass: 15,
            friction: 0,
            tension: 50,
        },
        from: { y: 0 },
        to: [
            { y: -13 },
            { y: 0 }
        ],
    })




    return (
        <div>
            <Row className='pb-5'>
                <Col style={{ display: 'flex', justifyContent: "center" }}>

                    <animated.div
                        style={{
                            ...upAndDown1,
                        }}
                    >
                        <animated.div
                            style={{
                                width: 110,
                                marginLeft: 200,
                                marginTop: -50,

                                ...floatingStyle3_1,
                            }}

                        >
                            <img src='images/jupiter.png' style={{ width: "100%" }} />
                        </animated.div>
                    </animated.div>


                    <animated.div
                        style={{
                            ...upAndDownArmageddon,
                            position: 'relative', top: "10%", left: "10%"

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
                            ...starsOpacity1,
                            position: 'relative', right: "10%", bottom: "70%"
                        }}
                    >
                        <img src='images/emptystar.png' style={{ width: "25px", height: "25px", }} />

                    </animated.div>

                    <animated.div
                        style={{

                            ...upAndDown2
                        }}
                    >
                        <animated.div
                            style={{
                                width: 170,
                                ...floatingStyle3_2,
                            }}

                        >
                            <img src='images/shootingstar.png' style={{ width: "100%" }} />
                        </animated.div>
                    </animated.div>

                    <animated.div
                        style={{
                            ...starsOpacity3,
                            position: 'relative', left: "5%", bottom: "60%"
                        }}
                    >
                        <img src='images/dust3.png' style={{ width: "20px", height: "20px", }} />
                    </animated.div>

                </Col>
                <Col style={{ display: 'flex', justifyContent: "center" }}>

                    <animated.div
                        style={{
                            ...starsOpacity2,
                            position: 'relative', right: "10%", bottom: "80%"
                        }}
                    >
                        <img src='images/star2.png' style={{ width: "30px", height: "30px", }} />

                    </animated.div>

                    <animated.div
                        style={{
                            ...upAndDown3,
                        }}
                    >

                        <animated.div
                            style={{
                                width: 130,
                                marginRight: 180,
                                marginTop: -30,

                                ...floatingStyle3_1,
                            }}

                        >
                            <img src='images/earth_with_moon.png' style={{ width: "100%" }} />
                        </animated.div>

                    </animated.div>

                </Col>
            </Row>
        </div>
    )
}

export default HomeBottom
