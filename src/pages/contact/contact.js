import React, { useState } from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import AppDiv from "../../reusable/AppDiv"
import ContactInput from "../../components/form"
import styled from "styled-components"
import FlexColumn from "../../reusable/FlexColumn"

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
`
const Button = styled.button`
  padding: 10px 20px;
  border-radius: 4px;
  border: 0.5px solid #ffffffa5;
  outline: none;
  background: transparent;
  color: #ffffffa5;
  :active {
    border: 0.5px solid #7fdbff;
  }
  :hover {
    border: 0.5px solid #7fdbff;
    margin-top: -0.5px;
  }
`

const Contact = () => {
  const [name, setName] = useState("")
  const [contact, setContact] = useState("")
  const [message, setMessage] = useState("")

  return (
    <Layout>
      <SEO title="contact" />
      <AppDiv>
        <FlexColumn
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h2>Contact Me</h2>
          <Form netlify>
            <ContactInput
              onChange={e => {
                setName(e.target.value)
              }}
              value={name}
              id="name"
              name="Name"
              type="text"
              placeholder="Name"
            />
            <ContactInput
              onChange={event => {
                setContact(event.target.value)
              }}
              value={contact}
              id="contact"
              name="Contact"
              type="text"
              placeholder="Contact"
            />
            <ContactInput
              onChange={e => {
                setMessage(e.target.value)
              }}
              value={message}
              id="message"
              name="Message"
              type="text"
              placeholder="Message"
            />
            <Button>Submit Form</Button>
          </Form>
        </FlexColumn>
      </AppDiv>
    </Layout>
  )
}

export default Contact
