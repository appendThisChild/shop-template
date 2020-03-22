import React, { useState } from 'react'
import styled from 'styled-components'

const Style = styled.div`
    box-shadow: 
        ${({ inset }) => inset === "" ? "inset" : ""}
        -${({ exposure }) => exposure ? exposure * 2 : 2}px 
        -${({ exposure }) => exposure ? exposure * 2 : 2}px 
        ${({ exposure }) => exposure ? exposure * 8 : 8}px 
        -${({ exposure }) => exposure ? exposure * 3 : 3}px 
        rgb(230, 230, 230),
        ${({ inset }) => inset === "" ? "inset" : ""}
        ${({ exposure }) => exposure ? exposure * 4 : 4}px 
        ${({ exposure }) => exposure ? exposure * 4 : 4}px 
        ${({ exposure }) => exposure ? exposure * 8 : 8}px 
        -${({ exposure }) => exposure ? exposure * 2 : 2}px 
        rgb(25, 25, 25);
`

const NeoStyle = props => {
    const [inset, setInset] = useState(Boolean(props.pressed))
    return <Style 
        onMouseEnter={() => !Boolean(props.animation) ? null : setInset(!inset)}
        onMouseLeave={() => !Boolean(props.animation) ? null : setInset(!inset)}
        inset={inset ? "" : undefined}
        as={props.element} 
        {...props}
    />
};

export default NeoStyle;