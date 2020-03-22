import styled from 'styled-components'

const Style = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    grid-row: 1/-1;
    grid-column: 1/-1;

    > img {
        border-radius: 50%;
        box-shadow: 0px 0px 10px 0px black;

        height: 200px;
        margin-left: 5vw;
        margin-top: 7vh;
        @media (min-width: 768px){
            height: 300px;
        }
    }
`

export default Style;