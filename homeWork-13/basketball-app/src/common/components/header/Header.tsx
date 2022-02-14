import styled from "styled-components"
import { ReactComponent as LogoSVG} from '../../../assets/images/logo.svg'
import { ReactComponent as ProfileSVG} from '../../../assets/icons/profile.svg'


const HeaderDiv = styled.header`
  display: flex;
  justify-content: space-between;
  aligh-items: center;
  box-sizing: border-box;
  padding: 16px 51px;
  width: 100%;
  height: 80px;
  background: #FFFFFF;
  box-shadow: 0px 1px 10px rgba(209, 209, 209, 0.5);
`
const User = styled.div`
  margin-top: 13px;
  font-family: 'Avenir';
  font-weight: 500;
  font-size: 14px;
  color: #303030;
`
const ProfileBlock = styled.div`
  margin-top: 4px;
  font-family: 'Avenir';
  width: 36px;
  height: 36px;
`
const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  aligh-items: center;
  width: 125px;
`
const SvgDiv = styled.div``

const Header = () => {
  return (
    <HeaderDiv>
        <SvgDiv><LogoSVG/></SvgDiv>
        <HeaderWrap>
          <User>John Smith</User>
            <ProfileBlock>
              <ProfileSVG/>
            </ProfileBlock>
        </HeaderWrap>
    </HeaderDiv>
  )
}

export {Header}