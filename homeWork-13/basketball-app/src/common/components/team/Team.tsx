import styled from "styled-components"

import { ReactComponent as CreateSVG } from '../../../assets/icons/create.svg'
import { ReactComponent as DeleteSVG } from '../../../assets/icons/delete.svg'
import TeamPNG from '../../../assets/images/Team.png'


export const Team = () => {
  return (
    <TeamItem>
      <TeamHeader>
        <TeamHeaderText>Teams <TeamHeaderSpan>/</TeamHeaderSpan> Denver Nuggets</TeamHeaderText>
        <TeamHeaderIcons>
          <CreateSVG />
          <DeleteSVG />
        </TeamHeaderIcons>
      </TeamHeader>
      <TeamWrapper>
        <SvgDiv>
          <Img src={TeamPNG} alt='team'/>
        </SvgDiv>
        <TeamDescr>
          <TeamName>Denver Nuggets</TeamName>
          <TeamBlock>
            <TeamModule>
              <TeamTitle>Year of foundation</TeamTitle>
              <TeamContent><Small>1976</Small></TeamContent>
            </TeamModule>
            <TeamModule>
              <TeamTitle>Division</TeamTitle>
              <TeamContent><Small>Northwestern</Small></TeamContent>
            </TeamModule>
            <TeamModule>
              <TeamTitle>Conference</TeamTitle>
              <TeamContent><Small>Western</Small></TeamContent>
            </TeamModule>
          </TeamBlock>
        </TeamDescr>
      </TeamWrapper>
    </TeamItem>
  )
}

const TeamItem = styled.section`
  width: 1140px;
`
const TeamHeader = styled.header`
  display: flex;
  height: 70px;
  width: 100%;
  justify-content: space-between;
  aligh-items: center;
  padding: 24px 32px;
  background: #FFFFFF;
  border: 0.5px solid #9C9C9C;
  box-sizing: border-box;
  border-radius: 10px 10px 0px 0px;
`
const TeamHeaderText = styled.div`
  font-family: 'Avenir';
  font-weight: 500;
  font-size: 14px;
  color: #E4163A;
`
const TeamHeaderSpan = styled.span`
  color: #9C9C9C;
`
const TeamHeaderIcons = styled.div`
  width: 64px;
  display: flex;
  justify-content: space-between;
`
const SvgDiv = styled.div`
  
`
const TeamWrapper = styled.div`
  padding: 65px 240px 65px 140px;
  height: 405px;
  box-sizing: border-box;
  background: linear-gradient(276.45deg, #707070 0%, #393939 100.28%);
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const TeamDescr = styled.div`
  width: 410px;
`
const TeamName = styled.h1`
  margin: 0px;
  font-family: 'Avenir';
  font-weight: 800;
  font-size: 36px;
  line-height: 49px;
  color: #FFFFFF;
`
const TeamBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
  width: 100%;
`
const TeamModule = styled.div`
  margin-top: 45px;
`
const TeamTitle = styled.div`
  font-family: 'Avenir';
  font-weight: 800;
  font-size: 24px;
  line-height: 33px;
  color: #FFFFFF;
`
const TeamContent = styled.div`
  margin-top: 8px;
  font-family: 'Avenir';
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  color: #FFFFFF;
`
const Small = styled.small``

const Img = styled.img``
