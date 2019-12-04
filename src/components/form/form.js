import React from "react"
import styled from "styled-components"
const Input = styled.input`
  width: 100%;
  padding: 10px 20px 10px 10px;
  text-align: left;
  display: flex;
  flex-direction: row;
  margin: 12px 10px;
  border-radius: 4px;
  border: solid 0.5px;
  background: none;
  outline: none;
  color: #ffffffa5;
  ::placeholder {
    color: #ffffffa0;
  }
  :focus {
    border: 0.5px solid #7fdbff;
  }
`
const Label = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
`
const ContactInput = props => {
  return (
    <>
      <Label>{props.name}</Label>
      <Input
        id={props.id}
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
      />
    </>
  )
}
export default ContactInput
