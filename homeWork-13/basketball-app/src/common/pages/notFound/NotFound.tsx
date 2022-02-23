import styled from "styled-components"
import { ReactComponent as NotFoundSVG } from '../../../assets/images/notFound.svg'

export const NotFound = () => {
    return (
        <Container>
            <NotFoundSVG/>
            <Title>Page not found</Title>
            <SubTitle>Sorry, we can’t find what you’re looking for</SubTitle>
        </Container>
    )
}

const Container = styled.section`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Title = styled.h1`
    font-family: "Avenir";
    font-weight: 800;
    font-size: 36px;
    line-height: 49px;
    color: #FF768E;
`
const SubTitle = styled.h2`
    font-family: "Avenir";
    font-weight: 500;
    font-size: 24px;
    line-height: 33px;
    color: #707070;
`