import styled from 'styled-components'
import { PlayerCard } from '../../components/playerCard/PlayerCard'
// import { EmptySearchPlayer } from '../emptySearchPlayer/EmptySearchPlayer'
import { InputSearch } from '../../components/inputs/InputSearch'
import { ButtonAdd } from '../../components/buttons/ButtonAdd'

export const CardPlayers = () => {
    return (
        <Container>
            <Header>
                <BlockHeader>
                    <InputSearch/>
                    <div style={{marginLeft: '24px'}}>multeselect</div>
                </BlockHeader>
                <ButtonAdd/>
            </Header>
            <PlyaerCardList>
                <PlayerCard/>
                <PlayerCard/>
                <PlayerCard/>
                <PlayerCard/>
                <PlayerCard/>
                <PlayerCard/>
            </PlyaerCardList>

            {/* <EmptySearchPlayerBlock>
                <EmptySearchPlayer/>
            </EmptySearchPlayerBlock> */}
            
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