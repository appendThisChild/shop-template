import React, { useRef } from 'react'
import styled from 'styled-components'


const SectionStyle = styled.div`
    display: grid;
    grid-template-rows: repeat(10, 10vh);

    > aside {
        margin-right: auto;
        margin-left: auto;
        display: flex;
        justify-content: center;   
    }
    > aside:first-child {
        grid-column: 1/-1;
        grid-row: 1/2;
        align-items: flex-start;
    }
    > aside:last-child {
        grid-column: 1/-1;
        grid-row: 10/-1;
        align-items: flex-end;
    }
    > aside > button {
        height: 3em;
        width: 3em;
        display: flex;
        justify-content: center;
        align-items: center;

        border: 0;
        background-color: transparent;
    }
    > aside > button > span {
        display: block;
        height: 1.5em;
        width: 1.5em;
        border-top-left-radius: .3em;
        border-bottom-right-radius: .3em;
        transform: rotate(-45deg);
    }
    > div {
        grid-row: 1/-1;
        grid-column: 1/-1;
    }
`
const ButtonStyle1 = styled.button`
    margin-top: .5em;
`
const ButtonStyle2 = styled.button`
    margin-bottom: .5em;
`
const SpanStyle1 = styled.span`
    margin-top: 1em;
    border-top: .3em solid rgba(0,0,0,.5);
    border-right: .3em solid rgba(0,0,0,.5);
`
const SpanStyle2 = styled.span`
    margin-bottom: 1em;
    border-bottom: .3em solid rgba(0,0,0,.5);
    border-left: .3em solid rgba(0,0,0,.5);
`

const HomeSection = ({ noTop, noBottom, scroll, children }) => {
    let containerRef = useRef(null)
    const heightOfElement = el => el.getBoundingClientRect().height;

    return(
        <SectionStyle ref={el => containerRef = el} className="sectionStyle">
            {!noTop ?
                <aside>
                    <ButtonStyle1 onClick={() => scroll(-heightOfElement(containerRef))}>
                        <SpanStyle1></SpanStyle1>
                    </ButtonStyle1>
                </aside>
            :null}
            <div>
                {children}
            </div>
            {!noBottom ?
                <aside>
                    <ButtonStyle2 onClick={() => scroll(heightOfElement(containerRef))}>
                        <SpanStyle2></SpanStyle2>
                    </ButtonStyle2>
                </aside>
            :null}
        </SectionStyle>
    )
}

export default HomeSection;