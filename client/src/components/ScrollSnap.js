import React, { useRef, cloneElement, Children } from 'react'

import StyledScrollSnap from '../styles/ScrollSnapStyle.js'

// Notes:
// Accepted properties:
// vertical = true - default = undefined resulting in horizontal
// 
// height = "10px" - default = "100vh"
// 
// width = "10em" - default = "100vw"
//
// "%" - percentages do not work

const ScrollSnap = props => {
    const { vertical, children } = props
    let containerRef = useRef(null)
    const verticalMove = distanceLength => containerRef.scrollTo({ top: containerRef.scrollTop + distanceLength, behavior: "smooth" });
    const horiozontalMove = distanceLength => containerRef.scrollTo({ left: containerRef.scrollLeft + distanceLength, behavior: "smooth" });
    const scroll = vertical ? verticalMove : horiozontalMove
    const childElements = Children.map(children, (child, i) => {
        if (i === 0 && !children.length){ return cloneElement(child, { vertical, scroll, noBack: true, noForward: true }) } 
        else if (i === 0){ return cloneElement(child, { vertical, scroll, noBack: true }) } 
        else if (i === children.length - 1){ return cloneElement(child, { vertical, scroll, noForward: true }) } 
        else { return cloneElement(child, { vertical, scroll }) }
    })
    return(
        <StyledScrollSnap ref={el => containerRef = el} {...props}>
            {childElements}
        </StyledScrollSnap>
    )
}

export default ScrollSnap;