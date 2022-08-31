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
          <h3>Full Stack Developer</h3>
        </div>
        <div>
        </div>
        <div className="images-container">
          <img src={props.reactPic} alt="" height={80} width={100}/>
          <img src={props.mongoDbPic} alt="" height={80} width={100}/>
          <img src={props.expressPic} alt="" height={80} width={100}/>
          <img src={props.nodePic} alt="" height={80} width={120}/>
        </div>
      </div>
    </div>
  );
}

export default Home;
