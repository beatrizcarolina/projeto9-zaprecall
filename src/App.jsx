import React from "react";
import styled from "styled-components";
import Header from "./components/Header/Header";
import Deck from "./components/Deck/Deck";
import Footer from "./components/Footer/Footer"
import cards from "./cards"

export default function App() {
    const [answers, setAnswers] = React.useState([]);

    function addAnswer(result) {
        setAnswers([...answers, result]);
    }

    return (
        <Container>
            <Header/>
            <Deck handleClick={addAnswer} flashcards={cards}></Deck>
            <Footer answers={answers} flashcards={cards}></Footer>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;