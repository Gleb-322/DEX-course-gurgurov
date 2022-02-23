// import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { Header } from '../../components/header/Header'
import { SideBar } from '../../components/sideBar/SideBar'
// import { CardTeams } from '../cardTeams/CardTeams'
// import { CardPlayers } from '../cardPlayers/CardPlayers'
// import { AddPlayers } from '../addPlayers/AddPlayers'
import { AddTeams } from '../addTeams/AddTeams'

export const Layout = () => {
  return (
    <Container>
        <Header />
        <Main>
          <SideBar />
          <Content>
            {/* <Outlet/> */}
            {/* <CardTeams/> */}
            {/* <CardPlayers /> */}
            {/* <AddPlayers/> */}
            <AddTeams/>
          </Content>
        </Main>
        
    </Container>
  )
}

const Container = styled.section`
  width: 1440px;
  height: 1072px;
  display: block;
  margin: 0 auto;
`
const Main = styled.section` 
  height: 992px;
  width: 1440px;
  display: flex;
`
const Content = styled.div`
  width: 1300px;
  height: 100%;
  background: #F6F6F6;
`