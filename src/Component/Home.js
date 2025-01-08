import React, { useState } from "react";
import Ticket from "./Ticket";
import Boxes from "./Boxes";
import "../Style/Home.css";

const Home = () => {
  
    const [text, setText] = useState('Innovatex');
  
    const handleInput = (event) => {
      setText(event.target.innerText);
    };
  // const [showText, setShowText] = useState(false);

  // لتغيير النص عند التمرير للأسفل أو للأعلى
  // const handleScroll = () => {
   
  //     if (window.scrollY >= 100) {
  //       setShowText(true);
  //     } else {
  //       setShowText(false);
  //     }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
      
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <div className="home">
      <div className="card-section">
        <p className="home-desc">
        <span
      className="Project-name"
      contentEditable
      suppressContentEditableWarning={true}
      onInput={handleInput}
      data-heading={text}
    >
      {text}
    </span>
          <br />
          is your go-to platform for easy booking of the latest technology and
          AI events, connecting you with conferences and workshops that shape
          the future of innovation.
          <br/><br/>
       </p>
       
        <Ticket/>
      </div>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"className="svg" >
  <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
    <stop offset="0%" stopColor="#BAE6FD" />
    <stop offset="74%" stopColor="#508CEB" />
  </linearGradient>
  <path fill="url(#gradient)" fillOpacity={1} d="M0,64L48,58.7C96,53,192,43,288,42.7C384,43,480,53,576,85.3C672,117,768,171,864,176C960,181,1056,139,1152,122.7C1248,107,1344,117,1392,122.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
</svg>
      
        <div className="boxes-container">
  
 
      <Boxes />
        </div>
      
    </div>
  );
};

export default Home;
