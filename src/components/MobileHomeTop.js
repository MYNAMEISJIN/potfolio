import React from 'react'
import { Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import { useSpring, animated } from '@react-spring/web'

const MobileHomeTop = () => {

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

    const starsOpacity1 = useSpring({ //for empty stars
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 1000,
    })
    const starsOpacity3 = useSpring({ //for dusts
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 3000,
    })
    const starsOpacity2 = useSpring({//for stars
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 2000,
    })

    const upAndDown1 = useSpring({
        from: { y: -400 },
        to: { y: 0 },
        delay: 3800,
    })



    return (
        <div>
            <Row className='mb-5 mt-5'>
                <Col style={{ display: "flex", justifyContent: "center" }}>
                    <animated.div
                        style={{
                            ...upAndDown1
                        }}
                    >
                        <animated.div
                            style={{
                                ...floatingStyle1_3,
                            }}
                        >

                            <img src='images/saturn.png' style={{ width: "100px" }} />
                        </animated.div>
                    </animated.div>


                </Col>
                <Col style={{ display: "flex", justifyContent: "space-around" }}>
                    <animated.div
                        style={{
                            ...starsOpacity3, position: 'relative', left: "0%", top: "160%"
                        }}
                    >
                        <img src='images/dust3.png' style={{ width: "25px", height: "25px", }} />
                    </animated.div>

                    <animated.div
                        style={{
                            ...starsOpacity2, position: 'relative', right: "10%", bottom: "70%"
                        }}
                    >
                        <img src='images/star2.png' style={{ width: "40px", height: "40px", }} />
                    </animated.div>


                    <animated.div
                        style={{
                            ...starsOpacity1, position: 'relative', right: "10%"
                        }}
                    >
                        <img src='images/emptystar.png' style={{ width: "35px", height: "35px", }} />
                    </animated.div>



                </Col>

            </Row>
        </div>
    )
}

export default MobileHomeTop
