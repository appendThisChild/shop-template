import React from "react"

// styles
import StyledNeo from '../styles/NeoStyle.js'
import StyledInfoContentContainer from '../styles/InfoContentContainerStyle.js'

const InfoContentContainer = (props) => (
    <StyledInfoContentContainer {...props}>
        <div>
            <StyledNeo exposure={1.5} pressed="true" {...props}>
                <div>
                    <StyledNeo onClick={props.exit} element="button" >&#x276C;</StyledNeo>
                    <h1>{props.title}</h1>
                </div>
                <p>{props.description}</p>
            </StyledNeo>
        </div>
    </StyledInfoContentContainer>
)

export default InfoContentContainer;