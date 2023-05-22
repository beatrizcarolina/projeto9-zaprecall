import styled from "styled-components";
import logo from "../../assets/logo.png"


export default function Header() {
    return (
        <Container>
            <img src={logo}></img>
            <h1>ZapRecall</h1>
        </Container>
    );
}

const Container = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px auto;

    img {
        width: 52px;
        height: 60px;   
    }

    h1 {
        width: 204px;
        font-family: 'Righteous';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        color: #FFFFFF;
    }
`;