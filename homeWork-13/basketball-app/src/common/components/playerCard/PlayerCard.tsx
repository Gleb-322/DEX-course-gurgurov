import { FC, useEffect } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { get } from '../../../api/BaseRequest'
// import PlayerLogo from '../../../assets/images/playerCardLogo.png'
interface Iprop {
    name: string;
    imageUrl: string;
    number: number;
    id: number;
}

export const PlayerCard:  FC<Iprop> = ({name, imageUrl, number, id}) => {

    const details = useNavigate()
    const handlerDetails = () => {
        details(`players/:${id}`)
    }
    return (
        <Container onClick={handlerDetails}>
            <Img src={`http://dev.trainee.dex-it.ru${imageUrl}`} alt='player' />
            <Footer>
                <Title>{name} <Span>#{number}</Span></Title>
                <Subtitle>Portland trail blazers</Subtitle>
            </Footer>
        </Container>
    )
}

const Img = styled.img`
    width: 274px;
    height: 207px;
`

const Container = styled.div`
    cursor: pointer;
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