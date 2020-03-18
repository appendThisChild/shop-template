import React, { useEffect} from 'react'
// import styled from 'styled-components'
// import gsap from 'gsap'

// components
import ScrollSnap from './ScrollSnap.js'
import ScrollSnapSection from "./ScrollSnapSection.js"
import HomeTop from './HomeTop.js'
import HomeMain from './HomeMain.js'

const Home = props => {
    const { section } = props.match.params
    useEffect(() => {
        const id = document.getElementById(section)
        if (id) id.scrollIntoView();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return(
        <ScrollSnap vertical={true}>
            <ScrollSnapSection>
                <HomeTop />
            </ScrollSnapSection>
            <ScrollSnapSection>
                <HomeMain {...props}/>
            </ScrollSnapSection>
            <ScrollSnapSection>
                <ScrollSnap>
                    <ScrollSnapSection>
                    <section>
                        Section
                    </section>
                    </ScrollSnapSection>
                    <ScrollSnapSection>
                    <section >
                        Section 2
                    </section>
                    </ScrollSnapSection>
                </ScrollSnap>
            </ScrollSnapSection>
            <ScrollSnapSection>
                <footer>
                    Bottom
                </footer>
            </ScrollSnapSection>
        </ScrollSnap>
    )
}

export default Home;