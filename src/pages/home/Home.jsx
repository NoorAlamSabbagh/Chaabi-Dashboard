import React from "react";
import "./home.scss";

const Home = () => {
  return (
    <>
      <div>
        <h1>Hello, Noor Alam</h1>
        <p>Following is Your Organization's Performance Summary</p>
      </div>
      <div className="home">
        <div className="box box1">
          <img src="images\Frame 42.png" alt="Box 1"></img>
        </div>
        <div className="box box2">
          <img src="images\Frame 35292.png" alt="Box 2"></img>
        </div>
        <br></br>
        <div className="box box3">
          <img src="images\Frame 35293.png" alt="Box 3"></img>
        </div>
        <div className="box box4">
          <img src="images\Frame 35294.png" alt="Box 4"></img>
        </div>
        <br></br>
        <div className="box box7">
          <img src="images\Monthly.png" alt="Box 7"></img>
        </div>
        <div className="box box9">
          <img src="images\Group 289229.png" alt="Box 9"></img>
        </div>
        <div className="box box6">
          <img src="images\Last14.png"  width={700} alt="Box 6"></img>
        </div>
        <div className="box box5">
          <img src="images\Chapter.png" alt="Box 5"></img>
        </div>
        <div className="box box8">
          <img src="images\quiz passing.png" alt="Box 8"></img>
        </div>
        
      </div>
    </>
  );
};

export default Home;
