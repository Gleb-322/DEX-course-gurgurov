import { FC, useEffect, useState } from "react"
import styled from "styled-components"
import { Player } from "../../components/player/Player"
import { get } from '../../../api/BaseRequest'


export const DetailsPlayers: FC = () => {
    
    return (
        <Container>
            <Player />
        </Container>
    )
}


const Container = styled.section`
    box-sizing: border-box;
    padding: 32px 80px;
    width: 100%;
`