import React from "react"
import LinkButton from "../reusable/LinkButton"
import FlexRow from "../reusable/FlexRow"
import FlexColumn from "../reusable/FlexColumn"
import styled from "styled-components"
const FlexColumnCentered = styled(FlexColumn)`
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0px 5px;
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
