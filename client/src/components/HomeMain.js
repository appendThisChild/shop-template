import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import SmallLogo from '../images/A_trasp.png'
import Background1 from '../images/Slc-Photos/digital-art-artwork-abstract-wallpaper-preview.jpg'
import Background2 from '../images/Slc-Photos/istockphoto-990060098-612x612.jpg'
import Background3 from '../images/Slc-Photos/abstract-watercolor-paint-art-background-vector-21584438-2.jpg'

import ExtendSkewedSidebar from './ExtentedSkewedSidebar.js'

const HomeMainStyle = styled.div`
    display: grid;
    grid-template-columns: repeat(10, 10vw);
    grid-template-rows: repeat(10, 10vh);
    overflow: hidden;
`
const BackgroundSection = styled.div`
    background-Image: url(${({ backgroundImage }) => backgroundImage});
    background-size: auto 100vh;
    background-position: center;
    transform: skewx(10deg);
    overflow: hidden;
    left: -25vw;
    position: relative;
    grid-row: 1/-1;
    grid-column: 1/2;
    width: 30vw;
`
const ImgContainer = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    grid-row: 9/-1;
    grid-column: 8/-1;
`
const Img = styled.img`
    height: 50px;
    margin-bottom: 15px;
    margin-right: 15px;
    border-radius: 50%;
    box-shadow: 0px 0px 10px 0px black;
`

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
            title: "artists",
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
        <HomeMainStyle id="info">
            <BackgroundSection backgroundImage={inView ? contentArr[inView - 1].backgroundImage : contentArr[0].backgroundImage} />
            {mappedContent}
            <ImgContainer>
                <Img src={SmallLogo} alt=""/>
            </ImgContainer>
        </HomeMainStyle>
    )
}

export default HomeMain;