import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import styled, { keyframes } from "styled-components"
import Eyes from "../images/eyeballz.svg"
import NorthAmer from "../images/USA.svg"
import Europa from "../images/EU.svg"
import Airplane from "../images/aero.svg"
import Cloud from "../images/cloud-boi.svg"
const flypath = keyframes`
{
  0% {
      transform  : translateX(-40vw) rotateY(0deg) translateZ(140px) scale3d(1, 1, 1);
      opacity    : 1.0;
  }
  50% {
      transform  : translateX(31vw) translateZ(140px) scale3d(1, 1, 1);
      opacity    : 0.5;
  }
  100% {
      transform  : translateX(-40vw) rotateY(180deg) translateZ(140px) scale3d(1, 1, 1);
      opacity    : 1.0;
  }
}
`
const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
const spinBack = keyframes`
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
`
const shakeEm = keyframes`
   {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%,
    60% {
      transform: translate3d(4px, 0, 0);
    }
  }
`
const hideshow = keyframes`
  0% {
    opacity: 1;
  }
  10% {
    opacity: 1;
  }
  15% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`
const colorShift = keyframes`
  0% {
    background: linear-gradient(90deg, #00d0ac, #060080);
  }
  25% {
    background: linear-gradient(90deg, #a266ff, #1611aa);
  }
  50% {
    background: linear-gradient(90deg, #0088D2, #1BD760);
  }
  100% {
    background: linear-gradient(90deg, #ECB22D, #060080);
  }
`

const cloudAnimations = keyframes`
  0% {
    margin-left: -100%;
  }
  100% {
    margin-left: 100%;
  }
`
const Row = styled.div`
  width: 100%;
  animation: ${colorShift} 10s infinite ease-in-out;
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  z-index: -1 !important;
`
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`
const Spinz = styled(Eyes)`
  width: 300px;
  height: 150px;
  /* & #right-pupil {
    animation: ${shakeEm} 2s cubic-bezier(0.36, 0.07, 0.19, 0.97) both infinite;
  } */
  & #left-pupil {
    animation: ${shakeEm} 1s cubic-bezier(1, -0.46, 0.07, 1.28) both infinite;
  }
  & #right-eye {
    animation: ${spin} 2s linear infinite;
    transform-origin: center;
    transform-box: fill-box;
  }
  & #left-eye {
    animation: ${spinBack} 3s linear infinite;
    transform-origin: center;
    transform-box: fill-box;
  }
`
const PlaneDiv = styled(FlexRow)`
  margin: 0;
  display: flex;
  flex-direction: flex-row;
  min-width: 100vw;
  z-index: 1;
`
const FlyPlane = styled(Airplane)`
  height: 75px;
  width: 75px;
  animation: ${flypath} 6s infinite linear;
`
const CloudDiv = styled(FlexRow)`
  min-width: 100vw;
`

const CloudMoves = styled(Cloud)`
  fill: #ffffff;
  animation: ${cloudAnimations} 10s linear infinite;
`

const EuropeDiv = styled.div`
  position: absolute;
  bottom: 11rem;
  right: 0;
`
const EuropaMap = styled(Europa)`
  width: 401px;
  height: 420px;
  & #spain {
    transform-origin: center;
    transform-box: fill-box;
    &:hover {
      animation: ${spin} 2s linear infinite;
    }
  }
`
const NorthAmericaDiv = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 0;
`

const NorthAmerMap = styled(NorthAmer)`
  width: 459px;
  height: 393px;
  & #CO {
    fill: #c5c5c5 !important;
    transform-origin: center;
    transform-box: fill-box;
    &:hover {
      animation: ${spin} 2.3s linear infinite;
    }
  }
`

const Button = styled(Link)`
  font-style: none;
  text-decoration: none;
  color: #ffffff;
  background: #14ccad;
  text-align: center;
  padding: 10px 0px 10px 0px;
  width: 200px;
  border-radius: 6px;
  border: none;
  outline: none;
  &:hover {
    border: 0.5px #333;
    color: #ffffff4f;
    background: #14ccad4f;
  }
`

const NameH1 = styled.h1`
  text-shadow: 2px 2px 8px #aaf499;
`

const H31 = styled.h3`
  opacity: 0;
  animation: ${hideshow} 7s ease infinite;
  transform: matrix(1 0 0 1 134.1416 285.127);
`
const H32 = styled.h3`
  opacity: 0;
  animation: ${hideshow} 7s 1.5s ease infinite;
  transform: matrix(1 0 0 1 134.1416 285.127);
`
const H33 = styled.h3`
  opacity: 0;
  animation: ${hideshow} 7s 3s ease infinite;
  transform: matrix(1 0 0 1 134.1416 285.127);
`
const H34 = styled.h3`
  opacity: 0;
  animation: ${hideshow} 7s 4.5s ease infinite;
  transform: matrix(1 0 0 1 134.1416 285.127);
`
const Landing = () => {
  return (
    <>
      <SEO title="Landing" />
      <Row>
        <FlexColumn>
          <CloudDiv>
            <CloudMoves />
          </CloudDiv>
          <FlexRow>
            <Spinz />
          </FlexRow>
          <FlexRow>
            <NameH1>Trev B</NameH1>
          </FlexRow>
          <FlexRow>
            <H31>Software Developer</H31>
            <H32>React</H32>
            <H33>graphql</H33>
            <H34>Styled-Components</H34>
          </FlexRow>
          <FlexRow>
            <Button to="/projects">Enter @ Own Risk</Button>
          </FlexRow>
          <PlaneDiv>
            <FlyPlane />
          </PlaneDiv>
        </FlexColumn>
        <EuropeDiv>
          <EuropaMap />
        </EuropeDiv>
        <NorthAmericaDiv>
          <NorthAmerMap />
        </NorthAmericaDiv>
      </Row>
    </>
  )
}

export default Landing
