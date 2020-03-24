import styled from 'styled-components'

const StyledInfoContainer = styled.div`
    transform: skewx(10deg);
    display: grid;
    grid-template-columns: repeat(10, 10vw);
    grid-template-rows: repeat(10, 10vh);
    overflow: hidden;
    left: ${({ inView, num }) => inView === num ? `-${(num) * 20 + 5}` : "-25"}vw;
    position: relative;
    transition: all .55s linear 0s;
    background-image: url(${({ backgroundImage }) => backgroundImage});
    background-size: cover;
    background-position: center;

    grid-row: 1/-1;
    grid-column: ${({ num }) => `${(num - 1) * 2 + 1}/${(num - 1) * 2 + 3}`};
    width: ${({ inView, num }) => inView === num ? `150vw` : "30vw"};
    z-index: ${({ num, amount, inView }) => inView === num ? amount : amount - num};

    @media (min-width: 768px){
        transition: all .75s linear 0s;
    }
`
const StyledInfoTabButton = styled.div`
    display: ${({ inView, num }) => inView === num ? "none" : "flex"};
    align-items: flex-end;
    justify-content: flex-end;
    grid-row: 1/-1;
    grid-column: 3/4;
    
    > button {
        transform: skewx(-10deg);
        border-radius: 8px;
        cursor: pointer;
        color: whitesmoke;
        background-color: ${({ backgroundColor }) => backgroundColor};
        font-size: 30px;
        margin-bottom: 45px;
        margin-right: 15px;
        padding: 4px;
        padding-left: 8px;
        padding-right: 8px;
    }
`
const StyledInfoTitleButton = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    grid-row: 1/-1;
    grid-column: 1/-1;
    > span {
        position: relative;
        top: ${({ num }) => (num) * 48 - 13}px;
        margin-top: 5vw;
        right: 10vw;

        color: ${({ backgroundColor}) => backgroundColor};

        border-bottom: 3px solid ${({ backgroundColor}) => backgroundColor};
        padding-bottom: 3px;
        cursor: pointer;
        letter-spacing: 1px;
        font-size: 30px;
        font-style: italic;
        line-height: 30px;
        font-weight: 900;
        z-index: ${({ amount, inView }) => inView ? 0 : amount + 1};
    }
`

export { StyledInfoContainer, StyledInfoTabButton, StyledInfoTitleButton };