import React from "react"
import styled from 'styled-components'

// import SmallLogo from '../images/A_trasp.png'

const ContainerDiv = styled.div`
    transform: skewx(-10deg);
    width: 100vw;
    position: relative;
    left: -5vw;
    grid-row: 1/-1;
    grid-column: 3/-1;

    display: grid;
    grid-template-columns: repeat(10, 10vw);
    grid-template-rows: repeat(10, 10vh);
`
// const Img = styled.img`
//     grid-row: 1/2;
//     grid-column: 9/-1;
//     height: 60px;
//     margin-top: 25px;
//     margin-left: auto;
//     margin-right: 25px;

//     border-radius: 50%;
//     box-shadow: 0px 0px 10px 0px black;
// `
const ContentContainer = styled.div`
    display: flex;
    align-items: center;
    grid-row: 1/10;
    grid-column: 1/-1;

    margin: 15px;
    opacity: ${({ inView, num }) => inView === num ? "1" : "0"};
    transition: all .5s linear 0s;
    > div {
        background-color: ${({ backgroundColor }) => backgroundColor};
        padding: 15px;
        color: whitesmoke;
    }
`
const H1 = styled.h1`
    border-bottom: 1px solid white;
    padding-bottom: 8px;

    font-size: 48px;
    line-height: 47px;
    font-weight: 500;
    letter-spacing: 2px;
`
const P = styled.p`
    padding-top: 10px;

    font-size: 22px;
    // font-weight: 900;
    letter-spacing: 1px;

`
const IntroContainer = (props) => {
    console.log(props)
    return(
        <ContainerDiv {...props}>
            {/* <Img src={SmallLogo} alt=""/> */}
            <ContentContainer {...props}>
                <div>
                    <H1>{props.title}</H1>
                    <P>{props.description}</P>
                </div>
            </ContentContainer>
        </ContainerDiv>
    )
}

export default IntroContainer;