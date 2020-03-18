import React from "react"
import styled from 'styled-components'

const ContainerDiv = styled.div`
    transform: skewx(-10deg);
    width: 100vw;
    position: relative;
    left: -5vw;
    grid-row: 1/-1;
    grid-column: 3/-1;

    display: grid;
    grid-template-columns: repeat(10, 10vw);
    grid-template-rows: repeat(10, 10vh);
`

const ContentContainer = styled.div`
    display: flex;
    align-items: flex-start;
    align-items: center;
    justify-content: center;
    grid-row: 1/-1;
    grid-column: 1/-1;

    margin: 15px;
    opacity: ${({ inView, num }) => inView === num ? "1" : "0"};
    transition: all .5s linear 0s;
    > div {
        background-color: ${({ backgroundColor }) => backgroundColor};
        padding: 15px;
        color: whitesmoke;
        @media(min-width: 426px){
            width: 75vw;
            padding: 20px;
        }
        @media(min-width: 769px){
            width: 50vw;
            padding: 25px;
        }
    }
`
const H1 = styled.h1`
    border-bottom: 3px solid white;
    padding-bottom: 8px;
    font-size: 48px;
    text-align: right;
    line-height: 47px;
    font-weight: 500;
    letter-spacing: 2px;
`
const P = styled.p`
    padding-top: 10px;
    color: gainsboro;
    font-size: 19px;
    letter-spacing: 1px;

`
const IntroContainer = (props) => (
    <ContainerDiv {...props}>
        <ContentContainer {...props}>
            <div>
                <H1>{props.title}</H1>
                <P>{props.description}</P>
            </div>
        </ContentContainer>
    </ContainerDiv>
)

export default IntroContainer;