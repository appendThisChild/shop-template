import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"

import MediumLogo from '../images/A2_transp.png'

import IntroContainer from './IntroContainer.js'

const HomeTopStyle = styled.div`
    display: grid;
    grid-template-columns: repeat(10, 10vw);
    grid-template-rows: repeat(10, 10vh);

    overflow: hidden;

    > div {
        transform: skewx(10deg);
        display: grid;
        grid-template-columns: repeat(10, 10vw);
        grid-template-rows: repeat(10, 10vh);
        overflow: hidden;
        
        left: -5vw;
        position: relative;
        transition: all .5s linear 0s;
    }
    > div > div {
        grid-row: 2/8;
        
        transform: skewx(-10deg);
        left: 5vw;
        position: relative;
    }
`
const BackgroundDiv = styled.main`
    background-color: black;
    grid-row: 1/-1;
    grid-column: 1/4;
    transform: skewx(10deg);
    left: -25vw;
    width: 50vw;
    position: relative;
`
const Div1 = styled.div`
    background-color: black;
    grid-row: 1/-1;
    grid-column: 1/2;

    width: ${({ inView }) => inView === 1 ? "125vw" : "10vw"};
    z-index: 3;
`
const Div2 = styled.div`
    background-color: #3d6581;
    grid-row: 1/-1;
    grid-column: 2/3;

    width: ${({ inView }) => inView === 2 ? "115vw" : "10vw"};
    z-index: 2;
`
const Div3 = styled.div`
    background-color: #63a2bb;
    grid-row: 1/-1;
    grid-column: 3/4;

    width: ${({ inView }) => inView === 3 ? "105vw" : "10vw"};
    z-index: 1;
`
const Button = styled.button`
    color: white;
    font-size: 33px;
    margin-bottom: 35px;
    margin-right: 1vw;
    padding: 5px;
`
const ButtonContainer = styled.aside`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;

    grid-row: 9/-1;
    grid-column: 1/2;

    transform: skewx(-10deg);
`
const LogoContainer = styled.header`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    grid-row: 1/-1;
    grid-column: 1/-1;
`
const TitleLogo = styled.img`
    height: 280px;
    margin-left: 5vw;
    margin-top: 40px;

    z-index: ${({ inView }) => inView ? "0" : "4"};
    transition: ${({ inView }) => inView ? "" : "z-index 0s linear .5s "};

    @media (min-width: 426px){
        height: 320px;
    }
    @media (min-width: 769px){
        height: 350px;
    }
`
const Nav = styled.nav`
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    grid-row: 1/2;
    grid-column: 1/-1;
`
const StyledLink = styled(Link)`
    color: rgb(126, 126, 126);
    font-style: italic;
    font-size: 24px;
    font-weight: 900;
    text-decoration: none;
    margin: 15px;
    margin-right: 25px;
`

const HomeTop = () => {
    const [inView, setInView] = useState(3)

    

    return(
        <HomeTopStyle>
            <Nav>
                <StyledLink className="signuplink">Sign up</StyledLink>
            </Nav>
            <LogoContainer className="logoContainer" >
                <TitleLogo inView={inView} className="logo" src={MediumLogo} alt=""/>
            </LogoContainer>
            <BackgroundDiv  />
            <Div1 inView={inView}>
                <IntroContainer num={1} />
                <ButtonContainer>
                    <Button onClick={() => setInView(inView === 1 ? null : 1)}>
                        {inView === 1 ? <>&#x276C;</> : <>&#x276D;</>}
                    </Button>
                </ButtonContainer>
            </Div1>
            <Div2 inView={inView}>
                <IntroContainer num={2} />
                <ButtonContainer>
                    <Button onClick={() => setInView(inView === 2 ? null : 2)}>
                        {inView === 2 ? <>&#x276C;</> : <>&#x276D;</>}
                    </Button>
                </ButtonContainer>
            </Div2>
            <Div3 inView={inView}>
                <IntroContainer num={3} />
                <ButtonContainer>
                    <Button onClick={() => setInView(inView === 3 ? null : 3)}>
                        {inView === 3 ? <>&#x276C;</> : <>&#x276D;</>}
                    </Button>
                </ButtonContainer>
            </Div3>
        </HomeTopStyle>
    )
}

export default HomeTop;