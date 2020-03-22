import styled from 'styled-components'

const Style = styled.div`
    transform: skewx(10deg);
    display: grid;
    grid-template-columns: repeat(10, 10vw);
    grid-template-rows: repeat(10, 10vh);
    overflow: hidden;
    left: ${({ inView, num }) => inView === num ? `-${(num) * 20 + 5}` : "-25"}vw;
    position: relative;
    transition: all .5s linear 0s;
    background-image: url(${({ backgroundImage }) => backgroundImage});
    background-size: cover;
    background-position: center;

    grid-row: 1/-1;
    grid-column: ${({ num }) => `${(num - 1) * 2 + 1}/${(num - 1) * 2 + 3}`};
    width: ${({ inView, num }) => inView === num ? `150vw` : "30vw"};
    z-index: ${({ num, amount, inView }) => inView === num ? amount : amount - num};
`

export default Style;