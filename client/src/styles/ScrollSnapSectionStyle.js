import styled from 'styled-components'

const StyledScrollSnapSection = styled.div`
    > aside {
        display: flex;  
    }
    > aside:first-child {
        margin-left: ${({ vertical }) => vertical ? "auto" : ""};
        margin-right: auto;
        grid-column: 1/-1;
        grid-row: ${({ vertical }) => vertical ? "1/2" : "5/6"};
        align-items: ${({ vertical }) => vertical ? "flex-start" : "center"};
    }
    > aside:last-child {
        margin-left: auto;
        margin-right: ${({ vertical }) => vertical ? "auto" : ""};
        grid-column: 1/-1;
        grid-row: ${({ vertical }) => vertical ? "10/-1" : "5/6"};
        align-items: ${({ vertical }) => vertical ? "flex-end" : "center"};
    }
    > aside > button {
        height: 3em;
        width: 3em;
        display: flex;
        flex-direction: ${({ vertical }) => vertical ? "column" : ""};
        justify-content: center;
        align-items: center;
        cursor: pointer;
        z-index: 10;
    }
    > div {
        grid-row: 1/-1;
        grid-column: 1/-1;
    }
`

const StyledButton1 = styled.button`
    margin-top: ${({ vertical }) => vertical ? "0px" : ""};
    margin-left: ${({ vertical }) => vertical ? "" : "7px"};
`
const StyledButton2 = styled.button`
    margin-bottom: ${({ vertical }) => vertical ? "0px" : ""};
    margin-right: ${({ vertical }) => vertical ? "" : "7px"};
`
const StyledArrow = styled.span`
    color: slategrey;
    font-size: 16px;

    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: .85px;

    width: 30px;
    height: 20px;
`
const StyledArrowText = styled.span`
    color: slategrey;
    font-size: 12px;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 10px;
`


export { StyledArrow, StyledArrowText, StyledButton1, StyledButton2, StyledScrollSnapSection };