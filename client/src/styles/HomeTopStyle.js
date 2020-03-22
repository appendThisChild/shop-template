import styled from 'styled-components'

const Style = styled.div`
    display: grid;
    grid-template-columns: repeat(10, 10vw);
    grid-template-rows: repeat(10, 10vh);
    overflow: hidden;
    > main {
        grid-row: 1/-1;
        grid-column: 1/-1;
        background-image: url(${({ backgroundImage }) => backgroundImage});
        background-position: center;
        background-size: cover;
    }
    > nav {
        grid-row: 1/2;
        grid-column: 1/-1;
    }
    > nav > a {
        display: flex;
        justify-content: flex-end;
        align-items: flex-start;

        padding-top: 15px;
        padding-right: 20px;
        color: white;

        font-style: italic;
        font-size: 25px;
        line-height: 25px;
        font-weight: 900;
        letter-spacing: 1.25px;
        text-decoration: none;
    }
`

export default Style;