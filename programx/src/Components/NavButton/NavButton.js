import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css"
import './NavButton.css'

//make a button with the name 'name' and use the funtion 'f' when its clicked.

const NavButton = ({name, f}) => {
  return(
    <div onClick = {f}>
      <li class = 'button'>{name}</li>
    </div>
  );
}

export default NavButton;
