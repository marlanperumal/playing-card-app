import React from "react";
import styled from 'styled-components'

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    background-color: lightblue;
    height: 100vh;
    width: 100vw;
`

const LeftSidebar = styled.div`
    grid-column: 1 / 2;
    grid-row: 1 / 5;
    background-color: lightgreen;
    margin: 5px;
    padding: 10px;
    border-radius: 2px;
`
const RightSidebar = styled.div`
    grid-column: 4 / 5;
    grid-row: 1 / 5;
    background-color: lightpink;
    margin: 5px;
    padding: 10px;
    border-radius: 2px;
`
const CommunalArea = styled.div`
    display: flex;
    flex-direction: row;
    /* flex-wrap:wrap; */
    /* justify-content:center; */
    align-items:stretch;
    grid-column: 2 / 4;
    grid-row: 1 / 3;
    background-color: lightyellow;
    margin: 5px;
    padding: 10px;
    border-radius: 2px;
`
const PlayerArea = styled.div`
    display: flex;
    flex-direction: row;
    grid-column: 2 / 4;
    grid-row: 3 / 5;
    background-color: lightgrey;
    margin: 5px;
    padding: 10px;
    border-radius: 2px;
`

const Card = styled.div`
    width: 80px;
    height: 120px;
    background-color: blue;
    padding: 4px;
    margin: 2px;
`


function App() {
    return (
        <Container>
            <LeftSidebar/>
            <CommunalArea>
                <Card>2D</Card>
                <Card>3C</Card>
            </CommunalArea>
            <PlayerArea>
                <Card>2D</Card>
                <Card>3C</Card>
            </PlayerArea>
            <RightSidebar/>
        </Container>
    )
}
export default App;
