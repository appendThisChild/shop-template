import React, { useState, useEffect } from 'react'

// images
import SmallLogo from '../images/A_trasp.png'
import Background1 from '../images/Slc-Photos/digital-art-artwork-abstract-wallpaper-preview.jpg'
import Background2 from '../images/Slc-Photos/istockphoto-990060098-612x612.jpg'
import Background3 from '../images/Slc-Photos/abstract-watercolor-paint-art-background-vector-21584438-2.jpg'

// components
import ExtendSkewedSidebar from './ExtentedSkewedSidebar.js'

// styles
import StyledHomeMain from '../styles/HomeMainStyle.js'

const HomeMain = props => {
    const { section } = props.match.params
    const [inView, setInView] = useState(null)
    const contentArr = [
        { 
            backgroundColor: "#0f3e62",
            backgroundImage: Background1,
            title: "about",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {  
            backgroundColor: "#b51b43",
            backgroundImage: Background2,
            title: "the artists",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        { 
            backgroundColor: "#1a9991",
            backgroundImage: Background3,
            title: "community",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
    ]
    useEffect(() => {
        const sectionIndex = contentArr.findIndex(obj => obj.title === section)
        if (sectionIndex > -1) setInView(sectionIndex + 1);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const { length } = contentArr
    const mappedContent = contentArr.map((content, i) => <ExtendSkewedSidebar key={i} inView={inView} setInView={setInView} num={i + 1} amount={length + 1} {...content}/>)
    return(
        <StyledHomeMain id="info">
            {mappedContent}
            <aside>
                <img src={SmallLogo} alt=""/>
            </aside>
        </StyledHomeMain>
    )
}

export default HomeMain;