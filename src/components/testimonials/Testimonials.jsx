import "./testimonials.scss";
import {If, Then} from 'react-if-elseif-else-render';

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
            }
    ]

    const tex = [
        {
            id:1,
            stack: "front-end",
            title: "front-end"
        },
        {
            id:2,
            stack: "back-end",
            title: "back-end",
            featured: true
        },
        {
            id:3,
            stack: "miscellaneous",
            title: "miscellaneous"
        }
    ]

    const data = [
        {
            id: 1,
            title: "front-end",
            
            icon1: "assets/js.png",
            desc1: "Javascript",

            icon2: "assets/css-3.png",
            desc2:  "CSS/SCSS",
            
            icon3: "assets/HTML.png",
            desc3:  "HTML",

            icon4: "assets/react.png",
            desc4:  "React",
        },
        {
          id: 2,
          title: "back-end",

            icon1: "assets/java.png",
            desc1:  "Java",
            
            icon2: "assets/linkedin.png",
            desc2:  "C#",

            icon3: "assets/linkedin.png",
            desc3: "C++",

            icon4: "assets/linkedin.png",
            desc4:  "SQL",

          featured: true,
        },
        {
          id: 3,
          title: "miscellaneous",

          icon1: "assets/react.png",
          desc1:
              "React",

          icon2: "assets/linkedin.png",
          desc2:
              "Node.js",
          
          icon3: "assets/linkedin.png",
          desc3:
              "linux",

          icon4: "assets/linkedin.png",
          desc4:
              "Git",

          icon5: "assets/linkedin.png",
          desc5:
              "GitHub",

          icon6: "assets/linkedin.png",
          desc6:
          "npm",
        },
      ];

    return (
        <div className="testimonials" id="testimonials">
            <div className="testimonials" id="testimonials">
                <h1>Testimonials</h1>
                <div className="container">
                    {tex.map((d) => (
                    <div id={d.id} className={d.featured ? "card featured" : "card"}>
                        <div className="top">
                            <h1>{d.title}</h1>
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
