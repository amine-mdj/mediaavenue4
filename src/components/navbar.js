import React, { useState, useEffect } from "react";
import "./navbar.css";
import logo from "../img/pineapple-web-logo.webp";
import Media from "../img/New_logo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import "../fontowesome";

const Navbar = ({ isActive, toggleClass }) => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  let links = "links";

  const scrolltop = () => {
    window.scrollTo(0, 0);
    window.scrollTo(0, 0);
  };

  const handlehome = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="wwraper">
      <div className={`nav ${isScrolled ? "scrolled" : ""}`}>
        <div onClick={handlehome} className="nav-logo">
          <img src={Media} alt="this is a logo" />
        </div>{" "}
        {isActive ? (
          <FontAwesomeIcon
            onClick={toggleClass}
            className="nav-hamburger"
            icon="fa-solid fa-x"
            size="xl"
            style={{ marginTop: "20px",fontSize:"24px", marginRight: "50px", color: "#4e8070" }}
          />
        ) : (
          <FontAwesomeIcon
            onClick={toggleClass}
            className="nav-hamburger"
            icon="fa-solid fa-bars"
            />
        )}
      </div>
      <div className="placeholder"></div>
      <div className={isActive ? `active ${links}` : ` ${links}`}>
        {/* <ul> 
               <li>
                  <Link  onClick={toggleOpen} to=''>our services</Link>
                  <div className={isOpen ? `active2 ${links2}` : ` ${links2}`}>
           <ul >
            <li><Link onClick={toggleClass} to='/programmation'>Web programming</Link></li>
            <li><Link onClick={toggleClass} to='creation'>Web design</Link></li>
            <li><Link onClick={toggleClass} to='strategie'>SEO strategy</Link></li>
            <li><Link onClick={toggleClass} to='/analyse'>Web analytics</Link></li>
            <li><Link onClick={toggleClass} to='publicité'>Online advertising</Link></li>

           </ul>
           </div>
                  </li>
               <li><Link to='/agency'>the agency</Link></li>
               <li><Link to='/contact'>contact</Link></li>
          </ul> */}
        <div className="links1">
          <h2>nos services</h2>
          <ul>
            <li>
              <Link
                onClick={() => {
                  toggleClass();
                  scrolltop();
                }}
                to="/programmation"
              >
                Programmation web
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  toggleClass();
                  scrolltop();
                }}
                to="creation"
              >
                Web design
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  toggleClass();
                  scrolltop();
                }}
                to="strategie"
              >
                Stratégie de Référencement SEO
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  toggleClass();
                  scrolltop();
                }}
                to="/analyse"
              >
                Analyse de Données
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  toggleClass();
                  scrolltop();
                }}
                to="publicité"
              >
                Publicité en Ligne
              </Link>
            </li>
          </ul>
        </div>
        <div className="links2">
          <h2>L'agence</h2>
          <Link
            onClick={() => {
              toggleClass();
              scrolltop();
            }}
            to="/agency"
          >
            L'agence
          </Link>
        </div>
        <div className="links3">
          <h2>contact</h2>
          <Link
            onClick={() => {
              toggleClass();
              scrolltop();
            }}
            to="/contact"
          >
            contact
          </Link>
        </div>
        
      </div>
      
    </div>
  );
};

export default Navbar;
