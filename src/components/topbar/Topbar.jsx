import "./topbar.scss";
import {Person, Mail, LinkedIn, GitHub} from "@material-ui/icons";

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>

            <div className="wrapper">

                <div className="left">

                    <a href="#intro" className="logo">
                        Jacob Wik
                    </a>

                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span> 070-947 60 89</span>
                    </div>

                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span> Jacob.Wik.96@gmail.com</span>
                    </div>

                    <div className="itemContainer">
                        <LinkedIn className="icon"/>
                        <span> linkedin.com/in/jacob-wik-5a3376181 </span>
                    </div>
                    <div className="itemContainer">
                        <GitHub className="icon"/>
                        <span> https://github.com/JacobWik </span>
                    </div>
                </div>

                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}
