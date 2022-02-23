import styled from "styled-components"
import { ReactComponent as EmptySearchTeamSVG } from '../../../assets/images/emptySearchTeam.svg'

export const EmptySearchTeam = () => {
    return (
        <ContainerEmpty>
            <EmptySearchTeamSVG/>
            <Title>Empty here</Title>
            <SubTitle>Add new teams to continue</SubTitle>
        </ContainerEmpty>
    )
}

const ContainerEmpty = styled.div`
    box-sizing: border-box;
    width: 556px;
    height: 570px;
    padding: 48px 37px;
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