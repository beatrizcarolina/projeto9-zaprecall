import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 106px;
    gap: 25px;
`;

export const CardContainer = styled.div`
    width: 300px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    padding: 15px;

    img {
        cursor: pointer;
    }
`

export const CardClosed = styled(CardContainer)`
    height: 65px;
    background-color: #FFFFFF;

    display: flex;
    justify-content: space-between;
    align-items: center;
    
    color: ${props => props.style.color};

    h3 {
        font-weight: 700;
        font-size: 16px;
        text-decoration: ${props => props.style.decoration};
    }

    img {
        width: 20px;
        height: 23px;
    }
`;

export const Question = styled(CardContainer)`
    height: 131px;
    background-color: #FFFFD4;
    position: relative;

    h3 {
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
    }

    img {
        width: 30px;
        height: 20px;
        position: absolute;
        bottom: 6px;
        right: 15px;
    }

`;

export const Answer = styled(CardContainer)`
    height: 131px;
    background-color: #FFFFD4;

    display: flex;
    justify-content: space-between;
    flex-direction: column;
   
    .card-menu {
        display: flex;
        justify-content: center;
        gap: 8px; 
    }

    h3 {
        font-weight: 400;
        font-size: 18px;
        margin-bottom: 10px;
    }

    button {
        width: 85px;
        height: 37px;

        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        color: #FFFFFF;

        border-radius: 5px;
        border: none;
        cursor: pointer;
        padding: 0 10px;

        &:first-child {
            background-color: #FF3030;
        }

        &:nth-child(2) {
            background-color: #FF922E;;
        }

        &:last-child {
            background-color: #2FBE34;;
        }
    }
`;

export const FinalCard = styled(CardContainer)`
    height: 65px;
    background-color: #FFFFFF;

    display: flex;
    justify-content: space-between;
    align-items: center;
    
    color: ${props => props.style.color};

    h3 {
        font-weight: 700;
        font-size: 16px;
        text-decoration: ${props => props.style.decoration};
    }

    img {
        width: 23px;
        height: 23px;
    }
`;