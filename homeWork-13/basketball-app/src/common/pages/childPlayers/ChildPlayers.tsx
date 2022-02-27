import styled from 'styled-components'
import { PlayerCard } from '../../components/playerCard/PlayerCard'
import { useLocation, useNavigate} from 'react-router-dom'
// import { EmptySearchPlayer } from '../emptySearchPlayer/EmptySearchPlayer'
import { InputSearch } from '../../ui/inputs/InputSearch'
import { ButtonAdd } from '../../ui/buttons/ButtonAdd'
import { Pagination } from '../../ui/pagination/Pagination'
import { FC } from 'react'

interface Iprop {
    players: object[]
}

export const ChildPlayers: FC<Iprop> = ({players}) => {
    const history = useNavigate()
    const addPlayerRedirect = () => {
        history("addPlayer")
    }
    return (
        <div>
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
        </div>
  )
}

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