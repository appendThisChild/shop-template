import React from 'react'
import styled from 'styled-components'

import IntroContainer from './IntroContainer.js'

const Div = styled.div`
    transform: skewx(10deg);
    display: grid;
    grid-template-columns: repeat(10, 10vw);
    grid-template-rows: repeat(10, 10vh);
    overflow: hidden;
    left: -5vw;
    position: relative;
    transition: all .5s linear 0s;
    background-color: ${({ backgroundColor }) => backgroundColor};
    grid-row: 1/-1;
    grid-column: ${({ num }) => `${num}/${num + 1}`};

    width: ${({ inView, num }) => inView === num ? `${135 - (num * 10)}vw` : "10vw"};
    z-index: ${({ num, amount }) => amount - num};
`
const ButtonContainer = styled.aside`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    grid-row: 9/-1;
    grid-column: 1/2;
    // transform: skewx(-10deg);
`
const Button = styled.button`
    transform: skewx(-10deg);
    color: white;
    font-size: 33px;
    margin-bottom: 35px;
    margin-right: 1vw;
    padding: 5px;
`
const Span = styled.span`
    grid-row: 8/9;
    grid-column: 1/3;
    transform: rotate(-90deg);

    // position: relative;
    // left: 5vw;
    // height: 200px;

    margin-top: 5px;
    color: white;
    letter-spacing: 1px;
    text-align: center;
    font-size: 22px;
`

const ExtendSkewedSidebar = (props) => {
    const { inView, setInView, num, title } = props
    return(
        <Div {...props} onClick={() => setInView(inView === num ? null : num)}>
            <IntroContainer {...props}/>
            <Span>{title}</Span>
            <ButtonContainer>
                {/* <Span>{title}</Span> */}
                <Button >
                    {inView === num ? <>&#x276C;</> : <>&#x276D;</>}
                </Button>
            </ButtonContainer>
        </Div>
    )
}

export default ExtendSkewedSidebar;