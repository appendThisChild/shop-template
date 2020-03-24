import React from 'react'
import { Link } from "react-router-dom"

// images
import MediumLogo from '../images/A2_transp.png'
import Background from '../images/Slc-Photos/alexzeer150700281.jpg'

// components
import RotatingQuotes from "./RotatingQuotes.js"

// styles
import { StyledHomeTop, StyledHomeTopLogoContainer, StyledShopLinkContainer } from '../styles/HomeTopStyle.js'
import StyledNeo from '../styles/NeoStyle.js'

const HomeTop = () => {
    return(
        <StyledHomeTop backgroundImage={Background}>
            <main />
            <nav><Link to="/">Sign up</Link></nav>
            <StyledHomeTopLogoContainer>
                <img src={MediumLogo} alt=""/>
            </StyledHomeTopLogoContainer>
            <StyledShopLinkContainer>
                <StyledNeo to="/" element={Link} exposure={1.5} animation="true">shop</StyledNeo>
            </StyledShopLinkContainer>
            <RotatingQuotes />
        </StyledHomeTop>
    )
}

export default HomeTop;