import "./testimonials.scss";
//import {If, Then} from 'react-if-else';
const If = require("react-if-else")

export default function Testimonials() {


    const ost= [
        
            {
                icon:  "assets/js.png",
                desc: "Javascript",
                stack: "front-end"
            },
            {
                icon: "assets/css-3.png", 
                desc: "CSS",
                stack: "front-end"
            },
            {
                icon:  "assets/java.png",
                desc: "Java",
                stack: "back-end"
            },
            {
                icon: "assets/c-sharp.png", 
                desc: "C#",
                stack: "back-end"
            },
            {
                icon:  "assets/react.png",
                desc: "React",
                stack: "front-end"
            },
            {
                icon: "assets/c++.png", 
                desc: "C++",
                stack: "back-end"
            },
            {
                icon: "assets/linux.png", 
                desc: "linux",
                stack: "miscellaneous"
            },
            {
                icon: "assets/npm.png", 
                desc: "npm",
                stack: "miscellaneous"
            },
            {
                icon: "assets/git.png", 
                desc: "Git",
                stack: "miscellaneous"
            },
            {
                icon: "assets/sql-server.png", 
                desc: "SQL",
                stack: "back-end"
            },
            {
                icon: "assets/GitHub.png", 
                desc: "GitHub",
                stack: "miscellaneous"
            },
            {
                icon: "assets/HTML.png", 
                desc: "HTML",
                stack: "front-end"
            },
            {
                icon: "assets/nodejs.png", 
                desc: "Node.js",
                stack: "back-end"
            },
            {
                icon: "assets/Unity.png", 
                desc: "Unity",
                stack: "miscellaneous"
            }
    ]

    const tex = [
        {
            id:1,
            stack: "front-end",
            title: "Front-end",
            stackImage: "./assets/frontendIcon.png"
        },
        {
            id:2,
            stack: "back-end",
            title: "Back-end",
            stackImage: "./assets/backendIcon.png",
            featured: true
        },
        {
            id:3,
            stack: "miscellaneous",
            title: "Miscellaneous",
            stackImage: "./assets/miscelaneous.png"
        }
    ]

    return (
        <div className="testimonials" id="testimonials">
            <div className="testimonials" id="testimonials">
                <h1>Skills</h1>
                <div className="container">
                    {tex.map((d) => (
                    <div id={d.id} className={d.featured ? "card featured" : "card"}>
                        <div className="top">
                            <h1>{d.title}</h1>
                            <img src={d.stackImage}></img>
                        </div>
                        <div className="center">
                            {ost.map((o) => (
                                <If condition = {d.stack === o.stack}>
                                    <Then>
                                        <div className="wrapper">
                                        <img
                                        className="user"
                                        src={o.icon}
                                        alt=""
                                        />
                                        <p className="skillDesc">{o.desc}</p>
                                    </div>
                                    </Then>
                                </If>
                            ))}
                        </div>
                        <div className="bottom">
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
