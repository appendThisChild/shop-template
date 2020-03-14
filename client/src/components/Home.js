import React, { useRef } from 'react'
import styled from 'styled-components'
// import gsap from 'gsap'

// components
import HomeSection from "./HomeSection.js"
import HomeTop from './HomeTop.js'

const HomeStyle = styled.div`
    height: 100vh;
    overflow: scroll;
    scroll-snap-type: y mandatory;

    > div {
        height: 100vh;
        scroll-snap-align: center;
        scroll-snap-stop: always;
    }
`

const Home = () => {
    let containerElement = useRef(null)
    const scrollUpDown = height => containerElement.scrollTo({ top: containerElement.scrollTop + height, behavior: "smooth" });

    // useEffect(() => {
    //     console.log(containerElement.getBoundingClientRect())
    // }, [])
    
    return(
        <HomeStyle ref={el => containerElement = el}>
            <HomeSection scroll={scrollUpDown} noTop={true}>
                <HomeTop />
            </HomeSection>
            <HomeSection scroll={scrollUpDown}>
                <main>
                    Main
                </main>
            </HomeSection>
            <HomeSection scroll={scrollUpDown}>
                <section>
                    Section
                </section>
            </HomeSection>
            <HomeSection scroll={scrollUpDown} noBottom={true}>
                <footer>
                    Bottom
                </footer>
            </HomeSection>
        </HomeStyle>
    )
}

export default Home;