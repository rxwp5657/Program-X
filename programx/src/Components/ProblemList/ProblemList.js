import React from 'react'
import ProblemBox from '../ProblemBox/ProblemBox.js'
import './ProblemList.css'

// make a list of problems with a list of objects where each of them has the description of a problem.

const ProblemList = ({problems, selectPageF}) => {
  return(
    <div>
      <ul class = "problemlist">
        {
          problems.map((problem) => {
            return(
              <ProblemBox
                title = {problem.title}
                difficulty = {problem.difficulty}
                score = {problem.score}
                key = {problem.title}
                selectPageF = {selectPageF}/>
            );
          })
        }
      </ul>
    </div>
  );
}

export default ProblemList;
