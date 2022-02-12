import styled from "styled-components"

const Button = styled.button`
  margin-top: 10px;
  width: 365px;
  height: 40px;
  background: #E4163A;
  border-radius: 4px;
  font-family: 'Avenir';
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;
  text-align: center;
  color: #FFFFFF;
  border: none;
  :hover {
    background: #FF5761;
  }
  :active {
    background: #C60E2E;
  }
  :disabled {
    background: #F6F6F6;
    color: #D1D1D1;
  }
`

const ButtonSignIn = () => {
  return (
    <Button>Sign In</Button>
  )
}

export {ButtonSignIn}