import logo from "../../assets/logo.png"
import { Container } from "./style";

export default function Header() {
    return (
        <Container>
            <img src={logo}></img>
            <h1>ZapRecall</h1>
        </Container>
    );
}