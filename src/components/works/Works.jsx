import "./works.scss"
import { useState } from "react";
import React from "react";
import ReactPlayer from "react-player";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: "1",
      icon: "./assets/controller.svg",
      title: "Ape-Catraz",
      desc:
        "A video game made by me and 7 more students during one of our courses ",
      embedId:"https://www.youtube.com/watch?v=ScMzIvxBSi4",
    },
    {
      id: "2",
      icon: "./assets/Robot.svg",
      title: "Minimax Algorithm",
      desc:
        "A small game of 4 in a row/chess against an AI using the mini-max algorithm",
      embedId:"https://www.youtube.com/watch?v=3HuEk4bkoBQ&ab_channel=JacobWik",
    },
    {
      id: "3",
      icon: "./assets/mobile.svg",
      title: "Mobile",
      desc:
        "Space Hunter XZ is a group project i made with another student during my MobileApp course.", //https://play.google.com/store/apps/details?id=com.NOLLFYRAStudios.SpaceHunterXZ",
      embedId:"https://www.youtube.com/watch?v=ScMzIvxBSi4",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

    return (
        <div className="works" id="works">
            <div
                className="slider"
                style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
            >
                {data.map(d=>(
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={d.icon} alt="" />
                                </div>
                                <h2>{d.title}</h2>
                                <p>
                                 {d.desc}
                                </p>
                            </div>
                        </div>
                        <div className="right">
                          <ReactPlayer
                            url={d.embedId}
                            width="90%"
                            height="90%"
                          />
                        </div>
                    </div>
                </div>
            ))}
            </div>

            <img
                src="assets/arrow3.png"
                className="arrow left"
                alt=""
                onClick={() => handleClick("left")}
             />
            <img
                src="assets/arrow3.png"
                className="arrow right"
                alt=""
                onClick={() => handleClick()}
            />
        </div>
    )
}
