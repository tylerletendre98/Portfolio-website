import "./App.css";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import picture from "./images/portfolioPic.JPG";
import nodePic from "./images/NodeJS.png";
import mongoDbPic from './images/mongodbPic.png'
import expressPic from './images/expressPic.png'
import reactPic from "./images/react-logo-png-9.png";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                mongoDbPic={mongoDbPic}
                picture={picture}
                nodePic={nodePic}
                reactPic={reactPic}
                expressPic={expressPic}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
