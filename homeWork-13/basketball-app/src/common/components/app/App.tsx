
import styled from 'styled-components'

// import { Header } from '../header/Header'
// import { Team } from '../team/Team'
// import { Player } from '../player/Player'
// import { HamburgerMenu } from '../hamburgerMenu/HamburgerMenu'
import { SignIn } from '../signIn/SignIn'
import { SignUp } from '../signUp/SignUp'
// import { CustomSelect } from '../selects/Select'


const Container = styled.div`
  width: 100vh;
  height: 100vh;
`

const App = () => {
  return (
    <Container>
      {/* <Header /> */}
      {/* <HamburgerMenu/> */}
      {/* <Team/> */}
      {/* <Player/> */}
      <SignIn/>
      <SignUp/>
      {/* <CustomSelect/> */}
    </Container>
  );
}

export default App;