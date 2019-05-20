import React from 'react';
import mountains from '../assets/images/testpic.jpeg';

function Navbar(){
  return (

    <div>
      <style jsx>{`
      @import url(https://fonts.googleapis.com/css?family=Fira+Sans|Oswald);
        nav{
          display:grid;
          grid-template-columns:1fr 1fr 1fr 1fr;
          text-align:center;
          width:100%;
        }
        a{
          background-color:darkgreen;
          color:white;
          padding:10px;
          margin:5px;
          border-radius:10px;
          font-family:"Fira Sans";
          text-align:center;
        }
        img{
          width:100%;
          height:auto;
          border-radius:25px;
          border-style:dotted;
          border-width:1px;
          border-color:green;
          background-color:green;
        }
        .container{
         
          margin-left:-15px;
          margin-right:-15px;
        }
        .centered {
          position: absolute;
          top: 20%;
          left: 50%;
          transform: translate(-50%, -50%);
          color:white;
          font-family:"Fira Sans";
          font-size:5vw;
        }

      `}</style>
    <div className="container">
      <img src={mountains} alt="mountains and trees"/>
      <h1 className="centered">Avalanche Camping</h1>
      <p>fuck thids project</p>

    <nav>
      <a href = 'Home'>Home</a>
      <a href = 'About'>About</a>
      <a href = 'Location and Campgrounds'>Location & CampGrounds</a>
      <a href = 'SignIn'>Sign In</a>
    </nav>
    </div>
</div>
  );
}
export default Navbar;
