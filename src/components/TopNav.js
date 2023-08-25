import React from "react";
import { AiOutlineLogout } from "react-icons/ai";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

import {onAuthStateChanged,signOut} from "firebase/auth";

import { firebaseAuth } from "../utils/firebase-config";

const TopNav = ({ isScroll }) => {

  const navlinks = [
    { name: "Home", link: "/" },
    { name: "Tv Show", link: "/tv" },
    { name: "My List", link: "/mylist" },
    { name: "Movies", link: "/movies" },
  ];

  const navigate = useNavigate()

  onAuthStateChanged(firebaseAuth, (currentUser)=>{
    if(!currentUser)navigate('/login')
  })

  return (
    <NavContainer>
      <nav className={`${isScroll ? "scroll" : "notScroll"}`}>
        <div className="left-Side">
          <div className="logo">
            <img
              src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1668265433/NetflixApp/2560px-Netflix_2015_logo.svg_rbicwl_knwp6f.png"
              alt="logo"
            />
          </div>
          <ul className="links">
            {navlinks.map(({ name, link }) => {
              return (
                <li key={name}>
                  <Link to={link}>{name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="right-Side">
          <button onClick={()=>{signOut(firebaseAuth)}}>
            <AiOutlineLogout />
          </button>
        </div>
      </nav>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  .notScroll {
    display: flex;
  }
  .scroll {
    display: flex;
    background-color: black;
  }
  nav {
    position: sticky;
    top: 0;
    height: 5rem;
    width: 100%;
    justify-content: space-between;
    position: fixed;
    z-index: 2;
    padding: 0.4rem;
    align-items: center;
    transition: 0.25s ease-in-out;
    .left-Side {
      display: flex;
      align-items: center;
      gap: 2rem;
      margin-left: 4rem;
      .logo {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      img {
        width: 10rem;
        height: 2rem;
      }
    }
    .links {
      display: flex;
      list-style-type: none;
      gap: 3rem;
      
      li {
        a {
          color: white;
          text-decoration: none;
        }
      }
    }
  }

  .right-Side{
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-right: 1rem;
    button{
      background-color: red;
      border: none;
      cursor: pointer;
      border-radius: 23%;
    }&:focus{
      outline: none;
    }svg{
      color: white;
      font-size: 2.3rem;
    }
  }
`;

export default TopNav;
