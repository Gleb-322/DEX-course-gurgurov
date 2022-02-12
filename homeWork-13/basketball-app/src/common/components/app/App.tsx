import styled from 'styled-components'

import { Header } from '../header/Header'
import { Team } from '../team/Team'
import { Player } from '../player/Player'
import { HamburgerMenu } from '../hamburgerMenu/HamburgerMenu'

const Container = styled.div`
  box-sizing: border-box;
  width: 100wh;
  height: 100vh;
`


const App = () => {
  return (
    <Container>
      <Header />
      <Player/>
      <Team/>
      <HamburgerMenu/>
    </Container>
  );
}

export default App;
