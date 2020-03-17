import React from "react"
import styled from 'styled-components'

import SmallLogo from '../images/A_trasp.png'

const ContainerDiv = styled.div`
    // transform: skewx(-10deg);
    left: ${({ num }) => 15 - ( num * 10)}vw;
    position: relative;
    grid-row: 1/-1;
    grid-column: 1/-1;

    display: grid;
    grid-template-columns: repeat(10, 10vw);
    grid-template-rows: repeat(10, 10vh);
`
const ImgContainer = styled.div`
    transform: skewx(-10deg);

    position: absolute;
    top: 0;
    left: 95vw;

    
    // grid-row: 1/3;
    // grid-column: 8/-1;

    // display: flex;
    // justify-content: flex-end;
`
const Img = styled.img`
    transform: skewx(-10deg);
    height: 60px;
    // margin-top: 5px;
    margin-right: 5px;
`
const H1 = styled.h1`
    color: white;

`
const P = styled.p`
    color: white;
    
`

const IntroContainer = (props) => {
    console.log(props)
    return(
        <ContainerDiv {...props}>
            {/* <ImgContainer {...props}>
                <Img src={SmallLogo} alt=""/>
            </ImgContainer> */}
            <H1 className="headersection"><Img src={SmallLogo} alt=""/>{props.title}</H1>
            <P className="psection">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. </P>
        </ContainerDiv>
    )
}

export default IntroContainer;