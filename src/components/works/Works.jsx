import "./works.scss"
import { useState } from "react";
import React from "react";
import ReactPlayer from "react-player";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Ape-Catraz",
      desc:
        "A video game made by me and 7 more students during one of our courses ",
      img:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
      embedId:"https://www.youtube.com/watch?v=liJVSwOiiwg&ab_channel=WebbyFan.com",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Mobile Application",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
      embedId:"https://www.youtube.com/watch?v=liJVSwOiiwg&ab_channel=WebbyFan.com",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Mobile",
      desc:
        "Space Hunter XZ is a group project i made with another student during my MobileApp course.  https://play.google.com/store/apps/details?id=com.NOLLFYRAStudios.SpaceHunterXZ",
      img:
        "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
      embedId:"https://www.youtube.com/watch?v=liJVSwOiiwg&ab_channel=WebbyFan.com",
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
