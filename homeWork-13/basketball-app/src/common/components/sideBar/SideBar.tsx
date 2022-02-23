import styled from "styled-components"
import { NavLink, useNavigate } from "react-router-dom" 
import { ReactComponent as LayoutTeamSVG } from '../../../assets/icons/layout_teams.svg'
import { ReactComponent as LayoutPlayerSVG } from '../../../assets/icons/layout_players.svg'
import { ReactComponent as LayoutLogOutSVG } from '../../../assets/icons/layout_out.svg'



// className={({ isActive }) => (isActive ? 'active' : 'inactive')}

export const SideBar = () => {

  const signOut = useNavigate();
  const handlerSingOut = () => {
    localStorage.clear();
    signOut("/signIn");
  };

  return (
    <Menu>
      <Header>
        <Block>
          <NavLink to='/teams' >
            <LayoutTeamSVG />
            <TextTeams>Teams</TextTeams>
          </NavLink>
        </Block>
        <Block>
          <NavLink to='/players' >
            <LayoutPlayerSVG />
            <TextPlayers>Players</TextPlayers>
          </NavLink>
        </Block>
      </Header>
      <Footer>
        <div onClick={handlerSingOut}>
          <LayoutLogOutSVG/>
          <FooterText>Sign out</FooterText>
        </div>
      </Footer>
    </Menu>
  )
}


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
