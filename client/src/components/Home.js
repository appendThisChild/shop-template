import React, { useEffect} from 'react'
// import styled from 'styled-components'
// import gsap from 'gsap'

// components
import ScrollSnap from './ScrollSnap.js'
import ScrollSnapSection from "./ScrollSnapSection.js"
import HomeTop from './HomeTop.js'



const Home = () => {

    useEffect(() => {
        // document.getElementById("inProgress").scrollIntoView()
    }, [])
    
    return(
        <ScrollSnap vertical={true}>
            <ScrollSnapSection>
                <HomeTop />
            </ScrollSnapSection>
            <ScrollSnapSection>
                <main>
                    Main
                </main>
            </ScrollSnapSection>
            <ScrollSnapSection>
                <ScrollSnap>
                    <ScrollSnapSection>
                    <section>
                        Section
                    </section>
                    </ScrollSnapSection>
                    <ScrollSnapSection>
                    <section id="inProgress">
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