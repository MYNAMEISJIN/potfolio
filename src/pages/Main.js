import React from 'react'
import styled from 'styled-components'
import Home from './Home'
import About from './About'
import Project from './Project'
import Skill from './Skill'
import {
  Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn,
  MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut
} from "react-scroll-motion";




const SectionForHome = styled.section`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
  margin-top:58px;


`
const SectionForAbout = styled.section`
position: relative;
z-index: 5;
 margin-top:100vh;
 min-height:100vh;
max-height:100%;

`
const SectionForProject = styled.section`
  position: relative;
  z-index: 5;
`
const SectionForSkill = styled.section`
 position: sticky;
  bottom: 0;
  width:100%;
  height:100vh;

  z-index: 1;
`

const Main = () => {





  return (
    <div>
      <ScrollContainer>

        <SectionForHome id='home'>

          <Home />
        </SectionForHome>

        <SectionForAbout id='about'>
          <About />
        </SectionForAbout>

        <SectionForProject id='project'>
          <Project />
        </SectionForProject>

        <SectionForSkill id='skill'>

          <Skill />
        </SectionForSkill>

      </ScrollContainer>






    </div>
  )
}

export default Main
