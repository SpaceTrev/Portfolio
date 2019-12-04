import React from "react"
import LinkButton from "./LinkButton"
import FlexRow from "./FlexRow"
import FlexColumn from "./FlexColumn"
import styled from "styled-components"
const FlexColumnCentered = styled(FlexColumn)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  margin: 0px 5px;
  min-height: calc(100vh - 75px);
`
const HeaderCard = props => (
  <FlexColumnCentered>
    <FlexRow>
      <h1>{props.name}</h1>
    </FlexRow>
    <FlexRow>
      <p>
        {props.greeting} currently {props.status}
      </p>
    </FlexRow>
    <FlexRow>
      <LinkButton text="Click me" goTo={`/${props.to}`} />
    </FlexRow>
  </FlexColumnCentered>
)
export default HeaderCard
