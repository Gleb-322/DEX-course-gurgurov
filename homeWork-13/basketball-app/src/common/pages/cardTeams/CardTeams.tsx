import { FC, useState, useEffect} from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { TeamCard } from '../../components/teamCard/TeamCard'
// import { EmptySearchTeam } from '../emptySearchTeam/EmptySearchTeam'
import { InputSearch } from '../../components/inputs/InputSearch'
import { ButtonAdd } from '../../components/buttons/ButtonAdd'
import { useTeams } from '../../../api/teams/RequestsTeams'

export const CardTeams: FC = () => {
    const redirectAddTeam = useNavigate()
    const [teams, setTeams] = useState([])
    const {getPagTeams, getTeams} = useTeams()

    useEffect(() => {
        let token = localStorage.getItem("token")
        if (token) {
            getPagTeams(JSON.stringify(token))
                .then(data => setTeams(data))
        }
        console.log(teams)
    },[])

    const addTeamRedirect = () => {
        redirectAddTeam(`addTeam`)
    }
    return (
        <Container>
            <Header>
                <InputSearch/>
                <ButtonAdd redirectToAddPage={addTeamRedirect}/>
            </Header>
            <TeamCardList>
                <TeamCard />
                <TeamCard />
                <TeamCard />
                <TeamCard />
                <TeamCard />
                <TeamCard />
            </TeamCardList>
            {/* <EmptySearchTeamBlock>
                <EmptySearchTeam />
            </EmptySearchTeamBlock> */}
            <Footer>
                <div>paginate</div>
                <div>miniselect</div>
            </Footer>
        </Container>
    )
}

const Container = styled.section`
    box-sizing: border-box;
    padding: 32px 80px;
    width: 1300px;
`
// const EmptySearchTeamBlock = styled.div`
//     padding: 139px 292px;
// `
const TeamCardList = styled.div`
    width: 100%;
    margin-top: 32px;
    display: grid;
    grid-template-columns: repeat(3, 364px);
    grid-template-rows: repeat(2, 380px);
    gap: 24px;
`
const Header = styled.header`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 40px;
`
const Footer = styled.footer`
    /* margin-top: 32px; */
    margin-top: 32px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 40px;
`