import { FC, useEffect} from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { TeamCard } from '../../components/teamCard/TeamCard'
import { getTeams } from '../../../core/redux/mainSlice'
// import { EmptySearchTeam } from '../emptySearchTeam/EmptySearchTeam'
import { InputSearch } from '../../ui/inputs/InputSearch'
import { ButtonAdd } from '../../ui/buttons/ButtonAdd'
import { get } from '../../../api/BaseRequest'
import { RootState } from '../../../core/redux/store'

export const CardTeams: FC = () => {
    const redirectAddTeam = useNavigate()
    const dispatch = useDispatch()
    const teams = useSelector((state: RootState) => state.todosData.teams)

    useEffect(() => {
        get(`/api/Team/GetTeams`, localStorage.getItem("token") as string)
            .then(data => {
                dispatch(getTeams(data.data))}
            ).catch(e => {
                console.log(e)
            })

    },[])

    const addTeamRedirect = () => {
        redirectAddTeam(`/addTeam`)
    }
    return (
        <Container>
            <Header>
                <InputSearch/>
                <ButtonAdd redirectToAddPage={addTeamRedirect}/>
            </Header>
            <TeamCardList>
                {
                    // teams.map((team: any) => (
                    //     <TeamCard 
                    //         key={team.id}
                    //         name={team.name}
                    //         foundationYear={team.foundationYear}
                    //         imageUrl={team.imageUrl}
                    //         id={team.id}
                    //     />
                    // ))
                }
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