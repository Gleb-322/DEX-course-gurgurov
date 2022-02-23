import styled from 'styled-components'
import PlayerLogo from '../../../assets/images/playerCardLogo.png'

export const PlayerCard = () => {
    return (
        <Container>
            <img src={PlayerLogo} alt='player' />
            <Footer>
                <Title>Jaylen Adams <Span>#10</Span></Title>
                <Subtitle>Portland trail blazers</Subtitle>
            </Footer>
        </Container>
    )
}

const Container = styled.section`
    display: grid;
    grid-template-rows: 280px 100px;
    align-items: flex-end;
    justify-items: center;
    width: 364px;
    height: 380px;
    border-radius: 4px;
    background: linear-gradient(121.57deg, #707070 1.62%, #393939 81.02%);
`
const Span = styled.span`
    color: #FF5761;
`

const Footer = styled.footer`
    width: 100%;
    height: 100px;
    display: block;
    background: #303030;
    border-radius: 0px 0px 4px 4px;
`
const Title = styled.h2`
    text-align: center;
    font-family: "Avenir";
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;
    color: #FFFFFF;
`
const Subtitle = styled.h3`
    text-align: center;
    font-family: 'Avenir';
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #9C9C9C;
`