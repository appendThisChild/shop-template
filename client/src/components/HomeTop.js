import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"

import MediumLogo from '../images/A2_transp.png'
import Background1 from '../images/Slc Photos/digital-art-artwork-abstract-wallpaper-preview.jpg'
import Background2 from '../images/Slc Photos/istockphoto-990060098-612x612.jpg'
import Background3 from '../images/Slc Photos/abstract-watercolor-paint-art-background-vector-21584438-2.jpg'

import ExtendSkewedSidebar from './ExtentedSkewedSidebar.js'

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
    margin-top: 50px;
    z-index: ${({ inView, amount }) => inView ? "0" : amount};
    transition: ${({ inView }) => inView ? "" : "all 0s linear .5s"};
    @media (min-width: 426px){
        height: 300px;
    }
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
`
const StyledLink = styled(Link)`
    color: rgb(126, 126, 126);
    font-style: italic;
    font-size: 24px;
    font-weight: 900;
    text-decoration: none;
    margin: 15px;
    margin-right: 20px;
`

const HomeTop = () => {
    const [inView, setInView] = useState(2)
    const contentArr = [
        { 
            backgroundColor: "#0f3e62e2",
            backgroundImage: Background1,
            title: "About",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {  
            backgroundColor: "#3d6581f2",
            backgroundImage: Background2,
            title: "Artists",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        { 
            backgroundColor: "#63a2bbf2",
            backgroundImage: Background3,
            title: "Community",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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
            {mappedContent}
        </HomeTopStyle>
    )
}

export default HomeTop;