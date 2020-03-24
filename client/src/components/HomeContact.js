import React, { useEffect } from 'react'
// import gsap from 'gsap'

// import SmallLogo from '../images/A_trasp.png'
import LargeLogo from '../images/artists_SLC_transp.png'

// styles
import StyledNeo from '../styles/NeoStyle.js'
import { StyledHomeContact } from '../styles/HomeContactStyle.js'
// , Gear, Tooth, Center, Spoke

const HomeContact = () => {
    // const [teeth, setTeeth] = useState([])
    // let gear1Ref = useRef(null)
    // let gear2Ref = useRef(null)

    // const creatTeeth = () => {
    //     const teethCount = []
    //     for (let i = 0; i < 21; i++){
    //         teethCount.push(i)
    //     }
    //     setTeeth(teethCount)
    // }
    useEffect(() => {
        // creatTeeth()
        // gsap.set(gear1Ref, { scale: .7 });
        // gsap.set(gear2Ref, { scale: .35, x: -70, y: -73 });
        // gsap.to(gear1Ref, { rotate: -360, duration: 20, repeat: -1, ease: "none" });
        // gsap.to(gear2Ref, { rotate: 360, duration: 9.53, repeat: -1, ease: "none" });
    }, [])
    // const mappedTeeth = teeth.map((tooth, i) => <Tooth key={i} total={teeth.length} tooth={i}><div></div></Tooth>)
    // const mappedTeeth2 = teeth.map((tooth, i) => i < 10 ? <Tooth key={i} total={10} tooth={i}><div></div></Tooth> : null)
    // const mappedSpoke = teeth.map((spoke, i) => i < 4 ? <Spoke key={i} total={4} spoke={i}><div><div></div><div></div></div></Spoke> : null)
    // const mappedSpoke2 = teeth.map((spoke, i) => i < 4 ? <Spoke key={i} total={4} image={true} spoke={i}><div><div></div><div></div></div></Spoke> : null)
    return(
        <StyledHomeContact id="contact" className="anything">
            <div className="a1"/>
            <div className="a2"/>
            <div className="logoContainer">
                <img className="bottomLogo" src={LargeLogo} alt="" />
                <StyledNeo>
                    <button>CONTACT</button>
                </StyledNeo>
            </div>
            

            {/* <Gear flat={true}>
                <div ref={el => gear1Ref = el}>
                    {mappedTeeth} 
                    <Center total={teeth.length}><div>
                        <div>
                            {mappedSpoke}
                            <div><aside></aside></div>
                        </div>
                    </div></Center>
                </div>
            </Gear>
            <Gear>
                <div ref={el => gear2Ref = el}>
                    {mappedTeeth2} 
                    <Center backgroundImage={SmallLogo}  total={teeth.length}><div>
                        <div>
                            {mappedSpoke2}
                            <div><aside></aside></div>
                        </div>
                    </div></Center>
                </div>
            </Gear> */}
        </StyledHomeContact>
    )
}

export default HomeContact;