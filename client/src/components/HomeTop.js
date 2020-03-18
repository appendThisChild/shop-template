import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"

import MediumLogo from '../images/A2_transp.png'

const HomeTopStyle = styled.div`
    display: grid;
    grid-template-columns: repeat(10, 10vw);
    grid-template-rows: repeat(10, 10vh);
    overflow: hidden;
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
    box-shadow: 0px 0px 20px 0px black;
    height: 280px;
    margin-left: 5vw;
    margin-top: 7vh;
    @media (min-width: 769px){
        height: 300px;
    }
`
const Nav = styled.nav`
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    grid-row: 1/2;
    grid-column: 1/-1;

    margin: 10px;
    margin-right: 15px;    
`
const StyledLink = styled(Link)`
    color: rgb(126, 126, 126);
    font-style: italic;
    font-size: 25px;
    font-weight: 900;
    letter-spacing: 1px;
    text-decoration: none;
    
    
`

const HomeTop = () => {

    return(
        <HomeTopStyle>
            <Nav>
                <StyledLink to="/">Sign up</StyledLink>
            </Nav>
            <LogoContainer>
                <TitleLogo className="logo" src={MediumLogo} alt=""/>
            </LogoContainer>
        </HomeTopStyle>
    )
}

export default HomeTop;