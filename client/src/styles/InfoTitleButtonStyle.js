import styled from 'styled-components'

const Style = styled.div`
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

        letter-spacing: 1px;
        font-size: 30px;
        font-style: italic;
        line-height: 30px;
        font-weight: 900;
        z-index: ${({ amount, inView }) => inView ? 0 : amount + 1};
    }
`

export default Style;