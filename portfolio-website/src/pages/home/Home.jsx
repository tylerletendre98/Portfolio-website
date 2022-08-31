import React from "react";
import "./home.css";

function Home(props) {
  return (
    <div className="home-container">
      <div className="picture-container">
        <img src={props.picture} alt="" height={500} width={350} />
      </div>
      <div className="info">
        <div>
          <h1>Tyler Letendre</h1>
        </div>
        <div>
          <h3>MERN Stack Developer</h3>
        </div>
        <div>
          <img src={props.reactPic} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
