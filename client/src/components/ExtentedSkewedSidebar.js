import React from 'react'
import styled from 'styled-components'

import IntroContainer from './IntroContainer.js'

const Div = styled.div`
    transform: skewx(10deg);
    display: grid;
    grid-template-columns: repeat(10, 10vw);
    grid-template-rows: repeat(10, 10vh);
    overflow: hidden;
    left: ${({ inView, num }) => inView === num ? `-${(num) * 20 - 5}` : "-15"}vw;
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
    color: white;
    background-color: ${({ backgroundColor, inView, num }) => inView === num ? backgroundColor : backgroundColor};
    font-size: 32px;
    margin-bottom: 35px;
    margin-right: 15px;
    padding-left: 6px;
    padding-right: 6px;
`
const Span = styled.span`
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
`
const SpanContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    grid-row: 1/-1;
    grid-column: 1/-1;
`

const ExtendSkewedSidebar = (props) => {
    const { inView, setInView, num, title } = props
    return(
        <>
            <SpanContainer {...props}>
                <Span onClick={() => setInView(inView === num ? null : num)} {...props}>{title}</Span>
            </SpanContainer>
            <Div id={title} onClick={() => setInView(inView === num ? null : num)} {...props}>
                <IntroContainer {...props}/>
                <ButtonContainer>
                    <Button {...props} >
                        {inView === num ? <>&#x276C;</> : <>&#x276D;</>}
                    </Button>
                </ButtonContainer>
            </Div>
        </>
    )
}

export default ExtendSkewedSidebar;