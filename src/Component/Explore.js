import React from "react";
import TechEvent from "../Assets/TechEvent.png";
import AIEvent from "../Assets/AIEvent.png";
import PhoneEvent from "../Assets/PhoneEvent.png";
const Explore = () => {
  return (
    <div className='Explore-Section'>
      <div className='Explore-Event'>
        <img
          src={AIEvent}
          alt='Event Image'
        />
        <div className='Explore-Event-content'>
          <h2>Card Heading</h2>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <a href='#' className='Explore-Event-button'>
            Find out more
            <span className='material-symbols-outlined'>arrow_right_alt</span>
          </a>
        </div>
      </div>

      <div className='Explore-Event'>
        <img
          src={PhoneEvent}
          alt='Event Image'
        />
        <div className='Explore-Event-content'>
          <h2>Card Heading</h2>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <a href='#' className='Explore-Event-button'>
            Find out more
            <span className='material-symbols-outlined'>arrow_right_alt</span>
          </a>
        </div>
      </div>

      <div className='Explore-Event'>
        <img
          src={TechEvent}
          alt='Event Image'
        />
        <div className='Explore-Event-content'>
          <h2>Card Heading</h2>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <a href='#' className='Explore-Event-button'>
            Find out more
            <span className='material-symbols-outlined'>arrow_right_alt</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Explore;


// .Explore{
//     font-size: 30px;
//     margin-bottom: 0px;
//     margin-left: 50px;
//     font-weight: bold;
//     color: #5477e8;
//     text-shadow: 2px 2px 2px rgba(130, 129, 129, 0.3),
//       -3px -3px 5px rgba(0, 0, 0, 0.3); /* تأثير الظل */
//     transform: perspective(500px) rotateX(10deg) rotateY(10deg); /* إضافة البعد الثالث */
//     animation: text3D 2s ease-out forwards;
//   }
  
//   .Explore-Section {
//     display: flex;
//         flex-wrap: nowrap;
//         justify-content: center;
//         gap: 20px;
//         padding: 20px;
//   }
  
  
//   .Explore-Event {
//     width: 12rem;
//     height: 15rem;
//     border-radius: 10px;
//     overflow: hidden;
//     cursor: pointer;
//     position: relative;
//     color: rgb(240, 240, 240); /* Converted $color-primary-white to RGB */
//     box-shadow: 0 10px 30px 5px rgba(0, 0, 0, 0.2);
//   }
  
//   .Explore-Event img {
//     position: absolute;
//     object-fit: cover; /* تستخدم لتغطية الحاوية بالحجم الكامل */
//     width: 100%;
//     height: 100%;
//     top: 0;
//     left: 0;
//     opacity: 0.9;
//     transition: opacity 0.2s ease-out;
//   }
  
//   .Explore-Event h2 {
//     position: absolute;
//     inset: auto auto 30px 30px;
//     margin: 0;
//     transition: inset 0.3s 0.3s ease-out;
//     font-family: "Roboto Condensed", sans-serif;
//     font-weight: normal;
//     text-transform: uppercase;
//   }
  
//   .Explore-Event p,
//   .Explore-Event a {
//     position: absolute;
//     opacity: 0;
//     max-width: 80%;
//     transition: opacity 0.3s ease-out;
//   }
  
//   .Explore-Event p {
//     inset: auto auto 80px 30px;
//   }
  
//   .Explore-Event a {
//     inset: auto auto 40px 30px;
//     color: inherit;
//     text-decoration: none;
//   }
  
//   .Explore-Event:hover h2 {
//     inset: auto auto 220px 30px;
//     transition: inset 0.3s ease-out;
//   }
  
//   .Explore-Event:hover p,
//   .Explore-Event:hover a {
//     opacity: 1;
//     transition: opacity 0.5s 0.1s ease-in;
//   }
  
//   .Explore-Event:hover img {
//     transition: opacity 0.3s ease-in;
//     opacity: 1;
//   }
  
//   .material-symbols-outlined {
//     vertical-align: middle;
//   }