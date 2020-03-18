import React, { useRef } from 'react'
import styled from 'styled-components'


const SectionStyle = styled.div`
    > aside {
        display: flex;  
    }
    > aside:first-child {
        margin-left: ${({ vertical }) => vertical ? "auto" : ""};
        margin-right: auto;
        grid-column: 1/-1;
        grid-row: ${({ vertical }) => vertical ? "1/2" : "5/6"};
        align-items: ${({ vertical }) => vertical ? "flex-start" : "center"};
    }
    > aside:last-child {
        margin-left: auto;
        margin-right: ${({ vertical }) => vertical ? "auto" : ""};
        grid-column: 1/-1;
        grid-row: ${({ vertical }) => vertical ? "10/-1" : "5/6"};
        align-items: ${({ vertical }) => vertical ? "flex-end" : "center"};
    }
    > aside > button {
        height: 3em;
        width: 3em;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 0;
        background-color: transparent;

        z-index: 10;
    }
    > aside > button > span {
        display: block;
        height: 1.5em;
        width: 1.5em;
        border-top-left-radius: .25em;
        border-bottom-right-radius: .25em;

        border-top: .25em solid dimgrey;
        border-right: .25em solid dimgrey;
    }
    > div {
        grid-row: 1/-1;
        grid-column: 1/-1;
    }
`
const ButtonStyle1 = styled.button`
    margin-top: ${({ vertical }) => vertical ? ".75em" : ""};
    margin-left: ${({ vertical }) => vertical ? "" : ".75em"};
`
const ButtonStyle2 = styled.button`
    margin-bottom: ${({ vertical }) => vertical ? ".75em" : ""};
    margin-right: ${({ vertical }) => vertical ? "" : ".75em"};
`

const ScrollSnapSection = ({ noBack, noForward, vertical, scroll, children }) => {
    let containerRef = useRef(null)
    const distanceOfElement = el => vertical ? el.getBoundingClientRect().height : el.getBoundingClientRect().width;
    const angle = vertical ? 135 : 45
    
    return(
        <SectionStyle ref={el => containerRef = el} vertical={vertical}>
            {!noBack ?
                <aside>
                    <ButtonStyle1 onClick={() => scroll(-distanceOfElement(containerRef))} vertical={vertical}>
                        <span style={{ transform: `rotate(${angle + 180}deg)`}}></span>
                    </ButtonStyle1>
                </aside>
            :null}
            <div>
                {children}
            </div>
            {!noForward ?
                <aside>
                    <ButtonStyle2 onClick={() => scroll(distanceOfElement(containerRef))} vertical={vertical}>
                        <span style={{ transform: `rotate(${angle}deg)`}}></span>
                    </ButtonStyle2>
                </aside>
            :null}
        </SectionStyle>
    )
}

export default ScrollSnapSection;