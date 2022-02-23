import styled from "styled-components"

const Button = styled.button`
  display: flex;
  cursor: pointer;
  justify-content: flex-start;
  align-items: center;
  background: #E4163A;
  width: 104px;
  height: 40px;
  border-radius: 4px;
  padding: 8px 24px;
  font-family: 'Avenir';
  font-weight: 500;
  font-size: 15px;
  color: #FFFFFF;
  position: relative;
  border: none;
  ::after {
    content: '';
    position: absolute;
    right: 29px;
    bottom: 19px;
    width: 10px;
    height: 1.5px;
    background-color: #FFF;
    border-radius: 1px;
  }
  ::before {
    content: '';
    position: absolute;
    right: 33px;
    top: 15px;
    width: 1.5px;
    height: 10px;
    background-color: #FFF;
    border-radius: 1px;
  }
  :hover {
    background: #FF5761;
  }
  :active {
    background: #C60E2E;
  }
  :disabled {
    color: #D1D1D1;
    background: #F6F6F6;
      ::before,::after {
      background-color: #D1D1D1;
    }
  }
`
const Block = styled.div``

const ButtonAdd = () => {
  return (
    <Block>
        <Button >
          Add
        </Button>
    </Block>
  )
}

export {ButtonAdd}