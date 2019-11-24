import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import styled, { keyframes } from "styled-components"
import Eyes from "../images/eyez.svg"
import NorthAmer from "../images/USA.svg"
import Europa from "../images/EU.svg"
import Airplane from "../images/Airplanes.svg"
const flypath = keyframes`
{
  0% {
      transform  : rotateY(0deg) translateZ(140px) scale3d(1, 1, 1);
      opacity    : 1.0;
  }

  50% {
      /* This line is different for -webkit! */
      -webkit-transform : rotateY(180deg) translateZ(140px) scale3d(0.5, 0.5, 0.5);
      transform  : rotateY(180deg) translateZ(140px) scale3d(1, 1, 1);
      opacity    : 0.5;
  }

  100% {
      transform  : rotateY(360deg) translateZ(140px) scale3d(1, 1, 1);
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

const Spinz = styled(Eyes)`
  width: 600px;
  height: 300px;
  & #right-pupil {
    animation: ${shakeEm} 2s cubic-bezier(0.36, 0.07, 0.19, 0.97) both infinite;
  }
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

const FlyPlane = styled(Airplane)`
  animation: ${flypath} 2500ms infinite linear;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
`
const EuropeDiv = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: -1;
`
const EuropaMap = styled(Europa)`
  width: 401px;
  height: 420px;
  & #spain {
    animation: ${spin} 2s linear infinite;
    transform-origin: center;
    transform-box: fill-box;
  }
`
const NorthAmericaDiv = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
`

const NorthAmerMap = styled(NorthAmer)`
  width: 459px;
  height: 393px;
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
const NameH1 = styled.h1`
  text-shadow: 2px 2px 8px #aaf499;
`

const Landing = () => {
  return (
    <>
      <SEO title="Landing" />
      <Row>
        <FlexColumn>
          <FlexRow>
            <Spinz />
          </FlexRow>
          <FlexRow>
            <FlyPlane />
            <NameH1>Trev B</NameH1>
          </FlexRow>
          <FlexRow>
            <h3>development portfolio:</h3>
          </FlexRow>
          <FlexRow>
            <Button to="/projects">Enter @ Own Risk</Button>
          </FlexRow>
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
