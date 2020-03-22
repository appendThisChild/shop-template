import React from 'react'

// components
import InfoContentContainer from './InfoContentContainer.js'

// styles
import StyledNeo from '../styles/NeoStyle.js'
import StyledInfoTitleButton from '../styles/InfoTitleButtonStyle.js'
import StyledInfoTabButton from '../styles/InfoTabButtonStyle.js'
import StyledInfoContainer from '../styles/InfoContainerStyle.js'

const ExtendSkewedSidebar = (props) => {
    const { inView, setInView, num, title } = props
    return(
        <>
            <StyledInfoTitleButton {...props}>
                <span onClick={() => setInView(num)}>{title}</span>
            </StyledInfoTitleButton>
            <StyledInfoContainer id={title} onClick={() => inView === num ? null : setInView(num)} {...props}>
                <InfoContentContainer exit={() => setInView(inView === num ? null : num)} {...props}/>
                <StyledInfoTabButton {...props}>
                    <StyledNeo pressed="true" element="button" {...props}>&#x276D;</StyledNeo>
                </StyledInfoTabButton>
            </StyledInfoContainer>
        </>
    )
}

export default ExtendSkewedSidebar;