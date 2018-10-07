import React, { Component } from 'react';
import NavigationBar from "../../Components/NavigationBar/NavigationBar.js";
import './Problem.css';
import {connect} from 'react-redux';
import {goToExercises, requestProblem} from '../../actions.js';

//get the problem info

const mapStateToProps = (state) => {
  return {
    problem: state.requestProblem.problem,
  }
}

// get the function for changing the state of the page into the exercises list and the function
// for getting the problem.

const mapDispatchToProps = (dispatch) =>{
  return{
      goToExercises: (event) => dispatch(goToExercises(event.target.id)),
      onRequestProblem: (name) => dispatch(requestProblem(name)),
  }
}

class Problem extends Component {

  // request problem info

  componentDidMount(){
    this.props.onRequestProblem(this.props.name);
  }

  render(){
    const navigation = [
      {text: "Inicio", f: this.props.goToExercises},
      {text: "Discución", f: ''},
      {text: "Calificación", f: ''},
    ];
    let {pdescription, fdescription,
        inputformat, outputformat, pconstraints} = this.props.problem;
    return(
      <div class="problem">
        <NavigationBar elements = {navigation}/>
        <h1 class="problemHeader1">{this.props.name}</h1>
        <p class ="description">{pdescription}</p>
        <h2 class = "problemHeader2">Function</h2>
        <p class="description">{fdescription}</p>
        <h2 class = "problemHeader2">Input Format</h2>
        <p class = "description">{inputformat}</p>
        <h2 class = "problemHeader2">Output Format</h2>
        <p class = "description">{outputformat}</p>
        <h2 class = "problemHeader2">Problem Constraints</h2>
        <p class = "description">{pconstraints}</p>
        <input type="text" class="code"/>
      </div>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Problem);
