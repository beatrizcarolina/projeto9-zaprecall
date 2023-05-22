import React from "react";
import {Container} from "./style"

export default function Footer({answers, flashcards}) {

    return (
        <Container data-test = "footer">
             <h2>{answers.length}/{flashcards.length} CONCLUÍDOS</h2>
        </Container>
    );
}