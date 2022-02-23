import styled from 'styled-components'
import { ReactComponent as CreateSVG } from '../../../assets/icons/create.svg'
import { ReactComponent as DeleteSVG } from '../../../assets/icons/delete.svg'
import PlayerPNG  from '../../../assets/images/Player.png'

export const Player = () => {
  return (
    <PlayerItem>
      <PlayerHeader>
        <PlayerHeaderText>Players <PlayerHeaderSpan>/</PlayerHeaderSpan> Greg Whittington</PlayerHeaderText>
        <PlayerHeaderIcons>
          <CreateSVG/>
          <DeleteSVG/>
        </PlayerHeaderIcons>
      </PlayerHeader>
      <PlayerWrapper>
        <LogoDiv>
          <Img src={PlayerPNG} alt='player'/>
        </LogoDiv>
        <PlayerDescr>
          <PlayerName>Greg Whittington <NumberSpan>#22</NumberSpan></PlayerName>
          <PlayerBlock>
            <PlayerModule>
              <PlayerTitle>Position</PlayerTitle>
              <PlayerContent><Small>Forward</Small></PlayerContent>
            </PlayerModule>
            <PlayerModule>
              <PlayerTitle>Team</PlayerTitle>
              <PlayerContent><Small>Denver Nuggets</Small></PlayerContent>
            </PlayerModule>
            <PlayerModule>
              <PlayerTitle>Height</PlayerTitle>
              <PlayerContent><Small>206 cm</Small></PlayerContent>
            </PlayerModule>
            <PlayerModule>
              <PlayerTitle>Weight</PlayerTitle>
              <PlayerContent><Small>95 kg</Small></PlayerContent>
            </PlayerModule>
            <PlayerModule>
              <PlayerTitle>Age</PlayerTitle>
              <PlayerContent><Small>27</Small></PlayerContent>
            </PlayerModule>
          </PlayerBlock>
        </PlayerDescr>
      </PlayerWrapper>
    </PlayerItem>
  )
}

const PlayerItem = styled.section`
  width: 1140px;
`
const PlayerHeader = styled.header`
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
const PlayerHeaderText = styled.div`
  font-family: 'Avenir';
  font-weight: 500;
  font-size: 14px;
  color: #E4163A;
`
const PlayerHeaderSpan = styled.span`
  color: #9C9C9C;
`
const PlayerHeaderIcons = styled.div`
  width: 64px;
  display: flex;
  justify-content: space-between;
`

const PlayerDescr = styled.div`
  width: 410px;
`
const PlayerTitle = styled.div`
  font-family: 'Avenir';
  font-weight: 800;
  font-size: 24px;
  line-height: 33px;
  color: #FFFFFF;
`
const PlayerContent = styled.div`
  margin-top: 8px;
  font-family: 'Avenir';
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  color: #FFFFFF;
`

const PlayerWrapper = styled.div`
  position: relative;
  padding: 65px 140px 0px 0px;
  height: 525px;
  box-sizing: border-box;
  background: linear-gradient(276.45deg, #707070 0%, #393939 100.28%);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 0px 0px 10px 10px;
`
const LogoDiv = styled.span`
  width: 531px;
  height: 531px;
`
const Img = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
`
const PlayerName = styled.h1`
  margin: 0px;
  margin-bottom: 40px;
  font-family: 'Avenir';
  font-weight: 800;
  font-size: 36px;
  line-height: 49px;
  color: #FFFFFF;
`
const NumberSpan = styled.span`
  color: #FF5761;
`
const PlayerBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 70px;
  grid-auto-rows: 70px;
  row-gap: 54px;
  column-gap: 115px;
`
const PlayerModule = styled.div``
const Small = styled.small``

