import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"

import MediumLogo from '../images/A2_transp.png'

import ExtendSkewedSidebar from './ExtentedSkewedSidebar.js'

const HomeTopStyle = styled.div`
    display: grid;
    grid-template-columns: repeat(10, 10vw);
    grid-template-rows: repeat(10, 10vh);
    overflow: hidden;
`
const Background = styled.main`
    background-color: #0f3e62;
    grid-row: 1/-1;
    grid-column: ${({ amount }) => `1/${amount + 2}`};
    transform: skewx(10deg);
    left: -25vw;
    width: 100%;
    position: relative;
`
const LogoContainer = styled.header`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    grid-row: 1/-1;
    grid-column: 1/-1;
`
const TitleLogo = styled.img`
    border-radius: 50%;
    height: 280px;
    margin-left: 5vw;
    margin-top: 40px;
    z-index: ${({ inView, amount }) => inView ? "0" : amount};
    transition: ${({ inView }) => inView ? "" : "all 0s linear .5s"};
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
    const contentArr = [
        { 
            backgroundColor: "#0f3e62",
            title: "About"
        },
        {  
            backgroundColor: "#3d6581",
            title: "TITLEHERE"
        },
        { 
            backgroundColor: "#63a2bb",
            title: "Community"
        }
    ]
    const { length } = contentArr
    const mappedContent = contentArr.map((content, i) => {
        return <ExtendSkewedSidebar key={i} inView={inView} setInView={setInView} num={i + 1} amount={length + 1} {...content}/>
    })
    return(
        <HomeTopStyle>
            <Nav>
                <StyledLink to="/">Sign up</StyledLink>
            </Nav>
            <LogoContainer>
                <TitleLogo amount={length + 1} inView={inView} className="logo" src={MediumLogo} alt=""/>
            </LogoContainer>
            <Background amount={length + 1} onClick={() => setInView(inView === 1 ? null : 1)}/>
            {mappedContent}
        </HomeTopStyle>
    )
}

export default HomeTop;