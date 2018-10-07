import React, { Component } from 'react';
import './App.css';
import 'tachyons'
import Header from '../../Components/Header/Header.js'
import Exercises from '../Exercises/Exercises.js'
import Problem from '../Problem/Problem.js'
import News from '../News/News.js'
import {connect} from 'react-redux'

// listen to any changes on the state of the page.

const mapStateToProps = (state) => {
  return {
    page: state.changePage.page,

  }
}

const mapDispatchToProps = (dispatch) =>{
  return{

  }
}

//update the state of the page

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        {this.props.page}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
