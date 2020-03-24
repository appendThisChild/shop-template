import styled from 'styled-components'

const Style = styled.div`
    grid-row: 3/-1;
    grid-column: 1/-1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 2.5vh;

    > div {
        display: flex;
    }
    > p {
        letter-spacing: .25px;
        color: lightslategrey;
    }
    > div > p {
        margin-top: 12px;
        margin-bottom: 25px;
        font-size: 25px;
        line-height: 35px;
        letter-spacing: .5px;
        text-align: center;
        color: lightgrey;
    }
    > div > span {
        display: block;
        font-size: 45px;
        line-height: 16px;
        color: slategrey;
    }
    > div > span:last-child {
        align-self: flex-end;
    }
    @media (min-width: 426px){
        grid-row: 2/-1;
        align-items: flex-end;
        > p {
            margin-right: 5vw;
        }
        > div {
            width: 50vw;
            margin-right: 5vw;
        }
    }
    @media (min-width: 533px){
        grid-row: 1/-1;
    }
`

export default Style;