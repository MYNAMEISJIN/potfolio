import React from 'react'
import { Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import { useSpring, animated } from '@react-spring/web'

const MobileHomeBottom = () => {

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

    const upAndDown3 = useSpring({
        from: { y: -1000 },
        to: { y: 0 },
        delay: 5400,
    })


    return (
        <div>
            <Row>
                <Col style={{ display: "flex", justifyContent: "center" }}>

                    <animated.div style={{ ...starsOpacity3, position: 'relative', bottom: "20%" }}>
                        <img src='images/dust3.png' style={{ width: "30px", height: "30px", }} />
                    </animated.div>


                </Col>
                <Col style={{ display: "flex", justifyContent: "center" }}>
                    <animated.div style={{ ...starsOpacity2, position: 'relative', top: "80%", right: "20%" }}>
                        <img src='images/star2.png' style={{ width: "40px", height: "40px", }} />
                    </animated.div>
                    <animated.div
                        style={{
                            ...upAndDown3,
                        }}
                    >
                        <animated.div
                            style={{
                                ...floatingStyle3_1,
                            }}
                        >
                            <img src='images/jupiter.png' style={{ width: "90px" }} />
                        </animated.div>
                    </animated.div>



                </Col>

            </Row>
        </div>
    )
}

export default MobileHomeBottom
