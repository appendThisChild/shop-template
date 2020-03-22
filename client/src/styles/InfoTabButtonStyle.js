import styled from 'styled-components'

const Style = styled.div`
    display: ${({ inView, num }) => inView === num ? "none" : "flex"};
    align-items: flex-end;
    justify-content: flex-end;
    grid-row: 1/-1;
    grid-column: 3/4;
    > button {
        transform: skewx(-10deg);
        border-radius: 8px;

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

export default Style;