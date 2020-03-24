import React, { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'

// styles
import StyledRotatingQuotes from '../styles/RotatingQuotesStyle.js'

let myInterval = 0;

const RotatingQuotes = () => {
    const [showing, setShowing] = useState(0)
    let containerRef = useRef(null)
    let quoteRef = useRef(null)
    const quotes = [
        {
            quote: "The essence of all beautiful art, all great art, is gratitude.",
            author: "Friedrich Nietzsche"
        },
        {
            quote: "Art enables us to find ourselves and lose ourselves at the same time.",
            author: "Thomas Merton"
        },
        {
            quote: "Every child is an artist. The problem is how to remain an artist once we grow up.",
            author: "Pablo Picasso"
        },
        {
            quote: "Have no fear of perfection, you’ll never reach it.",
            author: "Salvador Dali"
        },
        {
            quote: "We don’t make mistakes, just happy little accidents.",
            author: "Bob Ross"
        }
    ]

    const loop = () => myInterval = setInterval(() => setShowing(prev => (prev + 1 >= quotes.length ? 0 : prev + 1)), 10000);
    useEffect(() => {
        gsap.from(quoteRef, { duration: 2.5, y: "50px", ease: "power4.out" });
        gsap.from(containerRef, { duration: 2.5, opacity: 0 });
    }, [showing])

    useEffect(() => {
        loop()
        return () => clearInterval(myInterval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
        <StyledRotatingQuotes ref={el => containerRef = el}>
            <div>
                <span>&#x275D;</span>
                <p ref={el => quoteRef = el}>{quotes[showing].quote}</p>
                <span>&#x275E;</span>
            </div>
            <p>~ {quotes[showing].author}</p>
        </StyledRotatingQuotes>
    )
}

export default RotatingQuotes;