import React from 'react';
import './Header.css'
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css"

//make a header with the title Program Xercises and add some animation to it.

const Header = () => {
  return(
    <div class="Header">
      <ScrollAnimation animateIn = "zoomIn">
      <h1>Program <mark class = "second">Xercises</mark></h1>
      </ScrollAnimation>
    </div>
  );
};

export default Header;
