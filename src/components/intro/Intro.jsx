import "./intro.scss"
import { init } from "ityped";
import { useEffect, useRef } from "react";
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';


export default function Intro() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
             strings: ["Developer", "Designer", "Programmer", "Tech-Enthusiast", "Culinary Hobbyist"],
            })
    }, [])

    return (
        <div className="intro" id="intro">
            <div className="right">
                <div className="wrapper">
                    <h1>Hi, I'm a <span ref={textRef}> </span></h1>
                    <h2>Full-time student with lots of hobbies and <br></br>  always looking to improve in one way or another</h2>
                </div>
                <a href="#portfolio">
                    <ArrowCircleDownIcon/>
                </a>
            </div>
        </div>
    )
}
