import React from "react"
import styled from "styled-components"
import Lunar from "../../images/lunar.svg"
import { Github } from "styled-icons/boxicons-logos/Github"
const Card = styled.div`
  display: flex;
  flex-flow: column wrap;
  border: 0.5px solid #7fdbff;
  border-radius: 2px;
  margin: 20px 20px;
  padding: 25px 30px 75px 30px;
  width: 35%;
  transition: width 3s;
  @media screen and (max-width: 1250px) {
    width: 40%;
  }
  @media screen and (max-width: 1000px) {
    width: 65%;
  }
  @media screen and (max-width: 700px) {
    width: 85%;
    padding: 25px 15px 75px 15px;
  }
`
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
`
const CardTitleDiv = styled.div`
  /* width: 100%; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const CardTitle = styled.h2``
const CardSubHeader = styled.h3``
const Para = styled.span`
  font-size: 14px;
  padding: 10px 10px;
  @media screen and (max-width: 800px) {
    font-size: 12px;
  }
`
const SmallPara = styled.span`
  font-size: 12px;
  padding: 10px 10px;
`
const UL = styled.ul``

const AboutMe = () => (
  <Card>
    <CardTitleDiv>
      <CardTitle>Trev B</CardTitle>
    </CardTitleDiv>
    <FlexRow>
      <CardSubHeader>Software Developer:</CardSubHeader>
    </FlexRow>
    <FlexRow>
      <FlexColumn>
        <Lunar />
      </FlexColumn>
      <FlexColumn>
        <Para>
          Pommy ipsum. Jolly off with her head accordingly pork scratchings red
          telephone box gobsmacked pie-eyed Bad Wolf blimey got a lot of brass,
          rubbish scally and through the dales pigeons in Trafalgar Square it's
          the bees knees fancied a flutter have a gander.
        </Para>
      </FlexColumn>
    </FlexRow>
    <FlexRow>
      <Para>
        Pommy ipsum. Jolly off with her head accordingly pork scratchings red
        telephone box gobsmacked pie-eyed Bad Wolf blimey got a lot of brass,
        rubbish scally and through the dales pigeons in Trafalgar Square it's
        the bees knees fancied a flutter have a gander.
      </Para>
      <Para>
        Blimey yorkshire mixture and thus bangers and mash one would like mush
        copper, beefeater Shakespeare pikey curry sauce ee bah gum rivetting
        stuff loo, two weeks on't trot ee bah gum stiff upper lip ever so lovely
        up the duff.
      </Para>
      <Para>
        Doing my nut in challenge you to a duel conkers bloke morris dancers
        crisps working class, Geordie one off bog off a tenner.
      </Para>
    </FlexRow>
    <FlexRow>
      <Github />
    </FlexRow>
  </Card>
)

export default AboutMe
