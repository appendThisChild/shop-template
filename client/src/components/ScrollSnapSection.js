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
        flex-direction: ${({ vertical }) => vertical ? "column" : ""};
        justify-content: center;
        align-items: center;

        z-index: 10;
    }
    > div {
        grid-row: 1/-1;
        grid-column: 1/-1;
    }
`
const ButtonStyle1 = styled.button`
    margin-top: ${({ vertical }) => vertical ? "0px" : ""};
    margin-left: ${({ vertical }) => vertical ? "" : "7px"};
`
const ButtonStyle2 = styled.button`
    margin-bottom: ${({ vertical }) => vertical ? "0px" : ""};
    margin-right: ${({ vertical }) => vertical ? "" : "7px"};
`
const Arrow = styled.span`
    color: slategrey;
    font-size: 16px;

    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: .85px;

    width: 30px;
    height: 20px;
`
const ArrowText = styled.span`
    color: slategrey;
    font-size: 12px;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 10px;
`

const ScrollSnapSection = ({ noBack, noForward, top, bottom, next, previous, vertical, scroll, children }) => {
    let containerRef = useRef(null)
    const distanceOfElement = el => vertical ? el.getBoundingClientRect().height : el.getBoundingClientRect().width;
    const angle = vertical ? 90 : 0
    
    return(
        <SectionStyle ref={el => containerRef = el} vertical={vertical}>
            {!noBack ?
                <aside>
                    <ButtonStyle1 onClick={() => scroll(-distanceOfElement(containerRef))} vertical={vertical}>
                        <Arrow style={{ transform: `rotate(${angle + 180}deg) scaleX(.7) scaleY(2)`}}>&#x276F;</Arrow>
                        <ArrowText style={{ transform: !vertical ? `rotate(90deg)`: ""}}>{previous || top}</ArrowText>
                    </ButtonStyle1>
                </aside>
            :null}
            <div>
                {children}
            </div>
            {!noForward ?
                <aside>
                    <ButtonStyle2 onClick={() => scroll(distanceOfElement(containerRef))} vertical={vertical}>
                        <ArrowText style={{ transform: !vertical ? `rotate(-90deg)`: ""}}>{next ||bottom}</ArrowText>
                        <Arrow style={{ transform: `rotate(${angle}deg) scaleX(.7) scaleY(2)`}}>&#x276F;</Arrow>
                    </ButtonStyle2>
                </aside>
            :null}
        </SectionStyle>
    )
}

export default ScrollSnapSection;