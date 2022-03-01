import { FC,  useEffect } from 'react'
import styled from 'styled-components'
import { useNavigate} from 'react-router-dom'
import { get } from '../../../api/BaseRequest'
import { useDispatch, useSelector } from 'react-redux'
import { getPlayers } from '../../../core/redux/mainSlice'
import { Pagination } from '../../ui/pagination/Pagination'
// import { EmptySearchPlayer } from '../emptySearchPlayer/EmptySearchPlayer'
import { InputSearch } from '../../ui/inputs/InputSearch'
import { ButtonAdd } from '../../ui/buttons/ButtonAdd'
import { PlayerCard } from '../../components/playerCard/PlayerCard'
import { RootState } from '../../../core/redux/store'

export const CardPlayers: FC = () => {
    const dispatch = useDispatch()
    const players = useSelector((state: RootState) => state.todosData.players)

    console.log(players)
    // const [currentPage, setCurrentPage] = useState(1);
    // const [postsPerPage] = useState(6);
    // const indexOfLastPost = currentPage * postsPerPage;
    // const indexOfFirstPost = indexOfLastPost - postsPerPage;
    // const currentPosts = playersGet.slice(indexOfFirstPost, indexOfLastPost);

    useEffect(() => {
        
        get(`/api/Player/GetPlayers`, '')
            .then(data => {
                dispatch(getPlayers(data.data))
            }
            ).catch (e => {
                console.log(e)
            })


    },[])

    const history = useNavigate()
    const addPlayerRedirect = () => {
        history("addPlayer")
    }
    
    return (
        <Container>
            <Header>
                <BlockHeader>
                    <InputSearch/>
                    <div style={{marginLeft: '24px'}}>multeselect</div>
                </BlockHeader>
                <ButtonAdd redirectToAddPage={addPlayerRedirect}/>
            </Header>
            <PlyaerCardList>
                {
                    players.map((player: any) => (
                            <PlayerCard 
                                key={player.id} 
                                name={player.name}
                                imageUrl={player.avatarUrl}
                                number={player.number}
                                id={player.id}
                                teamName={player.teamName}
                            />
                        )
                    )
                }
            </PlyaerCardList>

            {/* <EmptySearchPlayerBlock>
                <EmptySearchPlayer/>
            </EmptySearchPlayerBlock> */}
            
            <Footer>
                <div>Pagination </div>
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

// const EmptySearchPlayerBlock = styled.div`
//     padding: 139px 292px;
// `

const PlyaerCardList = styled.div`
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
const BlockHeader = styled.div`
    display: flex;
`
const Footer = styled.footer`
    /* margin-top: 32px; */
    margin-top: 32px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 40px;
`