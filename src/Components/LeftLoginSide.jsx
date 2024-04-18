import React from 'react'
import "../assets/login.css"

function LeftLoginSide() {
  return (
    <div className="bg-blue-800 w-full">
      <span >
        <h1 style={{ marginTop: "100px", fontSize: "2rem",textAlign:"center"}}>Dscover the world's top Designers & Creatives</h1>
      </span>
      <div className="flex ">
        <img
          className="loginImg"
          src="https://tse1.mm.bing.net/th?id=OIP.WjBqLxzoxwEK3Ow02dveDAHaFj&pid=Api&P=0&h=180"
        />
      </div>
    </div>
  );
}

export default LeftLoginSide