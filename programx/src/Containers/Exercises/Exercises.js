import React, { Component } from 'react';
import NavigationBar from "../../Components/NavigationBar/NavigationBar.js";
import ProblemList from "../../Components/ProblemList/ProblemList.js";
import './Exercises.css';
import {connect} from 'react-redux';
import {goToProblem, goToNews, requestExercises} from '../../actions.js';

//Make the list of exercises retrived from the database available as props.

const mapStateToProps = (state) => {
  return {
      exercises: state.requestExercises.exercises,
  }
}

//Get the actions of changing the state of the page (goToNews and selectProblem) and the
// request function for getting the list of exercises.

const mapDispatchToProps = (dispatch) =>{
  return{
      selectProblem: (event) => dispatch(goToProblem(event.target.id)),
      goToNews: (event) => dispatch(goToNews()),
      onRequestExercises: () => dispatch(requestExercises()),
  }
}

//React Container whose state is based on the exercises

class Exercises extends Component {

  //When the Container is loaded, get the list of exercises.

  componentDidMount(){
    this.props.onRequestExercises();
  }
  render() {

    //get the navigation buttons and functions. Also map the exercises to a variable.

    const navigation = [{text: "Ejercicios", f: ''},{text: "Noticias", f: this.props.goToNews}];
    let exercises = this.props.exercises;
    return(
      <div class = "exercises">
        <NavigationBar elements = {navigation}/>
        <ProblemList problems = {exercises} selectPageF = {this.props.selectProblem}/>
      </div>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Exercises);
