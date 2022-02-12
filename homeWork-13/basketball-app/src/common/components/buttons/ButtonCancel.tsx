import styled from 'styled-components'

const Button = styled.button`
  width: 171px;
  height: 40px;
  padding: 8px 24px;
  border: 1px solid #9C9C9C;
  box-sizing: border-box;
  border-radius: 4px;
  font-family: 'Avenir';
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;
  color: #9C9C9C;
  text-align: center;
  :hover {
    background: #D1D1D1;;
  }
  :active {
    background: #9C9C9C;
    color: #707070;
  }
  :disabled {
    background: #F6F6F6;
    color: #D1D1D1;
  }
`

const ButtonCancel = () => {
  return (
    <Button>Cancel</Button>
  )
}

export {ButtonCancel}