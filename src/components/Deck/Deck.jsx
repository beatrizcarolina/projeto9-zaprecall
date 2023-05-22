import React from "react";
import {Container, CardClosed, Question, Answer, FinalCard} from "./style"
import zapIcon from "../../assets/icone_certo.png"
import noIcon from "../../assets/icone_erro.png"
import partialIcon from "../../assets/icone_quase.png"
import playIcon from "../../assets/seta_play.png";
import turnIcon from "../../assets/seta_virar.png";

function Flashcard({number, flashcard, handleClick}) {
    const [flashcardState, setFlashcardState] = React.useState("back");
    const [icon, setIcon] = React.useState("zap-icon");
    const [img, setImg] = React.useState(zapIcon);
    const [resultStyle, setResultStyle] = React.useState({color: "#333333", decoration: "none"});

    function checkAnswer(result) {
        if (result === "wrong") {
            setImg(noIcon);
            setResultStyle({color: "#FF3030", decoration: "line-through"});
            handleClick("wrong");
            setIcon("no-icon");
            setFlashcardState("result");
            return;
        }
        else if (result === "almost") {
            setImg(partialIcon);
            setResultStyle({color: "#FF922E", decoration: "line-through"});
            handleClick("almost");
            setIcon("partial-icon");
            setFlashcardState("result");
            return;
        }
        setResultStyle({color: "#2FBE34", decoration: "line-through"});
        handleClick("right")
        setFlashcardState("result");
        return;
    }
   
    return (
        <div data-test="flashcard">  
            {flashcardState === "back" && 
                <CardClosed style={resultStyle}>
                <h3 data-test="flashcard-text">Pergunta {number}</h3>
                <img src={playIcon} onClick={() => setFlashcardState("question")} data-test="play-btn"/>
                </CardClosed>
            }
            {flashcardState === "question" &&
                <Question>
                    <h3 data-test="flashcard-text">{flashcard.question}</h3>
                    <img src={turnIcon} onClick={() => setFlashcardState("answer")} data-test="turn-btn"/>
                </Question>
            }
            {flashcardState === "answer" &&
                <Answer>
                    <h3 data-test="flashcard-text">{flashcard.answer}</h3>
                    <div className="card-menu">
                        <button onClick={() => checkAnswer("wrong")} data-test="no-btn">Não lembrei</button>
                        <button onClick={() => checkAnswer("almost")} data-test="partial-btn">Quase não lembrei</button>
                        <button onClick={() => checkAnswer("right")} data-test="zap-btn">Zap!</button>
                    </div>
                </Answer>
            }
            {flashcardState === "result" && 
                <FinalCard style={resultStyle}>
                    <h3 data-test="flashcard-text">Pergunta {number}</h3>
                    <img src={img} data-test={icon}/>
                </FinalCard>
            }
        </div>
    );
}

export default function Deck({handleClick, flashcards}) {

    return (
        <Container>
            {flashcards.map((flashcard, index) => (
                <Flashcard
                    key={index}
                    number={index+1}
                    handleClick={handleClick}
                    flashcard={flashcard}>
                </Flashcard>
            ))}
        </Container>
    );
}

