import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import styled, { keyframes } from "styled-components"
import Eyes from "../images/eyeballz.svg"
import NorthAmer from "../images/USA.svg"
import Europa from "../images/EU.svg"
import Airplane from "../images/aero.svg"
import Cloud from "../images/cloud-boi.svg"
// import Sun from "../images/sonnyboi.svg"
// import Lunar from "../images/lunar.svg"

const flypath = keyframes`
{
  0% {
      transform  : translateX(8vw) rotateY(0deg) translateZ(140px) scale3d(1, 1, 1);
      opacity    : 1.0;
  }
  50% {
      transform  : translateX(80vw) translateZ(140px) scale3d(1, 1, 1);
      opacity    : 0.5;
  }
  100% {
      transform  : translateX(8vw) rotateY(180deg) translateZ(140px) scale3d(1, 1, 1);
      opacity    : 1.0;
  }
}
`
const flypathMin = keyframes`
{
  0% {
      transform  : translateX(-39vw) rotateY(0deg) translateZ(140px) scale3d(1, 1, 1);
      opacity    : 1.0;
  }
  50% {
      transform  : translateX(25vw) translateZ(140px) scale3d(1, 1, 1);
      opacity    : 0.5;
  }
  100% {
      transform  : translateX(-39vw) rotateY(180deg) translateZ(140px) scale3d(1, 1, 1);
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
    background: #181A1B;
  }
  4% {
    background: linear-gradient(to bottom, #181111 80%, #962f1f 100%);
  }
  8% {
    background: linear-gradient(to bottom, #962f1f 50%, #962e1a 100%);
  }
  12% {
    background: linear-gradient(
      to bottom,
      #962e1a 30%,
      #c5752d 80%,
      #ff7034 100%
    );
  }
  16% {
    background: linear-gradient(
      to bottom,
      #c5752d 0%,
      #ff7034 30%,
      #c5752d 80%,
      #ffaa11 100%
    );
  }
  20% {
    background: linear-gradient(
      to bottom,
      #800000 0%,
      #c5752d 30%,
      #ffaa11 60%,
      #4f4f47 80%,
      #163c52 100%
    );
  }
  24% {
    background: linear-gradient(
      to bottom,
      #ffaa11 0%,
      #4f4f47 30%,
      #154277 70%,
      #1e528e 100%
    );
  }
  28% {
    background: linear-gradient(
      to bottom,
      #e9ce5d 0%,
      #154277 50%,
      #1e528e 100%
    );
  }
  32% {
    background: linear-gradient(
      to bottom,
      #154277 0%,
      #265889 50%,
      #1e528e 100%
    );
  }
  36% {
    background: linear-gradient(
      to bottom,
      #2473ab 0%,
      #1e528e 70%,
      #5b7983 100%
    );
  }
  40% {
    background: linear-gradient(to bottom, #2d91c2 0%, #1e528e 100%);
  }
  44% {
    background: linear-gradient(to bottom, #57c1eb 0%, #246fa8 100%);
  }
  48% {
    background: linear-gradient(to bottom, #57c1eb 0%, #38a3d1 100%);
  }
  52% {
    background: linear-gradient(to bottom, #1e528e 0%, #2d91c2 100%);
  }
  56% {
    background: linear-gradient(to bottom, #246fa8 0%, #1e528e 100%);
  }
  60% {
    background: linear-gradient(
      to bottom,
      #1e528e 1%,
      #246fa8 70%,
      #757abf 100%
    );
  }
  64% {
    background: linear-gradient(to bottom, #246fa8 0%, #757abf 100%);
  }
  68% {
    background: linear-gradient(
      to bottom,
      #246fa8 0%,
      #8583be 60%,
      #ffaa11 100%
    );
  }
  72% {
    background: linear-gradient(
      to bottom,
      #8583be 0%,
      #ffaa11 50%,
      #800000 100%
    );
  }

  76% {
    background: linear-gradient(
      to bottom,
      #ffaa11 0%,
      #800000 80%,
      #800000 100%
    );
  }
  80% {
    background: linear-gradient(to bottom, #800000 0%, #20202c 100%);
  }
  84% {
    background: linear-gradient(to bottom, #800034 10%, #20202c 100%);
  }

  88% {
    background: linear-gradient(to bottom, #181A1B 85%, #191621 100%);
  }
  92% {
    background: linear-gradient(to bottom, #181A1B 85%, #181A1B 100%);
  }
  96% {
    background: linear-gradient(to bottom, #181A1B 85%, #181A1B 100%);
  }
  100% {
    background: #181A1B;
  }
`
// const flightArch = keyframes`
//   0% {
//    align-items: center;
//   }
//   25% {
//     align-items: flex-start;
//   }
//   50% {
//     align-items: center;
//   }
// `

const cloudAnimations = keyframes`
  0% {
    margin-left: -100%;
  }
  100% {
    margin-left: 100%;
  }
`
const Row = styled.div`
  width: 100vw;
  animation: ${colorShift} 33s infinite ease-in-out;
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
// const SunnyBoi = styled(Sun)`
//   animation: ${cloudAnimations} 10s linear infinite;
// `
// const LoonyBoi = styled(Lunar)`
//   animation: ${cloudAnimations} 11s 11s linear infinite;
// `

const PlaneDiv = styled(FlexRow)`
  margin: 0;
  min-width: 100vw;
`
const FlyPlane = styled(Airplane)`
  position: absolute;
  bottom: 10rem;
  left: 0;
  z-index: 1;
  height: 75px;
  width: 75px;
  animation: ${flypath} 6s infinite linear;
  @media screen and (max-width: 1439px) {
    width: 60px !important;
    height: 60px !important;
    bottom: 9rem;
  }
  /* @media screen and (max-width: 1130px) {
    animation: ${flypathMin} 6s infinite linear;
  } */
  @media screen and (max-width: 900px) {
   display: none;
  }
`
const CloudDiv = styled(FlexRow)`
  position: absolute;
  top: 3rem;
  min-width: 100vw;
`

const CloudMoves = styled(Cloud)`
  fill: #ffffff;
  animation: ${cloudAnimations} 10s linear infinite;
`

const EuropeDiv = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  width: 401px;
  height: 420px;
  @media screen and (max-width: 1439px) {
    width: 301px !important;
    height: 320px !important;
    /* bottom: 7rem; */
  }
  @media screen and (max-width: 900px) {
    width: 201px !important;
    height: 220px !important;
    /* bottom: 8rem; */
  }
  @media screen and (max-width: 900px) {
    display: none;
  }
`
const EuropaMap = styled(Europa)`
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
  bottom: 5rem;
  left: 1rem;
  width: 401px;
  height: 241px;
  @media screen and (max-width: 1439px) {
    width: 301px !important;
    height: 141px !important;
    bottom: 8rem;
  }
  @media screen and (max-width: 900px) {
    width: 201px !important;
    height: 41px !important;
    /* bottom: 15rem; */
  }
  @media screen and (max-width: 900px) {
    display: none;
  }
`

const NorthAmerMap = styled(NorthAmer)`
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
