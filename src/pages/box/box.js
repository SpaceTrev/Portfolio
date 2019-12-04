import React from "react"

import styled, { keyframes } from "styled-components"
const Div = styled.div`
  padding: 50px;
`
const morph = keyframes`
  0% {
    border-radius: 5px;
  }
  50% {
    border-radius: 50%;
  }
  100% {
    border-radius: 5px;
  }
`
// const spin = keyframes`
//   from {
//     transform: rotate(0deg);
//   }
//   to {
//     transform: rotate(360deg);
//   }
// `

const BoxyBoi = styled.div`
  display: inline-block;
  width: 200px;
  height: 200px;
  background-color: blue;
  transition: transform 3s cubic-bezier(0, 0.01, 0.2, 1);
  pointer-events: none;
  animation: ${morph} linear infinite 1s;
`
const TriggaBoi = styled.div`
  width: 240px;
  height: 240px;
  border: 20px solid #4fe;
  background: #ddd;
  &:hover ${BoxyBoi} {
    transform: translate(200px, 150px) rotate(20deg);
  }
`
const Box = () => (
  <Div>
    <TriggaBoi>
      <BoxyBoi />
    </TriggaBoi>
  </Div>
)

export default Box
