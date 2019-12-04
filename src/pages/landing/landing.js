import React from "react"
import { Link } from "gatsby"
import SEO from "../../components/seo"
import styled, { keyframes } from "styled-components"
import Eyes from "../../images/eyeballz.svg"
import NorthAmer from "../../images/USA.svg"
import Europa from "../../images/EU.svg"
import Airplane from "../../images/aero.svg"
import Cloud from "../../images/cloud-boi.svg"
import SpaceTrev from "../../images/SpaceTrevLogoWhite.svg"
import FlexRow from "../../reusable/FlexRow"

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
const colorShift = keyframes`
  0% {
    background: #bdc3c7; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #2c3e50,
      #bdc3c7
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #2c3e50,
      #bdc3c7
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
  10% {
    background: #0f2027; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #2c5364,
      #203a43,
      #0f2027
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #2c5364,
      #203a43,
      #0f2027
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
  20% {
    background: #2980b9; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #ffffff,
      #6dd5fa,
      #2980b9
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #ffffff,
      #6dd5fa,
      #2980b9
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
  30% {
    background: #7f7fd5; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #91eae4,
      #86a8e7,
      #7f7fd5
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #91eae4,
      #86a8e7,
      #7f7fd5
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
  40% {
    background: #005aa7; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #fffde4,
      #005aa7
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #fffde4,
      #005aa7
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
  50% {
    background: #a8c0ff; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #3f2b96,
      #a8c0ff
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #3f2b96,
      #a8c0ff
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
  60% {
    background: #74ebd5; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #acb6e5,
      #74ebd5
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #acb6e5,
      #74ebd5
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
  70% {
    background: #283c86; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #45a247,
      #283c86
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #45a247,
      #283c86
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
  80% {
    background: #000046; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #1cb5e0,
      #000046
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #1cb5e0,
      #000046
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
  90% {
    background: #0f2027; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #2c5364,
      #203a43,
      #0f2027
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #2c5364,
      #203a43,
      #0f2027
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
  100% {
    background: #bdc3c7; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #2c3e50,
      #bdc3c7
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #2c3e50,
      #bdc3c7
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
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

const changeLetter = keyframes`
  0% {
    content: "Software Developer:";
  }
  25% {
    content: "React";
  }
  50% {
    content: "graphql";
  }
  100% {
    content: "styled-components";
  }
`
const LayoutContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  font-family: Andale Mono, monospace;
  color: #fff;
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
const FlexRowCentered = styled(FlexRow)`
  align-items: center;
  justify-content: center;
`

const FlexRowWords = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 0px 20px 0px;
  &:after {
    animation: ${changeLetter} 3s linear infinite alternate;
    -webkit-animation: ${changeLetter} 3s linear infinite alternate;
    -o-animation: ${changeLetter} 3s linear infinite alternate;
    -ms-animation: ${changeLetter} 3s linear infinite alternate;
    -moz-animation: ${changeLetter} 3s linear infinite alternate;
    display: block;
    content: "Software Developer:";
    font-size: 22px;
  }
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
  }
  @media screen and (max-width: 900px) {
    width: 201px !important;
    height: 220px !important;
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
  background: #2e183b;
  text-align: center;
  padding: 10px 0px 10px 0px;
  width: 200px;
  border-radius: 6px;
  border: none;
  outline: none;
  &:hover {
    border: 0.5px #333;
    color: #ffffff4f;
    background: #2e183b4f;
  }
`

const Landing = () => {
  return (
    <LayoutContainer>
      <SEO title="Landing" />
      <Row>
        <FlexColumn>
          <CloudDiv>
            <CloudMoves />
          </CloudDiv>
          <FlexRowCentered>
            <Spinz />
          </FlexRowCentered>
          <FlexRowCentered>
            <SpaceTrev />
          </FlexRowCentered>
          <FlexRowWords></FlexRowWords>
          <FlexRowCentered>
            <Button to="/blog">Enter @ Own Risk</Button>
          </FlexRowCentered>
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
    </LayoutContainer>
  )
}

export default Landing
