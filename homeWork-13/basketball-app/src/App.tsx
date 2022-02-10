import './App.css';
import styled from 'styled-components'
//@ts-ignore
import logo from './assests/images/logo.png'
//@ts-ignore
import teamLogo from './assests/images/team_logo.png'
//@ts-ignore
import profile from './assests/icons/profile.png'
//@ts-ignore
import edit from './assests/icons/create.png'
//@ts-ignore
import deleteI from './assests/icons/delete.png'
//@ts-ignore
import playerLogo from './assests/images/player_logo.png'
//@ts-ignore 
import add from './assests/icons/add.svg'
//@ts-ignore 
import search from './assests/icons/search_rounded.svg'
//@ts-ignore
import hamburgerIconTeams from './assests/icons/hamburger_teams.svg'
//@ts-ignore
import hamburgerIconPlayers from './assests/icons/hamburger_players.svg'
//@ts-ignore
import hamburgerIconOut from './assests/icons/hamburger_out.svg'

const Container = styled.div`
  box-sizing: border-box;
  padding: 100px 30px;
`

// Inputs
const Input = styled.input`
  box-sizing: border-box;
  position: relative;
  width: 366px;
  height: 40px;
  background: #F6F6F6;
  border-radius: 4px;
  z-index: 5;
  font-family: 'Avenir';
  border: none;
  padding: 8px 12px;
  font-weight: 500;
  font-size: 14px;
  color: #303030;
  :hover {
    background: #D1D1D1;
  }
  :focus {
    box-shadow: 0px 0px 5px #D9D9D9;
    outline: 0;
  }
  :disabled {
    color: #D1D1D1;
  }
`


const Label = styled.label`
  position: relative;
`

const LabelText = styled.span`
  position: absolute;
  top: -31px;
  left: 0;
  z-index: 10;
  font-family: 'Avenir';
  font-weight: 500;
  font-size: 14px;
  color: #707070;
`

const LabelError = styled.span`
  position: absolute;
  bottom: -31px;
  left: 0;
  z-index: 10;
  font-family: 'Avenir';
  font-weight: 500;
  font-size: 12px;
  color: #FF768E;
`

const InputError = styled.input`
  box-sizing: border-box;
  margin-top: 40px;
  position: relative;
  width: 366px;
  height: 40px;
  background: #F6F6F6;
  border-radius: 4px;
  z-index: 5;
  border: 1px solid #FF768E;
  padding: 8px 12px;
  font-family: 'Avenir';
  font-weight: 500;
  font-size: 14px;
  color: #303030;
  outline: 0;
`
// InputSearch
const InputSearch = styled.input`
  /* position: relative;  */
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

const InputSearchImg = styled.img`
  position: absolute;
  bottom: 0;
  right: 12px;
  width: 16px;
  height: 16px;
`


// Header
const Header = styled.header`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  aligh-items: center;
  box-sizing: border-box;
  padding: 16px 51px;
  width: 1440px;
  height: 80px;
  background: #FFFFFF;
  box-shadow: 0px 1px 10px rgba(209, 209, 209, 0.5);
`
const HeaderLogo = styled.img``

const HeaderUser = styled.div`
  margin-top: 13px;
  font-family: 'Avenir';
  font-weight: 500;
  font-size: 14px;
  color: #303030;
`
const HeaderProfile = styled.img`
  margin-top: 4px;
  font-family: 'Avenir';
  width: 36px;
  height: 36px;
`
const HeaderBlock = styled.div`
  display: flex;
  justify-content: space-between;
  aligh-items: center;
  width: 125px;
`
// Links
const LinkActive = styled.a`
  font-family: 'Avenir';
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  text-decoration-line: underline;
  color: #E4163A;
`
const LinkDisabled = styled.a`
  font-family: 'Avenir';
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  text-decoration-line: underline;
  color: #D1D1D1;
`
// Buttons
const ButtonSignIn = styled.button`
  margin-top: 10px;
  width: 365px;
  height: 40px;
  background: #E4163A;
  border-radius: 4px;
  font-family: 'Avenir';
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;
  text-align: center;
  color: #FFFFFF;
  border: none;
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
const ButtonAdd = styled.button`
  display: flex;
  justify-content: space-between;
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
  border: none;
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
const BtnAddImg = styled.img`
  width: 16px;
  height: 16px;
  color: #FFFFFF;
`
const BtnAddDisabledImg = styled.img`
  width: 16px;
  height: 16px;
  color: #D1D1D1;
`

const ButtonCancel = styled.button`
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
// Notification
const Notification = styled.div`
  display: block;
  box-sizing: border-box;
  margin-top: 30px;
  padding: 8px 16px;
  width: 470px;
  height: 40px;
  background: #FF5761;
  border-radius: 4px;
  font-family: 'Avenir';
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #FFFFFF;
`


// HumburgerMenu
const HumburgerMenu = styled.section`
  box-sizing: border-box;
  height: 992px;
  width: 140px;
  display: flex;
  padding: 32pX 40px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
const HumburgerMenuHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const HamburgerMenuBlock = styled.div`
  height: 90px;
  width: 46px;
  
`
const HamburgerIconTeams = styled.img`
  margin-left: 8px;
  width: 24px;
  height: 24px;
`
const HamburgerTextTeams = styled.div`
  font-family: 'Avenir';
  font-weight: 500;
  font-size: 12px;
  color: #9C9C9C;
`
const HamburgerIconPlayers = styled.img`
  margin-left: 8px;
  width: 24px;
  height: 24px;
`
const HamburgerTxtPlayers = styled.div`
  font-family: 'Avenir';
  font-weight: 500;
  font-size: 12px;
  color: #E4163A;
`
const HumburgerMenuFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const HamburgerIconOut = styled.img`
  width: 24px;
  height: 24px;
`
const HumburgerFooterText = styled.div`
  font-family: 'Avenir';
  font-weight: 500;
  font-size: 12px;
  color: #FF768E;
`


// Team
const Team = styled.section`
  margin-top: 30px;
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
const Span = styled.span`
  color: #9C9C9C;
`
const TeamHeaderIcons = styled.div``
const Edit = styled.img``
const Delete = styled.img`
  margin-left: 16px;
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
const TeamLogo = styled.div`
  width: 210px;
  height: 210px;
`
const TeamLogoImg = styled.img`width: 100%;`
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
const Block = styled.div`
  margin-top: 45px;
`
const Title = styled.div`
  font-family: 'Avenir';
  font-weight: 800;
  font-size: 24px;
  line-height: 33px;
  color: #FFFFFF;
`
const Content = styled.div`
  margin-top: 8px;
  font-family: 'Avenir';
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  color: #FFFFFF;
`

// Players
const Player = styled.section`
  margin-top: 30px;
  width: 1140px;
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
`
const PlayerLogo = styled.div`
  width: 531px;
  height: 531px;
`
const PlayerLogoImg = styled.img`
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
const PlayerItem = styled.div``


const App = () => {
  return (
    <Container>
      <Label>
        <LabelText >Login</LabelText>
        <Input  name='login'/>
      </Label>
      <br/>
      <Label>
        <LabelText>Login</LabelText>
        <InputError  />
        <LabelError>Required</LabelError>
      </Label>

      <br/>
      <SearchDiv>
        <InputSearch placeholder='Search...'/>
        <InputSearchImg src={search}/>
      </SearchDiv>

      <br/>
      <div></div>

      <br/>
      <div className='checkBlock'>
        <input className='check' name='check' disabled type='checkbox'/>
        <label htmlFor='check' className='labelCheck labelCheckDisabled'>Text</label>
      </div>
      <div className='checkBlock'>
        <input className='check' name='check' checked type='checkbox'/>
        <label htmlFor='check' className='labelCheck'>Text</label>
      </div>
      <div className='checkBlock'>
        <input className='check' name='check' type='checkbox'/>
        <label htmlFor='check' className='labelCheck'>Text</label>
      </div>
      <div className='checkBlock'>
        <input className='check' name='check' checked disabled type='checkbox'/>
        <label htmlFor='check' className='labelCheck labelCheckDisabled'>Text</label>
      </div>
      <div className='checkBlock'>
        <input className='checkError' name='check' type='checkbox'/>
        <label htmlFor='check' className='labelCheck labelCheckError'>Text</label>
        <span className='checkErrorMessage'>You must be accept the agreement.</span>
      </div>

      <br/>
      <div style={{marginTop: '30px'}}>
        <ButtonSignIn >Sign In</ButtonSignIn>
        <br/>
        <ButtonSignIn disabled >Sign In</ButtonSignIn>
        <br/>
        <ButtonAdd>
          Add
          <BtnAddImg src={add} />
        </ButtonAdd>
        <br/>
        <ButtonAdd disabled >
          Add
          <BtnAddDisabledImg src={add} />
        </ButtonAdd>
        <br/>
        <ButtonCancel>Cancel</ButtonCancel>
        <br/>
        <ButtonCancel disabled >Cancel</ButtonCancel>
        <br/>
      </div>

      <br/>
      <Header>
        <HeaderLogo src={logo}/>
        <HeaderBlock>
          <HeaderUser>John Smith</HeaderUser>
          <HeaderProfile src={profile}/>
        </HeaderBlock>
      </Header>

      <br/>
      <LinkActive href='#'>Link</LinkActive>
      <br/>
      <LinkDisabled href='#'>Link</LinkDisabled>

      <Notification>
        User with the specified username / password was not found.
      </Notification>

      <Team>
        <TeamHeader>
          <TeamHeaderText>Teams <Span>/</Span> Denver Nuggets</TeamHeaderText>
          <TeamHeaderIcons>
            <Edit src={edit}/>
            <Delete src={deleteI} />
          </TeamHeaderIcons>
        </TeamHeader>

        <TeamWrapper>
          <TeamLogo>
            <TeamLogoImg src={teamLogo} alt='teamlogo'/>
          </TeamLogo>

          <TeamDescr>
            <TeamName>Denver Nuggets</TeamName>
            <TeamBlock>

              <Block>
                <Title>Year of foundation</Title>
                <Content>1976</Content>
              </Block>

              <Block>
                <Title>Division</Title>
                <Content>Northwestern</Content>
              </Block>

              <Block>
                <Title>Conference</Title>
                <Content>Western</Content>
              </Block>

            </TeamBlock>
          </TeamDescr>
        </TeamWrapper>
      </Team>


      <Player>
        <TeamHeader>
          <TeamHeaderText>Players <Span>/</Span> Greg Whittington</TeamHeaderText>
          <TeamHeaderIcons>
            <Edit src={edit}/>
            <Delete src={deleteI} />
          </TeamHeaderIcons>
        </TeamHeader>

        <PlayerWrapper>
          <PlayerLogo>
            <PlayerLogoImg src={playerLogo} />
          </PlayerLogo>

          <TeamDescr>
            <PlayerName>Greg Whittington <NumberSpan>#22</NumberSpan></PlayerName>
            <PlayerBlock>

              <PlayerItem>
                <Title>Position</Title>
                <Content>Forward</Content>
              </PlayerItem>

              <PlayerItem>
                <Title>Team</Title>
                <Content>Denver Nuggets</Content>
              </PlayerItem>

              <PlayerItem>
                <Title>Height</Title>
                <Content>206 cm</Content>
              </PlayerItem>

              <PlayerItem>
                <Title>Weight</Title>
                <Content>95 kg</Content>
              </PlayerItem>

              <PlayerItem>
                <Title>Age</Title>
                <Content>27</Content>
              </PlayerItem>

            </PlayerBlock>

          </TeamDescr>
        </PlayerWrapper>
      </Player>


      <HumburgerMenu>
        <HumburgerMenuHeader>
          <HamburgerMenuBlock>
            <HamburgerIconTeams src={hamburgerIconTeams}/>
            <HamburgerTextTeams>Teams</HamburgerTextTeams>
          </HamburgerMenuBlock>
          <HamburgerMenuBlock>
            <HamburgerIconPlayers src={hamburgerIconPlayers}/>
            <HamburgerTxtPlayers>Players</HamburgerTxtPlayers>
          </HamburgerMenuBlock>
        </HumburgerMenuHeader>
        <HumburgerMenuFooter>
          <HamburgerIconOut src={hamburgerIconOut}/>
          <HumburgerFooterText>Sign out</HumburgerFooterText>
        </HumburgerMenuFooter>
      </HumburgerMenu>
    </Container>
  );
}

export default App;
