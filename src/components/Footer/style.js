import styled from "styled-components";

export const Container = styled.div`

    width: 100%;
    height: 70px;
    background-color: #FFFFFF;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1;
    
    h2 {
        width: 150px;
        font-size: 18px;
        font-weight: 400;
        line-height: 21px;
        text-align: center;
        
        margin-top: 24px;
        margin-bottom: 24px;
    };
`;