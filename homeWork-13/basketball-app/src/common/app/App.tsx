import { FC } from 'react'
import styled from 'styled-components'
import { useRoutes, RouteObject } from 'react-router-dom'
// import { mainRoutes, signInRoute, signUpRoute, notFoundRoute, addTeamsRoute, addPlayersRoute} from './Routes'
import { mainRoutes } from './Routes'


export const App: FC = () => {
  let routes: RouteObject[] = mainRoutes
  let elements = useRoutes(routes)
  return (
    <Container>
      {elements}
    </Container>
  );
}
const Container = styled.div``

