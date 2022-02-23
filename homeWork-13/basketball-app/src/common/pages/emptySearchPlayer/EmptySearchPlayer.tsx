import styled from "styled-components"
import { ReactComponent as EmptySearchPlayerSVG } from '../../../assets/images/emptySearchPlayer.svg'

export const EmptySearchPlayer = () => {
    return (
        <ContainerEmpty>
            <EmptySearchPlayerSVG/>
            <Title>Empty here</Title>
            <SubTitle>Add new players to continue</SubTitle>
        </ContainerEmpty>
    )
}

const ContainerEmpty = styled.div`
    box-sizing: border-box;
    width: 556px;
    height: 570px;
    padding: 48px 118px;
    background: #FFFFFF;
    border-radius: 15px;
`
const Title = styled.h2`
    text-align: center;
    font-family: "Avenir";
    font-weight: 800;
    font-size: 36px;
    color: #FF768E;
`
const SubTitle = styled.h3`
    text-align: center;
    font-family: "Avenir";
    font-weight: 500;
    font-size: 24px;
    color: #707070;
`