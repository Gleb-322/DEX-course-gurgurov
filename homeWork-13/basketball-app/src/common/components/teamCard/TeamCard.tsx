import { FC, useEffect } from 'react'
import styled from 'styled-components'
// import TeamLogo from '../../../assets/images/teamCardLogo.png'
import { get } from '../../../api/BaseRequest'
import { useDispatch } from 'react-redux'
// import { getTeamsById } from '../../../core/redux/mainSlice'
interface Iprop {
    name: string;
    foundationYear: number;
    imageUrl: string;
    id: number;
}
export const TeamCard: FC<Iprop> = ({name, foundationYear, imageUrl, id}) => {
    const dispatch = useDispatch()
    
    // useEffect(() => {
    //     get(`/api/Team/Get/:${id}`, localStorage.getItem("token") as string)
    //         .then(data => {
    //             dispatch(getTeamsById(data.id))}
    //         ).catch(e => {
    //             console.log(e)
    //         })
    // }, [])

    return (
        <Container>
            <DivImg>
                <Img src={`http://dev.trainee.dex-it.ru${imageUrl}`} alt='team' />
            </DivImg>
            <Footer>
                <Title>{name}</Title>
                <Subtitle>Year of foundation: {foundationYear}</Subtitle>
            </Footer>
        </Container>
    )
}

const Img = styled.img`
    width: 150px;
    height: 150px;
`

const Container = styled.div`
    cursor: pointer;
    display: grid;
    grid-template-rows: 280px 100px;
    align-items: center;
    justify-items: center;
    width: 364px;
    height: 380px;
    border-radius: 4px;
    background: linear-gradient(121.57deg, #707070 1.62%, #393939 81.02%);
`

const DivImg = styled.div`
    
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