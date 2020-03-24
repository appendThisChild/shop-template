import styled from 'styled-components'

const StyledHomeContact = styled.div`
    display: grid;
    grid-template-columns: repeat(10, 10vw);
    grid-template-rows: repeat(10, 10vh);
`
const Gear = styled.div`
    grid-row: 1/-1;
    grid-column: 1/-1;

    // margin-top: 5vh;
    

    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    > div {
        display: grid;
        grid-template-columns: repeat(10, 10%);
        grid-template-rows: repeat(10, 10%);
        
        height: 200px;
        width: 200px;
        overflow: ${({ flat }) => flat ? "hidden" : ""};
        border-radius: 50%;
    } 
    > div > div {
        display: flex;
        align-items: center;
        justify-content: center;
        grid-row: 1/-1;
        grid-column: 1/-1;
    }
`
const Tooth = styled.div`
    transform: rotate(${({ total, tooth }) => 180 / total * tooth}deg);
    > div {
        background-color: black;
        height: 105%;
        width: ${({ total }) => 190 / total}%;
        border-radius: 50%;
    }
`
const Center = styled.div`
    z-index: 1;
    > div {
        height: 85%;
        width: 85%;
        border-radius: 50%;
        background-color: black;
        background-image: url(${({ backgroundImage }) => backgroundImage});
        background-size: 100%;
        background-position: center;
        
        display: flex;
        align-items: center;
        justify-content: center;
    }
    > div > div {
        border-radius: 50%;
        height: 85%;
        width: 85%;

        display: grid;
        grid-template-columns: repeat(10, 10%);
        grid-template-rows: repeat(10, 10%);
    }
    > div > div > div {
        display: flex;
        align-items: center;
        justify-content: center;
        grid-row: 1/-1;
        grid-column: 1/-1;
    }
    > div > div > div > aside {
        background-color: ${({ backgroundImage }) => backgroundImage ? "" : "white"};
        border-radius: 50%;
        height: 19px;
        width: 19px;
    }
`
const Spoke = styled.div`
    transform: rotate(${({ total, spoke }) => 180 / total * spoke}deg);
    > div {
        height: 100%;
        width: ${({ total }) => 100 / total}%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }
    > div > div {
        margin: ${({ spoke }) => spoke % 2 === 0 ? `5px` : `2px`};
        height: ${({ spoke }) => spoke % 2 === 0 ? `45px` : `14px`};
        width: ${({ spoke }) => spoke % 2 === 0 ? `45px` : `14px`};
        background-color: ${({ image }) => image ? "" : "white"};
        border-radius: 50%;
    }
`

export { StyledHomeContact, Gear, Tooth, Center, Spoke };