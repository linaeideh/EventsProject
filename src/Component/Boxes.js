import React from "react";
import ElectricCar from '../Assets/CarEvent.png'
import smartPhoneEvent from '../Assets/smartt.png'
import AIEvents from '../Assets/AIEventt.png'
import Technology from '../Assets/Techo.png'
const Boxes = () => {
  return (
   <div className="Event-Type-box">
  {/* <div className="Event-Type-card">
    <div className="Event-Type-image">
   
      <img src={ Technology} />
     <h3 style={{textAlign:"center"}}>Technology</h3>
    </div>
    <div className="content">
      
      
      <p>DIn publishing and graphic design,              
       </p>
    </div>
  </div>    
  <div className="Event-Type-card">
    <div className="Event-Type-image">
      <img src={ smartPhoneEvent} alt="smartPhoneEvent" />
      <h3 style={{textAlign:"center"}}>Mobile Technology</h3>
    </div>
   
  </div>  
  <div className="Event-Type-card">
    <div className="Event-Type-image">
      <img src={ AIEvents} alt="Aievent"/>
      <h3 style={{textAlign:"center"}}>AI</h3>
    </div>
   
  </div>  
  <div className="Event-Type-card">
    <div className="Event-Type-image">
      <img src={ElectricCar} alt="ElectricCar"/>
      <h3 style={{textAlign:"center"}}>Electric Car </h3>
    </div>
   
  </div>   */}
<a href="#" className="Box">
  <img src={Technology} className="Box__img" />
  <span className="Box__footer">
  <span style={{justifyContent:"center" ,fontWeight:"bold"}}>Technology Events</span>
    {/* <span>2 minutes!</span> */}
  </span>
  <span className="Box__action">
    <svg viewBox="0 0 448 512" title="play">
      <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" />
    </svg>
  </span>
</a>
<a href="#" className="Box">
  <img src={ElectricCar} className="Box__img" />
  <span className="Box__footer">
  <span style={{justifyContent:"center" ,fontWeight:"bold"}}> Car Events</span>
    {/* <span>2 minutes!</span> */}
  </span>
  <span className="Box__action">
    <svg viewBox="0 0 448 512" title="play">
      <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" />
    </svg>
  </span>
</a>
<a href="#" className="Box">
  <img src={AIEvents} className="Box__img" />
  <span className="Box__footer">
    <span style={{justifyContent:"center" ,fontWeight:"bold"}}>AI Events</span>
    {/* <span>2 minutes!</span> */}
  </span>
  <span className="Box__action">
    <svg viewBox="0 0 448 512" title="play">
      <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" />
    </svg>
  </span>
</a>
<a href="#" className="Box">
  <img src={smartPhoneEvent} className="Box__img" />
  <span className="Box__footer">
  <span style={{justifyContent:"center" ,fontWeight:"bold"}}>Smart Phone Event</span>
    {/* <span>2 minutes!</span> */}
  </span>
  <span className="Box__action">
    <svg viewBox="0 0 448 512" title="play">
      <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" />
    </svg>
  </span>
</a>
</div>

    
  );
};

export default Boxes;
