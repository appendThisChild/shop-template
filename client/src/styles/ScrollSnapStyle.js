import styled from 'styled-components'

const Style = styled.div`
    display: ${({ vertical }) => vertical ? "" : "flex"};
    height: ${({ height }) => height ? height : "100vh"};
    width: ${({ width }) => width ? width : "100vw"};
    ${({ vertical }) => vertical ? 
    "overflow-x: scroll;" 
    : 
    "overflow-y: scroll;"
    }

    scroll-snap-type: ${({ vertical }) => vertical ? "y mandatory" : "x mandatory"};

    ::-webkit-scrollbar {
        display: none;
    }
    > div {
        display: grid;
        grid-template-rows: repeat(10, ${({ height }) => height ? `calc(${height} / 10)` : "10vh"});

        flex: 0 0 auto;
        height: ${({ height }) => height ? height : "100vh"};
        width: ${({ width }) => width ? width : "100vw"};
        scroll-snap-align: center;
        scroll-snap-stop: always;
    }
`

export default Style;