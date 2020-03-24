import styled from 'styled-components'

const StyledHomeTop = styled.div`
    display: grid;
    grid-template-columns: repeat(10, 10vw);
    grid-template-rows: repeat(10, 10vh);
    overflow: hidden;
    > main {
        grid-row: 1/-1;
        grid-column: 1/-1;
        background-image: url(${({ backgroundImage }) => backgroundImage});
        background-position: center;
        background-size: cover;
    }
    > nav {
        grid-row: 1/2;
        grid-column: 1/-1;
    }
    > nav > a {
        display: flex;
        justify-content: flex-end;
        align-items: flex-start;

        padding-top: 15px;
        padding-right: 20px;
        color: white;

        font-style: italic;
        font-size: 25px;
        line-height: 25px;
        font-weight: 900;
        letter-spacing: 1.25px;
        text-decoration: none;
    }
    > nav > a:hover {
        color: darkgrey;
    }
`
const StyledHomeTopLogoContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    grid-row: 1/-1;
    grid-column: 1/-1;

    > img {
        border-radius: 50%;
        box-shadow: 0px 0px 10px 0px black;

        height: 200px;
        margin-left: 5vw;
        margin-top: 5vh;
        @media (min-width: 768px){
            height: 300px;
        }
    }
`
const StyledShopLinkContainer = styled.div`
    grid-row: 1/-1;
    grid-column: 1/-1;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    > a {
        border-radius: 12px;
        
        margin-bottom: 8vh;
        padding: 10px;
        padding-right: 20px;
        padding-left: 20px;

        color: white;
        font-style: italic;
        font-size: 28px;
        line-height: 28px;
        letter-spacing: 1.5px;
        text-decoration: none;
    }
`

export { StyledHomeTop, StyledHomeTopLogoContainer, StyledShopLinkContainer };