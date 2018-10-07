import React from 'react';
import Exercises from './Containers/Exercises/Exercises.js'
import Problem from './Containers/Problem/Problem.js';
import News from './Containers/News/News.js';

//constants that define the type of action that was triggered .

import {START_PROBLEM_PAGE ,
        START_EXERCISES_PAGE,
        START_NEWS_PAGE,
        REQUEST_EXERCISES_PENDING,
        REQUEST_EXERCISES_SUCCES,
        REQUEST_EXERCISES_FAILED,
        RQUEST_NEWS_PENDING,
        RQUEST_NEWS_SUCCES,
        RQUEST_NEWS_FAILED,
        RQUEST_PROBLEM_PENDING,
        RQUEST_PROBLEM_SUCCES,
        RQUEST_PROBLEM_FAILED,
      } from './constants.js';

// action triggered when a exercise is selected.

export const goToProblem = (id) => ({
    type: START_PROBLEM_PAGE,
    payload: <Problem name = {id}/>,
});

// action triggered when the exercises or start button from the navbar is selected.

export const goToExercises = () => ({
    type: START_EXERCISES_PAGE,
    payload: <Exercises />
});

// action triggered when news button is selected.

export const goToNews = () => ({
    type: START_NEWS_PAGE,
    payload: <News />
});

// action triggered when the "exercises" Container is mounted.

export const requestExercises = () => (dispatch) => {
  dispatch({type: REQUEST_EXERCISES_PENDING});
  fetch('http://localhost:3500/exercises')
    .then(response => response.json())
    .then(data => dispatch({type: REQUEST_EXERCISES_SUCCES, payload: data}))
    .catch(error => dispatch({type: REQUEST_EXERCISES_FAILED, payload: error}))
}

// action triggered when the "news" Container is mounted.

export const requestNews = () => (dispatch) => {
  dispatch({type: RQUEST_NEWS_PENDING});
  fetch('http://localhost:3500/news')
    .then(response => response.json())
    .then(data => dispatch({type: RQUEST_NEWS_SUCCES, payload: data}))
    .catch(error => dispatch({type: RQUEST_NEWS_FAILED, payload: error}))
}

// action triggered when the "problem" Container is mounted.

export const requestProblem = (id) => (dispatch) => {
  dispatch({type: RQUEST_PROBLEM_PENDING});
  fetch('http://localhost:3500/problem/'+id.replace(/\s/g, ''))
    .then(response => response.json())
    .then(data => dispatch({type: RQUEST_PROBLEM_SUCCES, payload: data}))
    .catch(error => dispatch({type: RQUEST_PROBLEM_FAILED, payload: error}))
}
