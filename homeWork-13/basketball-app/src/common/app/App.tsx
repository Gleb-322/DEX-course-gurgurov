import { FC } from 'react'
import styled from 'styled-components'
import { useRoutes } from 'react-router-dom'
import { mainRoutes, signInRoute, signUpRoute, notFoundRoute} from './Routes'

export const App: FC = () => {
  const elements = useRoutes([mainRoutes, signInRoute, signUpRoute, notFoundRoute])
  return (
    <Container>
      {elements}
    </Container>
  );
}
const Container = styled.div``

