import React from "react"
import TwitterIcon from "../../images/twitter.svg"
import FbIcon from "../../images/facebook.svg"
import styled from "styled-components"
const Social = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
`
const H3 = styled.h3`
  text-align: center;
  font-weight: 400;
`
const LI = styled.li`
  margin-right: 10px;
  border-radius: 50%;
  width: 30px;
  height: 30px;
`
const A = styled.a``
const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`

const Share = props => {
  const twitter = `https://twitter.com/intent/tweet?url=${props.url +
    props.pathname}&text=${props.title} by @intlspace`

  const fb = `https://www.facebook.com/sharer/sharer.php?u=${props.url +
    props.pathname}`

  return (
    <Div>
      <H3>Share</H3>
      <Social>
        <LI>
          <A href={fb} target="blank">
            <FbIcon />
          </A>
        </LI>
        <LI>
          <A href={twitter} target="blank">
            <TwitterIcon />
          </A>
        </LI>
      </Social>
    </Div>
  )
}

export default Share
