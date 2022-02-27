import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Routes, Route} from 'react-router-dom'
import { ChildPlayers} from '../childPlayers/ChildPlayers'
import { DetailsPlayers } from '../detailsPlayers/DetailsPlayers'
import { get } from '../../../api/BaseRequest'
import { Pagination } from '../../ui/pagination/Pagination'

export const CardPlayers = () => {
    
    // const location = useLocation()
    //console.log('players',location)
    const [players, setPlayers] = useState([])
    const [playersGet, setPlayersGet] = useState([])
    // const [currentPage, setCurrentPage] = useState(1);
    // const [postsPerPage] = useState(6);
    console.log(playersGet)
    console.log(players)
    // const indexOfLastPost = currentPage * postsPerPage;
    // const indexOfFirstPost = indexOfLastPost - postsPerPage;
    // const currentPosts = playersGet.slice(indexOfFirstPost, indexOfLastPost);

    useEffect(() => {
        
        get(`/api/Player/GetPlayers`, '')
            .then(data => {
                setPlayersGet(data.data)}
            ).catch (e => {
                console.log(e)
            })

    },[])

    
    return (
        <Container>
            <ChildPlayers players={playersGet}/>
            <DetailsPlayers players={playersGet}/>
        </Container>
    )
}

const Container = styled.section`
    box-sizing: border-box;
    padding: 32px 80px;
    width: 1300px;
`