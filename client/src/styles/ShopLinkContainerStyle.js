import styled from 'styled-components'

const Style = styled.div`
    grid-row: 1/-1;
    grid-column: 1/-1;

    display: flex;
    align-items: flex-end;
    justify-content: center;
    > a {
        border-radius: 12px;
        
        margin-bottom: 10vh;
        padding: 10px;
        padding-right: 20px;
        padding-left: 20px;

        color: white;
        font-style: italic;
        font-size: 28px;
        line-height: 28px;
        letter-spacing: 1.5px;
        text-decoration: none;
    }
`

export default Style;