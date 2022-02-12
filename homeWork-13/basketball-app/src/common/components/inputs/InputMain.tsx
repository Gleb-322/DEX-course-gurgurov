import styled from "styled-components"

const Input = styled.input`
  box-sizing: border-box;
  position: relative;
  width: 366px;
  height: 40px;
  background: #F6F6F6;
  border-radius: 4px;
  z-index: 5;
  font-family: 'Avenir';
  border: none;
  padding: 8px 12px;
  font-weight: 500;
  font-size: 14px;
  color: #303030;
  :hover {
    background: #D1D1D1;
  }
  :focus {
    box-shadow: 0px 0px 5px #D9D9D9;
    outline: 0;
  }
  :disabled {
    color: #D1D1D1;
  }
`
const Label = styled.label`
  position: relative;
`
const LabelText = styled.span`
  position: absolute;
  top: -31px;
  left: 0;
  z-index: 10;
  font-family: 'Avenir';
  font-weight: 500;
  font-size: 14px;
  color: #707070;
`
const ErrorMessage = styled.span`
  position: absolute;
  bottom: -31px;
  left: 0;
  z-index: 10;
  font-family: 'Avenir';
  font-weight: 500;
  font-size: 12px;
  color: #FF768E;
`
const InputError = styled.input`
  box-sizing: border-box;
  margin-top: 40px;
  position: relative;
  width: 366px;
  height: 40px;
  background: #F6F6F6;
  border-radius: 4px;
  z-index: 5;
  border: 1px solid #FF768E;
  padding: 8px 12px;
  font-family: 'Avenir';
  font-weight: 500;
  font-size: 14px;
  color: #303030;
  outline: 0;
`


const InputMain = () => {
  return (
    <Label>
      <LabelText>Login</LabelText>
      <Input />
    </Label>
  )
}
const InputMainError = () => {
  return (
    <Label>
      <LabelText>Login</LabelText>
      <InputError />
      <ErrorMessage>Required</ErrorMessage>
  </Label>
  )
}

export {InputMain, InputMainError}