import styled from "styled-components"
import { ReactComponent as SearchSVG } from '../../../assets/icons/search.svg'


export const InputSearch = () => {
  return (
    <SearchDiv>
        <Input placeholder='Search...'/>
        <Div>
          <SearchSVG />
        </Div>
    </SearchDiv>
  )
}

const Input = styled.input`
  width: 364px;
  height: 40px;
  font-weight: 500;
  font-size: 14px;
  color: #303030;
  padding: 8px 12px;
  background: #FFFFFF;
  border: 0.5px solid #D1D1D1;
  font-family: 'Avenir';
  box-sizing: border-box;
  border-radius: 4px;
  outline: 0;
  ::placeholder {
    font-weight: 500;
    font-size: 14px;
    color: #707070;
  }
`
const SearchDiv = styled.div`
  position: relative;
`
const Div = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
`