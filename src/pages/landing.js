import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import styled from "styled-components"
const Row = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
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
const Landing = () => {
  const [effectIsWorking, setEffectIsWorking] = useState(false)
  useEffect(() => {
    setEffectIsWorking(true)
  }, [])
  return (
    <>
      <SEO title="Landing" />
      <Row>
        <FlexColumn>
          <FlexRow>
            <h1>Trev B</h1>
          </FlexRow>
          <FlexRow>
            <h3>development portfolio:</h3>
          </FlexRow>
          <FlexRow>
            <Button to="/projects">Enter @ Own Risk</Button>
            <button
              type="button"
              onClick={e => {
                e.preventDefault()
                console.log(effectIsWorking)
              }}
            >
              Click for console.log
            </button>
          </FlexRow>
        </FlexColumn>
      </Row>
    </>
  )
}

export default Landing
