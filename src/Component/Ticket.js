import React, { useState, useEffect } from "react";
import '../Style/Ticket.css'
import AITicket from "../Assets/TicketAi.png";
import CarTicket from "../Assets/car-ticket (2).png";
import TechTicket from "../Assets/TelTicket.png";

const Ticket = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) { 
        setIsScrolled(true); // عند التمرير للأسفل
      } else  {
        setIsScrolled(false); // عند العودة للأعلى
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`card-container ${isScrolled ? 'scroll-rotate-down' : 'scroll-rotate-up'}`}>
      <div className="card">
        <img src={AITicket} alt="Card 1" />
      </div>
      <div className="card">
        <img src={CarTicket} alt="Card 2" />
      </div>
      <div className="card">
        <img src={TechTicket} alt="Card 3" />
      </div>
      {/* <div className="card">
        <img src={TechTicket} alt="Card 4" />
      </div> */}
    </div>
  );
};

export default Ticket;
