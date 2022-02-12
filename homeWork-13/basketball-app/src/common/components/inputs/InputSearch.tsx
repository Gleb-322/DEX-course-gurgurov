import styled from "styled-components"
import { ReactComponent as SearchSVG } from '../../../assets/icons/search.svg'

const Input = styled.input`
  margin-top: 40px;
  width: 366px;
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
const SearchDiv = styled.span`
  margin-top: 30px;
  position: relative;
`

const InputSearch = () => {
  return (
    <SearchDiv>
        <Input placeholder='Search...'/>
        <SearchSVG />
    </SearchDiv>
  )
}

export {InputSearch}