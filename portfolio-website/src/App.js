import "./App.css";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import picture from "./images/portfolioPic.JPG";
import mongoDbPic from "./images/mongodbNewPic.jpg";
import nodePic from "./images/nodejs.jpg";
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
                picture={picture}
                mongoDbPic={mongoDbPic}
                nodePic={nodePic}
                reactPic={reactPic}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
