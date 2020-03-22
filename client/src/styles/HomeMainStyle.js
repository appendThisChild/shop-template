import styled from 'styled-components'

const Style = styled.div`
    display: grid;
    grid-template-columns: repeat(10, 10vw);
    grid-template-rows: repeat(10, 10vh);
    overflow: hidden;
    > aside {
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        grid-row: 9/-1;
        grid-column: 8/-1;
    }
    > aside > img {
        height: 50px;
        margin-bottom: 15px;
        margin-right: 15px;
        border-radius: 50%;
        box-shadow: 0px 0px 10px -3px black;
    }
`

export default Style;