import styled from "styled-components"
import { ReactComponent as TeamSVG } from '../../../assets/icons/hamburger_teams.svg'
import { ReactComponent as PlayerSVG } from '../../../assets/icons/hamburger_players.svg'
import { ReactComponent as LogOutSVG } from '../../../assets/icons/hamburger_out.svg'

const Menu = styled.section`
  box-sizing: border-box;
  height: 992px;
  width: 140px;
  display: flex;
  padding: 32pX 40px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Block = styled.div`
  height: 90px;
  width: 46px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const TextTeams = styled.div`
  font-family: 'Avenir';
  font-weight: 500;
  font-size: 12px;
  color: #9C9C9C;
`
const TextPlayers = styled.div`
  font-family: 'Avenir';
  font-weight: 500;
  font-size: 12px;
  color: #E4163A;
`
const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const FooterText = styled.div`
  font-family: 'Avenir';
  font-weight: 500;
  font-size: 12px;
  color: #FF768E;
`

const HamburgerMenu = () => {
  return (
    <Menu>
      <Header>
        <Block>
          <TeamSVG />
          <TextTeams>Teams</TextTeams>
        </Block>
        <Block>
          <PlayerSVG />
          <TextPlayers>Players</TextPlayers>
        </Block>
      </Header>
      <Footer>
        <LogOutSVG/>
        <FooterText>Sign out</FooterText>
      </Footer>
    </Menu>
  )
}

export {HamburgerMenu}