import React from 'react'
import styled from 'styled-components'

import IntroContainer from './IntroContainer.js'

const Div = styled.div`
    transform: skewx(10deg);
    display: grid;
    grid-template-columns: repeat(10, 10vw);
    grid-template-rows: repeat(10, 10vh);
    overflow: hidden;
    left: ${({ inView, num }) => inView === num ? `-${(num) * 20 - 5}` : "-20"}vw;
    position: relative;
    transition: all .5s linear 0s;
    background-image: url(${({ backgroundImage }) => backgroundImage});
    background-size: auto 100vh;
    background-position: center;

    grid-row: 1/-1;
    grid-column: ${({ num }) => `${(num - 1) * 2 + 1}/${(num - 1) * 2 + 3}`};
    width: ${({ inView, num }) => inView === num ? `135vw` : "20vw"};
    z-index: ${({ num, amount, inView }) => inView === num ? amount : amount - num};

    @media (min-width: 1024px){
        background-size: cover;
    }
`
const ButtonContainer = styled.aside`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    grid-row: 9/-1;
    grid-column: 2/3;
`
const Button = styled.button`
    transform: skewx(-10deg);
    color: whitesmoke;
    text-shadow: 0px 1px 5px black;
    font-size: 33px;
    margin-bottom: 35px;
    margin-right: 1vw;
    padding: 5px;
`
const Span = styled.span`
    position: relative;
    top: -${({ num, amount }) => (amount - num) * 35 + 70}px;
    right: 3vw;

    color: ${({ backgroundColor}) => backgroundColor};
    letter-spacing: 1px;
    font-size: 28px;
    font-weight: 900;
    z-index: ${({ amount, inView }) => inView ? 0 : amount + 1};
`
const SpanContainer = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    grid-row: 9/10;
    grid-column: 1/-1;
`

const ExtendSkewedSidebar = (props) => {
    const { inView, setInView, num, title } = props
    return(
        <>
            <SpanContainer {...props}>
                <Span onClick={() => setInView(inView === num ? null : num)} {...props}>{title}</Span>
            </SpanContainer>
            <Div {...props} onClick={() => setInView(inView === num ? null : num)}>
                <IntroContainer {...props}/>
                <ButtonContainer>
                    <Button {...props}>
                        {inView === num ? <>&#x276C;</> : <>&#x276D;</>}
                    </Button>
                </ButtonContainer>
            </Div>
        </>
    )
}

export default ExtendSkewedSidebar;