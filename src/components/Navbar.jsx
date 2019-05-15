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
          background-color:green;
          color:white;
          padding:5px;
          margin:5px;
        }
        img{
          width:100%;
          clip: rect(0px,0px,100px,0px);
        }
        .container{
          text-align:center;
          background-color:red;
        }
        .centered {
          position: absolute;
          top: 20%;
          left: 50%;
          transform: translate(-50%, -50%);
          color:white;
          font-family:"Fira Sans";
        }

      `}</style>
    <div className="container">
      <img src={mountains}/>
      <h1 className="centered">Avalanche Camping</h1>
    </div>
    <nav>
      <a href = '#'>Link 1</a>
      <a href = '#'>Link 1</a>
      <a href = '#'>Link 1</a>
      <a href = '#'>Link 1</a>
    </nav>

</div>
  );
}

export default Navbar;
