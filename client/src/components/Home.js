import React, { useEffect} from 'react'
// import gsap from 'gsap'

// components
import ScrollSnap from './ScrollSnap.js'
import ScrollSnapSection from "./ScrollSnapSection.js"
import HomeTop from './HomeTop.js'
import HomeMain from './HomeMain.js'
import HomeContact from './HomeContact.js'

const Home = props => {
    const { section } = props.match.params
    useEffect(() => {
        const id = document.getElementById(section)
        if (id) id.scrollIntoView();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return(
        <ScrollSnap vertical={true}>
            <ScrollSnapSection bottom="info">
                <HomeTop />
            </ScrollSnapSection>
            <ScrollSnapSection top="top" bottom="preview">
                <HomeMain {...props}/>
            </ScrollSnapSection>
            <ScrollSnapSection top="info" bottom="contact">
                <ScrollSnap>
                    <ScrollSnapSection next="more">
                    <section id="inProgress">
                        Section
                    </section>
                    </ScrollSnapSection>
                    <ScrollSnapSection previous="preview">
                    <section >
                        Section 2
                    </section>
                    </ScrollSnapSection>
                </ScrollSnap>
            </ScrollSnapSection>
            <ScrollSnapSection top="preview">
                <HomeContact />
            </ScrollSnapSection>
        </ScrollSnap>
    )
}

export default Home;