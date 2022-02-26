import styled, {css} from 'styled-components'

export const ButtonCancel = () => {
  return (
    <ButtonC>Cancel</ButtonC>
  )
}

export const ButtonSave = () => {
  return (
    <ButtonS>Save</ButtonS>
  )
}

const StylesButton = css`
  width: 171px;
  height: 40px;
  padding: 8px 24px;
  box-sizing: border-box;
  border-radius: 4px;
  font-family: 'Avenir';
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;
  text-align: center;
`

const ButtonC = styled.button`
  ${StylesButton}
  border: 1px solid #9C9C9C;
  color: #9C9C9C;
  :hover {
    background: #D1D1D1;
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
const ButtonS = styled.button`
  ${StylesButton}
  border: none;
  color: #FFFFFF;
  background: #E4163A;
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