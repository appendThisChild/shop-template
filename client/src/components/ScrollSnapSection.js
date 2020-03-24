import React, { useRef } from 'react'

import { StyledScrollSnapSection, StyledButton1, StyledButton2, StyledArrow, StyledArrowText } from '../styles/ScrollSnapSectionStyle.js'

const ScrollSnapSection = ({ noBack, noForward, top, bottom, next, previous, vertical, scroll, children }) => {
    let containerRef = useRef(null)
    const distanceOfElement = el => vertical ? el.getBoundingClientRect().height : el.getBoundingClientRect().width;
    const angle = vertical ? 90 : 0
    return(
        <StyledScrollSnapSection ref={el => containerRef = el} vertical={vertical}>
            {!noBack ?
                <aside>
                    <StyledButton1 onClick={() => scroll(-distanceOfElement(containerRef))} vertical={vertical}>
                        <StyledArrow style={{ transform: `rotate(${angle + 180}deg) scaleX(.7) scaleY(2)`}}>&#x276F;</StyledArrow>
                        <StyledArrowText style={{ transform: !vertical ? `rotate(90deg)`: ""}}>{previous || top}</StyledArrowText>
                    </StyledButton1>
                </aside>
            :null}
            <div>
                {children}
            </div>
            {!noForward ?
                <aside>
                    <StyledButton2 onClick={() => scroll(distanceOfElement(containerRef))} vertical={vertical}>
                        <StyledArrowText style={{ transform: !vertical ? `rotate(-90deg)`: ""}}>{next ||bottom}</StyledArrowText>
                        <StyledArrow style={{ transform: `rotate(${angle}deg) scaleX(.7) scaleY(2)`}}>&#x276F;</StyledArrow>
                    </StyledButton2>
                </aside>
            :null}
        </StyledScrollSnapSection>
    )
}

export default ScrollSnapSection;