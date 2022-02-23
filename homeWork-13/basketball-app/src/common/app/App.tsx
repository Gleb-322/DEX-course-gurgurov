import { FC } from 'react'
import styled from 'styled-components'
import { Routes, Route} from 'react-router-dom'
import { Layout } from '../pages/layout/Layout'
import { CardPlayers } from '../pages/cardPlayers/CardPlayers'
import { CardTeams } from '../pages/cardTeams/CardTeams'
import { DetailsPlayers } from '../pages/detailsPlayers/DetailsPlayers'
import { DetailsTeams } from '../pages/detailsTeams/DetailsTeams'
import { AddPlayers } from '../pages/addPlayers/AddPlayers'
import { AddTeams } from '../pages/addTeams/AddTeams'
import { SignIn } from '../pages/signIn/SignIn'
import { SignUp } from '../pages/signUp/SignUp'
import { NotFound } from '../pages/notFound/NotFound'
// import { PlayerCard } from '../components/playerCard/PlayerCard'
// import { TeamCard } from '../components/teamCard/TeamCard'



const Container = styled.div`
  
`

const App: FC = () => {
  return (
    <Container>
      <Routes>
        <Route path='/signIn' element={<SignIn/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
        <Route path='/' element={<Layout/>}>
          <Route path='players' element={CardPlayers}>
            {/* <Route path="player" element={<PlayerCard />} /> */}
          </Route>
          <Route path='teams' element={CardTeams}>
            {/* <Route path="team" element={<TeamCard />} /> */}
          </Route>
          <Route path='detailsPlayer' element={DetailsPlayers}/>
          <Route path='detailsTeam' element={DetailsTeams}/>
          <Route path='addPlayer' element={AddPlayers}/>
          <Route path='addPlayer' element={AddTeams}/>
        </Route>
        <Route element={<NotFound />} />
      </Routes> 
    </Container>
  );
}

export default App;

