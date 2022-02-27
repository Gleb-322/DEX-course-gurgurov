import { FC } from "react"
import styled from "styled-components"
import { Team } from "../../components/team/Team"

export const DetailsTeams: FC = () => {
    return (
        <Container>
            <Team/>
        </Container>
    )
}

const Container = styled.section`
    box-sizing: border-box;
    padding: 32px 80px;
    width: 100%;
`