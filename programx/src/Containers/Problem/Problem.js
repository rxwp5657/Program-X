import React, { Component } from 'react';
import NavigationBar from "../../Components/NavigationBar/NavigationBar.js";
import './Problem.css';
import {connect} from 'react-redux';
import {goToExercises, requestProblem, sendCode,sendFile} from '../../actions.js';

//get the problem info

const mapStateToProps = (state) => {
  return {
    problem: state.requestProblem.problem,
    result: state.sendCode.result,
    file: state.sendCode.file,
  }
}

// get the function for changing the state of the page into the exercises list and the function
// for getting the problem.

const mapDispatchToProps = (dispatch) =>{
  return{
      goToExercises: (event) => dispatch(goToExercises(event.target.id)),
      onRequestProblem: (name) => dispatch(requestProblem(name)),
      onSendCode: (event) => dispatch(sendCode(document.getElementById("codeArea").value, event.target.id)),
      onSendFile: (event) => dispatch(sendFile(document.getElementById("file").files[0])),
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
        inputformat, outputformat, pconstraints, id} = this.props.problem;
    let {solution , result} = this.props.result
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
        <h2 class = "problemHeader2">Code:</h2>
        <textarea class="code" id="codeArea" cols="50" rows="30">TextArea</textarea>
        <label class = "plabel">Solution: {solution}</label>
        <label class = "plabel">Result: {result}</label>
        <button class="sendCode" id ={id} onClick = {this.props.onSendCode}>SEND CODE</button>
        <input type="file" class = "inFile" id="file"/>
        <button class="sendFile" onClick = {this.props.onSendFile}>SEND FILE</button>
      </div>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Problem);
