import React, { useState } from "react";
import "../Style/Header.css";
import { Link } from "react-router";
import { TfiReddit, TfiCar, TfiMobile, TfiWorld } from "react-icons/tfi";

import aboutusImg from "../Assets/About.jpg"


const Header = () => {
  const [isShown, setIsShown] = useState(false);
  const [isAbout, setIsAbout] = useState(false);
  const [isCountryShown, setIsCountryShown] = useState(false);
  const [isDropdownLocked, setIsDropdownLocked] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("Country");

  const [isShownHamburger , setIsShownHamburger] = useState(false);
  const [isAboutHamburger , setIsAboutHamburger] = useState(false);
  const [isCountryHamburger, setIsCountryHamburger] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleMouseEnter = () => {
    if (!isDropdownLocked && !isMenuOpen) {
      setIsCountryShown(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isDropdownLocked && !isMenuOpen) {
      setIsCountryShown(false);
    }
  };

  const handleClick = () => {
    setIsCountryHamburger(!isCountryHamburger);
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setIsDropdownLocked(false); // إخفاء القائمة بعد اختيار الدولة
    setIsCountryShown(false);
  };


  // EventType
  const handleMouseEnterEventType = () => {
    if (!isMenuOpen) {
      setIsShown(true);
    }};

  const handleMouseLeaveEventType = () => {
    if (!isMenuOpen) {
      setIsShown(false);
    }};
  
  const handleClickEventType = () => {
    setIsShownHamburger(!isShownHamburger);
  };


    // AboutUs
    const handleMouseEnterAboutUs = () => {
      if (!isMenuOpen) {
      setIsAbout(true);
    }};
    
    const handleMouseLeaveAboutUs = () => {
      if (!isMenuOpen) {
      setIsAbout(false);
    }};
    
    const handleClickAboutUs = () => {
      setIsAboutHamburger(!isAboutHamburger);
    };

  return (
    <nav className='nav'>
      <button className="navicon" onClick={toggleMenu}>
        ☰
      </button>
      <div className='logo'>
        <img src="eventLogo.png" alt='Logo' className='logo-img' />
      </div>

      <ul className={`nav-items ${isMenuOpen ? "show" : ""}`}>
        <li className='nav-item dropdown'>
          <span
            className='nav-Link'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
          >
            <span className="nav-Link-name">{selectedCountry}</span>
            <span className='arrow ' style={{ fontSize: "10px" }}>
              {isCountryShown ? "▲" : "▼"}
            </span>
          
          <nav className={`Country ${isCountryShown ? "show" : ""} ${isMenuOpen && isCountryHamburger ? "m" : ""}`}>
            <ul className='Countrys'>
              <li
                className='Country-item'
                onClick={() => handleCountrySelect(<span>All Country</span>)}
              >
                <Link className='Country-Link' style={{ fontSize: "13px" }}>
                  All Country
                </Link>
              </li>
              <li
                className='Country-item'
                onClick={() =>
                  handleCountrySelect(
                    <span>
                      <img
                        src='https://flagcdn.com/w20/ae.png'
                        alt='Dubai Flag'
                        className='flag-icon'
                        style={{ marginRight: "8px" }} // إضافة تباعد بين العلم والنص
                      />
                      Dubai
                    </span>
                  )
                }
              >
                <img
                  src='https://flagcdn.com/w20/ae.png'
                  alt='Dubai Flag'
                  className='flag-icon'
                />
                <Link className='Country-Link'>Dubai</Link>
              </li>
              <li
                className='Country-item'
                onClick={() =>
                  handleCountrySelect(
                    <span>
                      <img
                        src='https://flagcdn.com/w20/qa.png'
                        alt='Qatar Flag'
                        className='flag-icon'
                      />
                      Qatar
                    </span>
                  )
                }
              >
                <img
                  src='https://flagcdn.com/w20/qa.png'
                  alt='Qatar Flag'
                  className='flag-icon'
                />
                <Link className='Country-Link'>Qatar</Link>
              </li>
              <li
                className='Country-item'
                onClick={() =>
                  handleCountrySelect(
                    <span>
                      <img
                        src='https://flagcdn.com/w20/us.png'
                        alt='USA Flag'
                        className='flag-icon'
                      />
                      USA
                    </span>
                  )
                }
              >
                <img
                  src='https://flagcdn.com/w20/us.png'
                  alt='USA Flag'
                  className='flag-icon'
                />
                <Link className='Country-Link'>USA</Link>
              </li>
              <li
                className='Country-item'
                onClick={() =>
                  handleCountrySelect(
                    <span>
                      <img
                        src='https://flagcdn.com/w20/cn.png'
                        alt='China Flag'
                        className='flag-icon'
                      />
                      China
                    </span>
                  )
                }
              >
                <img
                  src='https://flagcdn.com/w20/cn.png'
                  alt='China Flag'
                  className='flag-icon'
                />
                <Link className='Country-Link'>China</Link>
              </li>
            </ul>
          </nav>
          </span>
        </li>

        <li className='nav-item dropdown'>
        <span
          className="nav-Link"
          onMouseEnter={handleMouseEnterEventType}
          onMouseLeave={handleMouseLeaveEventType}
          onClick={handleClickEventType}
        >
            <span className="nav-Link-name">Event Type</span>
            <span className='arrow' style={{ fontSize: "10px" }}>
              {isShown ||isShownHamburger ? "▲" : "▼"}
            </span>
            <nav className={`Event-type-show ${isShown  ? "show" : ""} ${isMenuOpen && isShownHamburger ? "m" : ""}`}>
              <ul className='Event-type'>
                <li className='Event-type-item'>
                  <TfiWorld size={18} />
                  <Link className='Event-type-Link'>Technology</Link>
                </li>
                <li className='Event-type-item'>
                  <TfiMobile size={25} />
                  <Link className='Event-type-Link' style={{ fontSize: "16px" }}>
                    Mobile Technology
                  </Link>
                </li>
                <li className='Event-type-item'>
                  <TfiCar size={20} />
                  <Link className='Event-type-Link'>Electric Car </Link>
                </li>
                <li className='Event-type-item'>
                  <TfiReddit size={23} />
                  <Link className='Event-type-Link'>AI</Link>
                </li>
              </ul>
            </nav>
          </span>
        </li>

        <li className='nav-item'>
          <Link className='nav-Link'>
            <span>Pricing</span>
          </Link>
        </li>

        <li className='nav-item'>
          <Link className='nav-Link'>
            <span>Explore event</span>
          </Link>
        </li>

        <li className='nav-item dropdown'>
          <span
            className='nav-Link'
            onMouseEnter={handleMouseEnterAboutUs}
            onMouseLeave={handleMouseLeaveAboutUs}
            onClick={handleClickAboutUs}
          >
            <span className="nav-Link-name">About Us</span>
            <span className='arrow'>{isAbout || isAboutHamburger ? "▲" : "▼"}</span>
            <nav className={`Aboutus-show ${isAbout ? "show" : ""} ${isMenuOpen && isAboutHamburger ? "m" : ""}`}>
              <div className='Aboutus'>
                <ul className='Aboutus-learnmore'>
                  <li className='Aboutus-title'>
                    <strong style={{ color: "black" }}>Learn more</strong>
                  </li>
                  <li className='Aboutus-item'>
                    <Link className='Aboutus-Link'>
                      About us</Link>
                      <p>
                        Creating powerful experiences for the people you bring
                        together
                      </p>
                    
                  </li>
                  <li className='Aboutus-item' style={{ color: "black" }}>
                    <Link className='Aboutus-Link'>
                      Our Mission & Culture </Link>
                      <p>Learn what innovatex's culture stands for.</p>
                   
                  </li>
                  <li className='Aboutus-item'>
                    <Link className='Aboutus-Link'>
                      Partners </Link>
                      <p>Let's bring people together ... together!</p>
                   
                  </li>
                  <li className='Aboutus-item'>
                    <Link className='Aboutus-Link'>
                      Careers </Link>
                      <p>Come work somewhere that doesn't feel so work-y!</p>
                   
                  </li>
                </ul>
                <div className='Aboutus-img-learnmore'>
                  <img
                    width={200}
                    height={150}
                    src={aboutusImg}
                    alt='Aboutus-img'
                    className='Aboutus-img'
                  />
                  <div style={{ color: "black" }}>
                    <strong>Bringing People Together</strong>
                    <p>
                      CEO Chris Sykes on how Swoogo's people-focused culture is
                      the driving force behind its continued growth.
                    </p>
                    <Link className='learn-more'>Learn more →</Link>
                  </div>
                </div>
              </div>
            </nav>
          </span>
        </li>
      </ul>
      <div className='login-btn-container'>
        <button className='login-btn'>Login</button>
      </div>
    </nav>
  );
};

export default Header;