import React from 'react';
import './ProblemBox.css';
import Problem from "../../Containers/Problem/Problem.js"

//create a problem with the title 'title', difficulty 'difficulty'. . . and when clicked,
// use the function 'selectPageF', which will change the page state with the problem's info.

const ProblemBox = ({title, difficulty, score, key, selectPageF}) => {
  return(
    <div id = {title} onClick = {selectPageF} key = {key}>
        <div  id={title} class = "problemBox grow">
          <h1 id = {title} class = "problemH1">{title}</h1>
          <p  id = {title} class = "problemDif">{difficulty}</p>
          <p  id = {title} class = "problemScore">{score}</p>
        </div>
  </div>
  );
}

export default ProblemBox;
