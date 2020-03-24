import styled from 'styled-components'

const Style = styled.div`
    transform: skewx(-10deg);
    width: 100vw;
    position: relative;
    left: 5vw;
    grid-row: 1/-1;
    grid-column: 3/-1;

    display: grid;
    grid-template-columns: repeat(10, 10vw);
    grid-template-rows: repeat(10, 10vh);

    > div {
        display: flex;
        align-items: flex-start;
        align-items: center;
        justify-content: center;
        grid-row: 1/-1;
        grid-column: 1/-1;

        padding: 5px;
        background-color: rgba(0, 0, 0, .58);
        opacity: ${({ inView, num }) => inView === num ? "1" : "0"};
        transition: all .5s linear 0s;
    }
    > div > div {
        background-color: ${({ backgroundColor }) => backgroundColor};
        padding: 25px;
        border-radius: 25px;
        color: whitesmoke;
        @media(min-width: 426px){
            width: 75vw;
            padding: 20px;
        }
        @media(min-width: 769px){
            width: 50vw;
            padding: 25px;
        }
    }
    > div > div > div {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        border-bottom: 3px solid white;
    }
    > div > div > div > button {
        border-radius: 8px;
        color: whitesmoke;
        background-color: ${({ backgroundColor }) => backgroundColor};
        font-size: 30px;
        cursor: pointer;
        margin-right: 8px;
        padding: 4px;
        padding-left: 8px;
        padding-right: 8px;
    }
    > div > div > div > h1 {
        padding-bottom: 8px;
        font-size: 48px;
        text-align: right;
        line-height: 47px;
        font-weight: 500;
        letter-spacing: 2px;
    }
    > div > div > p {
        padding-top: 10px;
        color: gainsboro;
        font-size: 20px;
        line-height: 25px;
        letter-spacing: 1px;
    }
`

export default Style;