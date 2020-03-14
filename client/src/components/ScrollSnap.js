import React, { useRef, cloneElement, Children } from 'react'
import styled from 'styled-components'

const tenthOfTheSize = length => {
    const stringArr = length.split(/([0-9]+)/).filter(Boolean)
    return `${parseFloat(stringArr[0]) / 10}${stringArr[1]}`
}

const ContainerStyle = styled.div`
    display: ${({ vertical }) => vertical ? "" : "flex"};
    height: ${({ height }) => height ? height : "100vh"};
    width: ${({ width }) => width ? width : "100vw"};
    overflow: scroll;
    scroll-snap-type: ${({ vertical }) => vertical ? "y mandatory" : "x mandatory"};

    > div {
        display: grid;
        grid-template-rows: repeat(10, ${({ height }) => height ? tenthOfTheSize(height) : "10vh"});

        flex: 0 0 auto;
        height: ${({ height }) => height ? height : "100vh"};
        width: ${({ width }) => width ? width : "100vw"};
        scroll-snap-align: center;
        scroll-snap-stop: always;
    }
`

// Notes:
// 
// Accepted properties:
//
// vertical = true 
//      default = undefined resulting in horizontal
// 
// height = "10px" 
//      default = "100vh"
// 
// width = "10em" 
//      default = "100vw"
//
// "%" - percentages do not work
//

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
        <ContainerStyle ref={el => containerRef = el} {...props}>
            {childElements}
        </ContainerStyle>
    )
}

export default ScrollSnap;