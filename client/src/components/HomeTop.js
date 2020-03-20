import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"

import MediumLogo from '../images/A2_transp.png'
import Background from '../images/Slc-Photos/alexzeer150700281.jpg'

const HomeTopStyle = styled.div`
    display: grid;
    grid-template-columns: repeat(10, 10vw);
    grid-template-rows: repeat(10, 10vh);
    overflow: hidden;
`
const StyledBackground = styled.div`
    grid-row: 1/-1;
    grid-column: 1/-1;
    background-image: url(${Background});
    background-position: center;
    background-size: cover;
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
    height: 200px;
    margin-left: 5vw;
    margin-top: 7vh;
    @media (min-width: 768px){
        height: 300px;
    }
`
const Nav = styled.nav`
    grid-row: 1/2;
    grid-column: 1/-1;
`
const StyledLink = styled(Link)`
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;

    padding-top: 15px;
    padding-right: 15px;
    color: white;

    font-style: italic;
    font-size: 25px;
    line-height: 25px;
    font-weight: 900;
    letter-spacing: 1.25px;
    text-decoration: none;
`

const MainContent = styled.div`
    grid-row: 1/-1;
    grid-column: 1/-1;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
`
const MissionStatement = styled.div`
    grid-row: 3/-1;
    grid-column: 1/-1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 2.5vh;
    
    > div {
        display: flex;
    }
    > p {
        letter-spacing: .25px;
        color: grey;
    }
    > div > p {
        margin-top: 12px;
        margin-bottom: 25px;
        font-size: 25px;
        letter-spacing: .5px;
        text-align: center;
        color: darkgrey;
    }
    > div > span {
        display: block;
        font-size: 45px;
        line-height: 16px;
        color: silver;
    }
    > div > span:last-child {
        align-self: flex-end;
    }
    @media (min-width: 426px){
        grid-row: 2/-1;
        align-items: flex-end;
        > p {
            margin-right: 5vw;
        }
        > div {
            width: 50vw;
            margin-right: 5vw;
        }
    }
    @media (min-width: 533px){
        grid-row: 1/-1;
    }
`
const ShopLink = styled(Link)`
    border: 2px solid white;
    border-radius: 4px;
    margin-bottom: 10vh;
    color: white;
    padding: 10px;
    padding-right: 20px;
    padding-left: 20px;
    font-style: italic;
    font-size: 28px;
    line-height: 28px;
    letter-spacing: 1.5px;
    text-decoration: none;
`

const HomeTop = () => {

    return(
        <HomeTopStyle>
            <StyledBackground />
            <Nav>
                <StyledLink to="/">Sign up</StyledLink>
            </Nav>
            <LogoContainer>
                <TitleLogo className="logo" src={MediumLogo} alt=""/>
            </LogoContainer>
            <MainContent className="backdrop">
                <ShopLink to="/">shop</ShopLink>
            </MainContent>
            <MissionStatement>
                <div>
                    <span>&#x275D;</span>
                    <p>The essence of all beautiful art, all great art, is gratitude.</p>
                    <span>&#x275E;</span>
                </div>
                <p>~ Friedrich Nietzsche</p>
            </MissionStatement>
        </HomeTopStyle>
    )
}

export default HomeTop;