import React from 'react';
import NavButton from '../NavButton/NavButton.js'
import './NavigationBar.css'
import ScrollAnimation from 'react-animate-on-scroll';

// unordered list that will contain the navigation buttons. It also creates the buttons by using a
// object containing the name of the button and the function. 

const NavigationBar = ({elements}) => {
  return(
  <div>
      <ul class = "navList">
        {
          elements.map((object) => {
            return(
              <NavButton name = {object.text} f = {object.f} />
            );
          })
        }
      </ul>
    </div>
  );
}

export default NavigationBar;
